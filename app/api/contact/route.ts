import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO ?? "kontakt@avenise-flow.pl";
const FROM = process.env.CONTACT_FROM ?? "AveniseFlow <onboarding@resend.dev>";

type Payload = {
  name?: string;
  email?: string;
  scope?: string;
  message?: string;
  company?: string; // honeypot — realny użytkownik zostawia puste
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const esc = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  // Honeypot: boty wypełniają ukryte pole — udajemy sukces i nic nie wysyłamy.
  if (data.company) return NextResponse.json({ ok: true });

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const scope = (data.scope ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Uzupełnij imię, e-mail i wiadomość." },
      { status: 400 },
    );
  }
  if (!isEmail(email) || email.length > 200) {
    return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 400 });
  }
  if (name.length > 120 || scope.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Zbyt długa treść formularza." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] Brak RESEND_API_KEY w środowisku.");
    return NextResponse.json(
      { error: "Wysyłka jest chwilowo niedostępna. Napisz bezpośrednio na kontakt@avenise-flow.pl." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Nowe zapytanie ze strony${scope ? ` — ${scope}` : ""}`,
      text:
        `Imię / firma: ${name}\n` +
        `E-mail: ${email}\n` +
        `Zakres: ${scope || "—"}\n\n` +
        message,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 16px">Nowe zapytanie ze strony AveniseFlow</h2>
          <p style="margin:4px 0"><strong>Imię / firma:</strong> ${esc(name)}</p>
          <p style="margin:4px 0"><strong>E-mail:</strong> ${esc(email)}</p>
          <p style="margin:4px 0"><strong>Zakres:</strong> ${esc(scope) || "—"}</p>
          <p style="margin:16px 0 4px"><strong>Wiadomość:</strong></p>
          <p style="white-space:pre-wrap;margin:0">${esc(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Unexpected error:", e);
    return NextResponse.json({ error: "Błąd serwera. Spróbuj ponownie." }, { status: 500 });
  }
}
