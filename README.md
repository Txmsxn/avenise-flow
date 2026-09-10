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

Znak marki jest odwzorowany wektorowo w [components/ui/Logo.tsx](components/ui/Logo.tsx)
(+ `public/logo.svg`, `app/icon.svg` jako favicon). Używa gradientu marki, więc
skaluje się bez utraty jakości i działa w dark mode.

Jeśli chcesz użyć oryginalnych plików rastrowych:
1. wrzuć je do `public/` (np. `public/logo-mark.png`, `public/logo-full.png`),
2. w `components/ui/Logo.tsx` podmień `<LogoMark />` na
   `<Image src="/logo-mark.png" width={36} height={36} alt="AveniseFlow" />`.

## Edycja treści

Wszystkie teksty, usługi, pakiety cenowe, pytania FAQ i dane kontaktowe
znajdują się w `lib/constants.ts`.
