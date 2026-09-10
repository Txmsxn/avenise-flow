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

Oryginalne pliki marki:
- `public/logo.png` — pełny logotyp (znak + „AVENISE FLOW"), używany w nav i stopce
- `public/logo-mark.png` — sam znak „A"
- `app/icon.png` — favicon (z `logo-mark.png`)
- `logo.jpg` — plik źródłowy (czarne tło) w katalogu głównym

Pliki mają czarne tło (brak kanału alfa), dlatego komponent
[Logo.tsx](components/ui/Logo.tsx) renderuje je z `mix-blend-screen` — czerń
znika na ciemnym tle strony. Przy przebudowie/kadrowaniu użyto skryptu
`System.Drawing` (kadr do zawartości).

## Edycja treści

Wszystkie teksty, usługi, pakiety cenowe, pytania FAQ i dane kontaktowe
znajdują się w `lib/constants.ts`.
