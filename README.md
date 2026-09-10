# AveniseFlow

Strona agencji AveniseFlow — Next.js (App Router) + Tailwind CSS + Lucide Icons.
Dark mode, glassmorphism, gradient akcentów `#00D2FF → #7B2CBF`.

## Wymagania

Node.js 18.18+ (zalecane 20 LTS). Na tym komputerze Node nie jest zainstalowany —
pobierz z https://nodejs.org i zainstaluj, a następnie:

```bash
npm install
npm run dev
```

Aplikacja: http://localhost:3000

## Formularz kontaktowy (Resend)

Zgłoszenia z formularza (`app/api/contact/route.ts`) idą e-mailem na
`kontakt@avenise-flow.pl` przez [Resend](https://resend.com).

1. Załóż konto na resend.com, wygeneruj klucz w **API Keys**.
2. Skopiuj `.env.example` → `.env.local` i wklej `RESEND_API_KEY=...`.
3. Na Vercel: **Project → Settings → Environment Variables** → dodaj `RESEND_API_KEY`
   (Production + Preview), zrób redeploy.
4. Domyślnie nadawcą jest testowy adres Resend (`onboarding@resend.dev`). Aby
   wysyłać z `avenise-flow.pl`, zweryfikuj domenę w Resend (Domains → rekordy DNS)
   i ustaw `CONTACT_FROM=Formularz <formularz@avenise-flow.pl>`.

Bez `RESEND_API_KEY` endpoint zwraca 503, a formularz pokazuje komunikat z prośbą
o kontakt bezpośredni — reszta strony działa normalnie.

## Struktura

```
app/
  layout.tsx        # fonty, metadata, Navbar + Footer
  page.tsx          # kompozycja sekcji
  globals.css       # design system: .glass, .text-gradient, .btn-*, tło
components/
  layout/           # Navbar, Footer
  ui/               # Button, GlassCard, SectionHeading
  sections/         # Hero, Services, Process, Portfolio, Technologies,
                    # Testimonials, Pricing, FAQ, CTA, Contact
lib/
  constants.ts      # wszystkie treści (usługi, cennik, FAQ, kontakt...)
  cn.ts             # helper do klas
tailwind.config.ts  # kolory bg/surface/accent, gradient, cienie glow
```

## Logo

Pliki marki (PNG z **przezroczystym tłem**):
- `public/logo.png` — pełny logotyp (znak + „AVENISE FLOW"), używany w nav i stopce
- `public/logo-mark.png` — sam znak „A"
- `app/icon.png` — favicon (z `logo-mark.png`)
- `logo.jpg` — plik źródłowy (czarne tło) w katalogu głównym

Tło wycięte skryptem `System.Drawing` (kadr do zawartości + alfa z jasności
piksela). [Logo.tsx](components/ui/Logo.tsx) używa `next/image` bez blend-mode.

## Edycja treści

Wszystkie teksty, usługi, pakiety cenowe, pytania FAQ i dane kontaktowe
znajdują się w `lib/constants.ts`.
