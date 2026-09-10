"use client";

import { useState } from "react";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  Check,
  Plus,
  CalendarDays,
} from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "'Source Sans 3', system-ui, sans-serif";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap";

const NAV = ["Zespół", "Cennik", "Rezerwacja", "FAQ"];
const TEAM = [
  { n: "dr n. med. Anna Wróbel", s: "Stomatologia zachowawcza" },
  { n: "lek. dent. Piotr Kaczmarek", s: "Implantologia" },
  { n: "lek. dent. Marta Lis", s: "Ortodoncja" },
];
const TREATMENTS = [
  { n: "Przegląd + konsultacja", p: "150 zł", t: "30 min" },
  { n: "Higienizacja (skaling + piaskowanie)", p: "350 zł", t: "45 min" },
  { n: "Wybielanie nakładkowe", p: "1 200 zł", t: "60 min" },
  { n: "Leczenie próchnicy", p: "od 300 zł", t: "45 min" },
];
const SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
const FAQ = [
  { q: "Czy pierwsza wizyta boli?", a: "Pierwsza wizyta to bezbolesny przegląd i konsultacja. Leczenie planujemy na kolejny termin, zawsze w znieczuleniu." },
  { q: "Jak przygotować się do higienizacji?", a: "Nie wymaga przygotowania. Po zabiegu zalecamy 2 godziny bez kawy, herbaty i barwiących produktów." },
  { q: "Czy rozkładacie płatność na raty?", a: "Tak — leczenie powyżej 2 000 zł można rozłożyć na nieoprocentowane raty do 12 miesięcy." },
];

function nextDays(count: number) {
  const names = ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."];
  const out: { label: string; sub: string }[] = [];
  const d = new Date("2026-09-14");
  for (let i = 0; i < count; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i);
    out.push({ label: names[x.getDay()], sub: `${x.getDate()}.${x.getMonth() + 1}` });
  }
  return out;
}

export default function AuraDentalDemo() {
  const days = nextDays(7);
  const [treatment, setTreatment] = useState(TREATMENTS[1].n);
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3B3A36]" style={{ fontFamily: SANS }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry="kliniki stomatologicznej Aura Dental" />

      {/* Header */}
      <header className="border-b border-[#E6DECF] bg-[#FAF7F2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-2xl tracking-tight text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>
            Aura<span className="text-[#7A9174]"> Dental</span>
          </span>
          <nav className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm font-semibold text-[#6B6A63] hover:text-[#2F3B32]">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+48123456789" className="hidden items-center gap-2 text-sm font-bold text-[#2F3B32] sm:flex">
              <Phone className="h-4 w-4 text-[#7A9174]" /> Rejestracja: 12 345 67 89
            </a>
            <a href="#rezerwacja" className="rounded-full bg-[#7A9174] px-5 py-2 text-sm font-bold text-white hover:bg-[#6b8265]">
              Umów wizytę
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A9174]">Klinika stomatologiczna · Warszawa</span>
            <h1 className="mt-5 text-5xl leading-[1.1] text-[#2F3B32] md:text-6xl" style={{ fontFamily: SERIF, fontWeight: 700 }}>
              Spokojna wizyta.<br />
              <span className="italic text-[#7A9174]">Zdrowy uśmiech.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-[#6B6A63]">
              Delikatne leczenie, cyfrowa diagnostyka i pełna transparentność
              kosztów — w kameralnym, ciepłym wnętrzu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { i: ShieldCheck, t: "Certyfikat ISO 9001" },
                { i: Star, t: "4.9 / 5 · 640 opinii" },
                { i: Clock, t: "Wizyty także w soboty" },
              ].map(({ i: Icon, t }) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-[#E6DECF] bg-white px-4 py-2 text-sm font-semibold text-[#4A4A44]">
                  <Icon className="h-4 w-4 text-[#7A9174]" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#E6DECF] bg-white p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#9A9890]">Nasz zespół</div>
            <div className="mt-4 space-y-4">
              {TEAM.map((m) => (
                <div key={m.n} className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#DDE7D9] to-[#EDE4D3]" />
                  <div>
                    <div className="text-sm font-bold text-[#2F3B32]">{m.n}</div>
                    <div className="text-xs text-[#6B6A63]">{m.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rezerwacja */}
      <section id="rezerwacja" className="px-6 py-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E6DECF] bg-white p-8 shadow-[0_20px_60px_-30px_rgba(90,80,60,.4)]">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>Rezerwacja wizyty</h2>
          <p className="mt-1 text-[#6B6A63]">Wybierz zabieg, dzień i godzinę.</p>

          {!booked ? (
            <>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#9A9890]">1. Zabieg</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {TREATMENTS.map((t) => (
                  <button key={t.n} onClick={() => setTreatment(t.n)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      treatment === t.n ? "border-[#7A9174] bg-[#EEF2EB] text-[#3F5138]" : "border-[#E6DECF] text-[#6B6A63] hover:border-[#c9bfa9]"
                    }`}>
                    {t.n}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#9A9890]">2. Dzień</p>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                {days.map((d, i) => (
                  <button key={i} onClick={() => setDay(i)}
                    className={`flex min-w-[64px] flex-col items-center rounded-xl border px-3 py-2 text-xs font-bold ${
                      day === i ? "border-[#7A9174] bg-[#7A9174] text-white" : "border-[#E6DECF] text-[#4A4A44]"
                    }`}>
                    <span>{d.label}</span>
                    <span className="text-[11px] opacity-80">{d.sub}</span>
                  </button>
                ))}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#9A9890]">3. Godzina</p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {SLOTS.map((s) => (
                  <button key={s} onClick={() => setSlot(s)}
                    className={`rounded-lg border px-2 py-2 text-sm font-bold ${
                      slot === s ? "border-[#7A9174] bg-[#7A9174] text-white" : "border-[#E6DECF] text-[#3B3A36] hover:border-[#7A9174]"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>

              <button disabled={!slot} onClick={() => setBooked(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7A9174] px-6 py-3 text-sm font-bold text-white disabled:opacity-40">
                <CalendarDays className="h-4 w-4" /> Potwierdź rezerwację
              </button>
            </>
          ) : (
            <div className="mt-6 rounded-2xl border border-[#CBD9C4] bg-[#EEF3EB] p-6">
              <div className="flex items-center gap-2 font-bold text-[#3F5138]">
                <Check className="h-5 w-5" /> Wizyta wstępnie zarezerwowana
              </div>
              <p className="mt-2 text-sm text-[#4A4A44]">
                {treatment} — {days[day].label} {days[day].sub}, godz. <strong>{slot}</strong>.
                Prześlemy SMS z potwierdzeniem i przypomnieniem.
              </p>
              <button onClick={() => { setBooked(false); setSlot(null); }} className="mt-4 text-sm font-bold text-[#3F5138] underline">
                Wybierz inny termin
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>Cennik zabiegów</h2>
          <div className="mt-6 divide-y divide-[#E6DECF] overflow-hidden rounded-2xl border border-[#E6DECF] bg-white">
            {TREATMENTS.map((t) => (
              <div key={t.n} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-bold text-[#2F3B32]">{t.n}</p>
                  <p className="text-xs text-[#9A9890]">{t.t}</p>
                </div>
                <span className="text-sm font-bold text-[#7A9174]">{t.p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>Pytania pacjentów</h2>
          <div className="mt-6 flex flex-col gap-3">
            {FAQ.map((item, i) => {
              const open = faq === i;
              return (
                <div key={item.q} className="rounded-2xl border border-[#E6DECF] bg-white">
                  <button onClick={() => setFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="font-bold text-[#2F3B32]">{item.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 text-[#7A9174] transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  {open && <p className="px-5 pb-4 text-sm leading-relaxed text-[#5A5951]">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-[#E6DECF] bg-[#F3EEE4] px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <span className="text-xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>Aura Dental</span>
            <p className="mt-3 flex items-center gap-2 text-sm text-[#6B6A63]"><MapPin className="h-4 w-4 text-[#7A9174]" /> ul. Wiejska 12, Warszawa</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#6B6A63]"><Clock className="h-4 w-4 text-[#7A9174]" /> Pon–Pt 8–20 · Sob 9–14</p>
          </div>
          <div>
            <div className="text-sm font-bold text-[#2F3B32]">Rejestracja</div>
            <a href="tel:+48123456789" className="mt-3 flex items-center gap-2 text-sm text-[#7A9174]"><Phone className="h-4 w-4" /> 12 345 67 89</a>
            <p className="mt-2 text-sm text-[#6B6A63]">rejestracja@auradental.pl</p>
          </div>
          <p className="text-xs text-[#9A9890] md:text-right">
            © 2026 Aura Dental Clinic. NIP 000-000-00-00.<br />Wpis do RPWDL nr 000000.
          </p>
        </div>
      </footer>
    </div>
  );
}
