"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  PlayCircle,
  Search,
  Link2,
  ShieldCheck,
  Truck,
  Stethoscope,
  Code2,
  Palette,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/language";

type Metric = { value: string; label: string };
type Highlight = { icon: React.ComponentType<{ className?: string }>; label: string };
type Demo =
  | { kind: "external"; href: string; label: string }
  | { kind: "internal"; href: string; label: string };

type ProjectContent = {
  live?: boolean;
  reversed?: boolean;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: Metric[];
  highlights?: Highlight[];
  demoLabel: string;
  visualLabel?: string;
};

const FURMANREPS_URL = "https://furmanreps.pl";

const HEADER = {
  pl: {
    eyebrow: "Portfolio",
    title: "Nie mockupy w Figmie — działający kod, który możesz kliknąć.",
    description:
      "Jedna realna strona komercyjna oraz pięć w pełni klikalnych, samodzielnych landing page'y — każdy z własnym brandingiem, nawigacją i stopką, zbudowany od zera w Next.js.",
    cta: "Znajdź demo z Twojej branży — albo napisz, jakiej brakuje",
    live: "Wersja Live",
    mockup: "Interaktywna makieta",
    chips: ["Hero", "Widget", "Formularz"],
    search: "Szukaj w 1800+ produktach…",
    converter: "Konwerter linków",
  },
  en: {
    eyebrow: "Portfolio",
    title: "Not Figma mockups — working code you can click.",
    description:
      "One real commercial website and five fully clickable, standalone landing pages — each with its own branding, navigation and footer, built from scratch in Next.js.",
    cta: "Find a demo from your industry — or tell me which one's missing",
    live: "Live Version",
    mockup: "Interactive mockup",
    chips: ["Hero", "Widget", "Form"],
    search: "Search 1800+ products…",
    converter: "Link converter",
  },
};

const PROJECTS: Record<"pl" | "en", ProjectContent[]> = {
  pl: [
    {
      live: true,
      badge: "Projekt komercyjny / Live",
      title: "furmanreps.pl — Interaktywny Hub & Baza 1800+ Produktów",
      description:
        "Dedykowany portal zbudowany od zera w Next.js. Przekształcenie rozproszonych danych w interaktywny serwis z wyszukiwaniem, filtrowaniem przedmiotów oraz autorskim konwerterem linków pod affiliate marketing.",
      tags: ["Next.js", "Tailwind CSS", "Projekt interfejsu", "Wyszukiwarka na żywo", "Autorskie narzędzia"],
      metrics: [
        { value: "1800+", label: "Baza Produktów" },
        { value: "Sub-sekundowy", label: "Czas reakcji" },
        { value: "Dedykowany", label: "Konwerter linków" },
      ],
      demoLabel: "Otwórz furmanreps.pl",
    },
    {
      reversed: true,
      badge: "Autonomiczne demo / Transport & Logistyka",
      title: "VoltDrive Logistics — cyber/dark tech dla firmy flotowej",
      description:
        "Samodzielna strona firmy transportowej: własny header VoltDrive, hero z mapą trasy, kalkulator frachtu (waga + dystans → cena), panel śledzenia przesyłki i brandowana stopka. Głęboki granat, neonowe akcenty.",
      tags: ["Gotowa, samodzielna strona", "Kalkulator frachtu", "Śledzenie przesyłki", "Ciemny, techniczny styl"],
      highlights: [
        { icon: Truck, label: "Pełna nawigacja i stopka w stylu marki" },
        { icon: Search, label: "Kalkulator + panel śledzenia przesyłki" },
      ],
      demoLabel: "Zobacz Podgląd Demo",
      visualLabel: "Flota i transport",
    },
    {
      badge: "Autonomiczne demo / Medycyna & Usługi",
      title: "Aura Dental Clinic — warm editorial dla kliniki",
      description:
        "Kompletna strona kliniki: header z numerem rejestracji, hero z zespołem lekarzy i certyfikatami, rezerwacja wizyty z wyborem dnia i godziny, cennik zabiegów, FAQ medyczne i stopka z danymi placówki. Ciepła biel, szałwiowa zieleń, fonty szeryfowe.",
      tags: ["Gotowa, samodzielna strona", "Kalendarz rezerwacji", "Eleganckie fonty", "Jasny, ciepły motyw"],
      highlights: [
        { icon: Stethoscope, label: "Zespół, certyfikaty, cennik, FAQ medyczne" },
        { icon: PlayCircle, label: "Rezerwacja: zabieg → dzień → godzina" },
      ],
      demoLabel: "Zobacz Podgląd Demo",
      visualLabel: "System rezerwacji",
    },
    {
      reversed: true,
      badge: "Autonomiczne demo / B2B & Tech Studio",
      title: "Apex Forge Software — neo-brutalizm dla software house'u",
      description:
        "Krzykliwy landing agencji programistycznej: brutalistyczny header, hero z ogromną typografią, interaktywne porównanie Next.js vs WordPress, kafelki usług z ikonicznymi przyciskami i brandowana stopka. Żółć, róż, grube czarne ramki, twarde cienie.",
      tags: ["Gotowa, samodzielna strona", "Grube czarne ramki", "Porównanie szybkości", "Odważna kolorystyka"],
      highlights: [
        { icon: Code2, label: "Odważny styl: mocne cienie, blokowa typografia" },
        { icon: Search, label: "Przełącznik wydajności Next.js vs WordPress" },
      ],
      demoLabel: "Zobacz Podgląd Demo",
      visualLabel: "Software house",
    },
    {
      badge: "Autonomiczne demo / Design & Rzemiosło",
      title: "Lumière Atelier — szwajcarski minimalizm dla atelier mebli",
      description:
        "Luksusowa, minimalistyczna strona atelier meblowego: ścisła siatka, czarna typografia, brak cieni, czarno-biała galeria kolekcji i kalkulator wyceny projektu indywidualnego (kategoria + materiał + ilość → przedział cenowy).",
      tags: ["Gotowa, samodzielna strona", "Precyzyjna siatka", "Czerń i biel", "Kalkulator wyceny"],
      highlights: [
        { icon: Palette, label: "Minimalizm inspirowany szwajcarskim designem" },
        { icon: Search, label: "Kalkulator projektu na wymiar" },
      ],
      demoLabel: "Zobacz Podgląd Demo",
      visualLabel: "Minimalizm szwajcarski",
    },
    {
      reversed: true,
      badge: "Autonomiczne demo / OZE & Energia",
      title: "EcoPulse Energy — soft glassmorphism dla firmy OZE",
      description:
        "Przyjazna strona firmy fotowoltaicznej: szklane karty z rozmyciem, pastelowe gradienty, wykres produkcji energii i symulator oszczędności (rachunek + typ instalacji + powierzchnia → oszczędność, zwrot, redukcja CO₂).",
      tags: ["Gotowa, samodzielna strona", "Szklane, rozmyte karty", "Symulator", "Wykresy"],
      highlights: [
        { icon: Layers, label: "Miękkie, przezroczyste karty i zaokrąglenia" },
        { icon: Search, label: "Symulator oszczędności z PV / pompy ciepła" },
      ],
      demoLabel: "Zobacz Podgląd Demo",
      visualLabel: "Symulator oszczędności",
    },
  ],
  en: [
    {
      live: true,
      badge: "Commercial Project / Live",
      title: "furmanreps.pl — Interactive Hub & 1800+ Product Database",
      description:
        "A dedicated portal built from scratch in Next.js. Turning scattered data into an interactive service with search, item filtering, and a custom link converter for affiliate marketing.",
      tags: ["Next.js", "Tailwind CSS", "Interface design", "Live search", "Custom tools"],
      metrics: [
        { value: "1800+", label: "Product database" },
        { value: "Sub-second", label: "Response time" },
        { value: "Custom-built", label: "Link converter" },
      ],
      demoLabel: "Open furmanreps.pl",
    },
    {
      reversed: true,
      badge: "Standalone Demo / Transport & Logistics",
      title: "VoltDrive Logistics — cyber/dark tech for a fleet company",
      description:
        "A standalone website for a transport company: its own VoltDrive header, a hero with a route map, a freight calculator (weight + distance → price), a shipment tracking panel, and a branded footer. Deep navy, neon accents.",
      tags: ["Ready, standalone site", "Freight calculator", "Shipment tracking", "Dark, technical style"],
      highlights: [
        { icon: Truck, label: "Full navigation and footer in the brand's style" },
        { icon: Search, label: "Calculator + shipment tracking panel" },
      ],
      demoLabel: "View Live Preview",
      visualLabel: "Fleet & Transport",
    },
    {
      badge: "Standalone Demo / Healthcare & Services",
      title: "Aura Dental Clinic — warm editorial style for a clinic",
      description:
        "A complete clinic website: header with a booking phone number, a hero with the dental team and certificates, appointment booking by day and time, a treatment price list, a medical FAQ, and a footer with location details. Warm white, sage green, serif fonts.",
      tags: ["Ready, standalone site", "Booking calendar", "Elegant fonts", "Light, warm theme"],
      highlights: [
        { icon: Stethoscope, label: "Team, certificates, pricing, medical FAQ" },
        { icon: PlayCircle, label: "Booking: treatment → day → time" },
      ],
      demoLabel: "View Live Preview",
      visualLabel: "Booking system",
    },
    {
      reversed: true,
      badge: "Standalone Demo / B2B & Tech Studio",
      title: "Apex Forge Software — neo-brutalism for a software house",
      description:
        "A loud landing page for a software agency: a brutalist header, a hero with oversized typography, an interactive Next.js vs WordPress performance comparison, service tiles with bold buttons, and a branded footer. Yellow, pink, thick black borders, hard shadows.",
      tags: ["Ready, standalone site", "Thick black borders", "Speed comparison", "Bold colors"],
      highlights: [
        { icon: Code2, label: "Bold style: strong shadows, blocky type" },
        { icon: Search, label: "Next.js vs WordPress performance switcher" },
      ],
      demoLabel: "View Live Preview",
      visualLabel: "Software house",
    },
    {
      badge: "Standalone Demo / Design & Craft",
      title: "Lumière Atelier — Swiss minimalism for a furniture atelier",
      description:
        "A luxurious, minimalist website for a furniture atelier: a strict grid, black typography, no shadows, a black-and-white collection gallery, and a calculator for pricing a custom project (category + material + quantity → price range).",
      tags: ["Ready, standalone site", "Precise grid", "Black & white", "Pricing calculator"],
      highlights: [
        { icon: Palette, label: "Minimalism inspired by Swiss design" },
        { icon: Search, label: "Custom project calculator" },
      ],
      demoLabel: "View Live Preview",
      visualLabel: "Swiss minimalism",
    },
    {
      reversed: true,
      badge: "Standalone Demo / Renewable Energy",
      title: "EcoPulse Energy — soft glassmorphism for a solar company",
      description:
        "A friendly website for a solar energy company: frosted glass cards, pastel gradients, an energy production chart, and a savings simulator (bill + system type + area → savings, payback, CO₂ reduction).",
      tags: ["Ready, standalone site", "Frosted glass cards", "Simulator", "Charts"],
      highlights: [
        { icon: Layers, label: "Glassmorphism: blur, layers, rounded corners" },
        { icon: Search, label: "Savings simulator for solar / heat pumps" },
      ],
      demoLabel: "View Live Preview",
      visualLabel: "Savings simulator",
    },
  ],
};

const VISUAL_META: {
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
  tint: string;
}[] = [
  { url: "furmanreps.pl", tint: "#00D2FF" }, // furmanreps — ProductionVisual, ikona nieużywana
  { url: "voltdrive.pl", icon: Truck, tint: "#00E5A0" },
  { url: "auradental.pl", icon: Stethoscope, tint: "#34D399" },
  { url: "apexforge.dev", icon: Code2, tint: "#8B5CF6" },
  { url: "lumiere-atelier.pl", icon: Palette, tint: "#A1A1AA" },
  { url: "ecopulse.pl", icon: Layers, tint: "#38BDF8" },
];

const DEMO_HREFS = [
  { kind: "external" as const, href: FURMANREPS_URL },
  { kind: "internal" as const, href: "/demo/logistyka" },
  { kind: "internal" as const, href: "/demo/klinika" },
  { kind: "internal" as const, href: "/demo/tech" },
  { kind: "internal" as const, href: "/demo/luxury" },
  { kind: "internal" as const, href: "/demo/energy" },
];

function LiveBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#28C840]/25 bg-[#28C840]/10 px-3 py-1 text-[11px] font-semibold text-[#28C840]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28C840] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28C840]" />
      </span>
      {label}
    </span>
  );
}

export function Portfolio() {
  const h = useT(HEADER);
  const projects = useT(PROJECTS);

  return (
    <section id="portfolio" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          {h.eyebrow}
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          {h.title}
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">{h.description}</p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => {
          const meta = VISUAL_META[i];
          const demoMeta = DEMO_HREFS[i];
          const visual =
            i === 0 ? (
              <ProductionVisual searchText={h.search} converterLabel={h.converter} />
            ) : (
              <IndustryVisual
                url={meta.url}
                icon={meta.icon!}
                label={p.visualLabel!}
                tint={meta.tint}
                mockupLabel={h.mockup}
                chips={h.chips}
              />
            );

          return (
            <ProjectRow
              key={p.title}
              live={p.live}
              liveLabel={h.live}
              reversed={p.reversed}
              badge={p.badge}
              title={p.title}
              description={p.description}
              tags={p.tags}
              metrics={p.metrics}
              highlights={p.highlights}
              demo={{ kind: demoMeta.kind, href: demoMeta.href, label: p.demoLabel }}
              visual={visual}
            />
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-14 flex justify-center">
        <a href="#kontakt" className="btn-outline-glow group text-center">
          {h.cta}
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}

function ProjectRow({
  badge,
  title,
  description,
  tags,
  metrics,
  highlights,
  demo,
  visual,
  live = false,
  liveLabel,
  reversed = false,
}: {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: Metric[];
  highlights?: Highlight[];
  demo: Demo;
  visual: React.ReactNode;
  live?: boolean;
  liveLabel: string;
  reversed?: boolean;
}) {
  return (
    <article className="grid items-center gap-8 rounded-2xl border border-white/[0.05] bg-[#121723]/60 p-6 backdrop-blur-md md:p-8 lg:grid-cols-2 lg:gap-12">
      {/* Treść */}
      <div className={cn(reversed && "lg:order-2")}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-[#00D2FF]">
            {badge}
          </span>
          {live && <LiveBadge label={liveLabel} />}
        </div>
        <h3 className="mt-4 text-2xl font-bold leading-snug text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {metrics && (
          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04]">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[#07090E]/70 px-3 py-4 text-center">
                <dt className="text-sm font-bold text-white">{m.value}</dt>
                <dd className="mt-1 text-[11px] leading-tight text-slate-400">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {highlights && (
          <ul className="mt-6 space-y-2.5">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-slate-300">
                <Icon className="h-4 w-4 shrink-0 text-[#6C5CE7]" />
                {label}
              </li>
            ))}
          </ul>
        )}

        {/* Live Demo CTA */}
        <div className="mt-7">
          {demo.kind === "external" ? (
            <a
              href={demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow group"
            >
              {demo.label}
              <ExternalLink className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <Link href={demo.href} className="btn-outline-glow group">
              {demo.label}
              <PlayCircle className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          )}
        </div>
      </div>

      {/* Wizualizacja */}
      <div className={cn("relative", reversed && "lg:order-1")}>
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_60%_40%,rgba(0,210,255,0.16),transparent_65%)] blur-2xl"
        />
        {visual}
      </div>
    </article>
  );
}

function WindowChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/[0.06] bg-black/40 px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[11px] text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF]" />
        {url}
      </div>
    </div>
  );
}

/** Wspólna, ciemna „skorupa" makiety — glass + świecąca ramka na hover. */
function DemoShell({
  children,
  tint,
}: {
  children: React.ReactNode;
  tint?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/70 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D2FF]/50 hover:shadow-[0_0_50px_-16px_rgba(0,210,255,0.45)]">
      {tint && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-70"
          style={{ backgroundColor: tint }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

function IndustryVisual({
  url,
  icon: Icon,
  label,
  tint,
  mockupLabel,
  chips,
}: {
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tint: string;
  mockupLabel: string;
  chips: string[];
}) {
  return (
    <DemoShell tint={tint}>
      <WindowChrome url={url} />
      <div className="flex flex-col items-center gap-3 p-8 text-center">
        <span
          className="grid h-14 w-14 place-items-center rounded-2xl"
          style={{
            backgroundColor: `${tint}1F`,
            color: tint,
            boxShadow: `inset 0 0 0 1px ${tint}55`,
          }}
        >
          <Icon className="h-7 w-7" />
        </span>
        <span
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest"
          style={{ color: tint }}
        >
          {label}
        </span>
        <p className="text-lg font-black tracking-tight text-white">{mockupLabel}</p>
        <div className="w-full space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />
        </div>
        <div className="grid w-full grid-cols-3 gap-2">
          {chips.map((s) => (
            <div
              key={s}
              className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-2 text-[10px] text-slate-400"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function ProductionVisual({
  searchText,
  converterLabel,
}: {
  searchText: string;
  converterLabel: string;
}) {
  return (
    <DemoShell tint="#00D2FF">
      <WindowChrome url="furmanreps.pl" />
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-xs text-slate-400">
          <Search className="h-4 w-4 text-[#00D2FF]" />
          {searchText}
        </div>
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
          <div className="mb-2 flex items-center gap-2 text-xs text-slate-300">
            <Link2 className="h-4 w-4 text-[#6C5CE7]" />
            {converterLabel}
          </div>
          <div className="rounded-md bg-[#07090E] px-3 py-2 font-mono text-[11px] text-slate-500">
            weidian.com/item/123 →{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
              furmanreps.pl/p/123
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md border border-white/[0.05] bg-white/[0.03] p-1.5"
            >
              <div className="flex h-full flex-col justify-end">
                <div className="h-1 w-2/3 rounded-full bg-white/10" />
                <div className="mt-1 flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-[#28C840]/70" />
                  <div className="h-1 w-1/3 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}
