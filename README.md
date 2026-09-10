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
