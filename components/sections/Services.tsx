"use client";

import {
  Code2,
  Palette,
  Cpu,
  Zap,
  Smartphone,
  Search,
  MousePointerClick,
  Layers,
  Sparkles,
  Braces,
  Repeat,
  Plug,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/language";

const CODE_SNIPPET = `export default async function Page() {
  const data = await getContent();
  return (
    <main className="min-h-screen">
      <Hero {...data.hero} />
      <Services items={data.services} />
    </main>
  );
}`;

const COPY = {
  pl: {
    eyebrow: "Oferta",
    title: "Wszystko, czego potrzebuje Twoja marka w sieci.",
    description:
      "Dedykowane wdrożenia dla firm — od projektu interfejsu, przez kod w Next.js, po autorskie narzędzia i integracje.",
    cards: [
      {
        icon: Code2,
        title: "Dedykowane Strony WWW",
        description:
          "Szybkie, responsywne i bezpieczne strony pisane od zera w najnowszych technologiach — bez zbędnych wtyczek i kompromisów.",
        perks: [
          { icon: Zap, label: "Błyskawiczne ładowanie strony" },
          { icon: Smartphone, label: "Wygląda dobrze na telefonie i komputerze" },
          { icon: Search, label: "Lepsza widoczność w Google (SEO)" },
        ],
      },
      {
        icon: Palette,
        title: "Projektowanie UI/UX",
        description:
          "Interfejsy skupione na konwersji i estetyce. Makiety, prototypy i ścieżki użytkownika przemyślane w każdym detalu.",
        perks: [
          { icon: MousePointerClick, label: "Interfejs zaprojektowany, by sprzedawać" },
          { icon: Layers, label: "Spójny system wizualny całej strony" },
        ],
      },
      {
        icon: Sparkles,
        title: "Identyfikacja Wizualna & Logo",
        description:
          "Logotypy, księgi znaku i palety barw, które budują spójny i rozpoznawalny wizerunek marki.",
        perks: [
          { icon: Palette, label: "Paleta barw i typografia" },
          { icon: Layers, label: "Księga znaku (brandbook)" },
        ],
      },
      {
        icon: Cpu,
        title: "Narzędzia & Dedykowane Web Apps",
        description:
          "Dedykowane skrypty, konwertery, panele i integracje API — od pomysłu po działające narzędzie wpięte w Twój proces.",
        perks: [
          { icon: Braces, label: "Autorskie skrypty pod Twój proces" },
          { icon: Repeat, label: "Konwertery i automatyzacje" },
          { icon: Plug, label: "Połączenie z innymi systemami (płatności, CRM)" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "Services",
    title: "Everything your brand needs online.",
    description:
      "Dedicated builds for businesses — from interface design, through Next.js code, to custom tools and integrations.",
    cards: [
      {
        icon: Code2,
        title: "Dedicated Websites",
        description:
          "Fast, responsive and secure websites coded from scratch with the latest technology — no unnecessary plugins, no compromises.",
        perks: [
          { icon: Zap, label: "Lightning-fast page loading" },
          { icon: Smartphone, label: "Looks great on phone and desktop" },
          { icon: Search, label: "Better visibility on Google (SEO)" },
        ],
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description:
          "Interfaces focused on conversion and aesthetics. Wireframes, prototypes and user flows considered down to every detail.",
        perks: [
          { icon: MousePointerClick, label: "An interface designed to sell" },
          { icon: Layers, label: "A consistent visual system across the site" },
        ],
      },
      {
        icon: Sparkles,
        title: "Visual Identity & Logo",
        description:
          "Logos, brand guidelines and color palettes that build a consistent, recognizable brand image.",
        perks: [
          { icon: Palette, label: "Color palette and typography" },
          { icon: Layers, label: "Brand guidelines (brandbook)" },
        ],
      },
      {
        icon: Cpu,
        title: "Tools & Custom Web Apps",
        description:
          "Custom scripts, converters, dashboards and API integrations — from idea to a working tool built into your process.",
        perks: [
          { icon: Braces, label: "Custom scripts for your process" },
          { icon: Repeat, label: "Converters and automations" },
          { icon: Plug, label: "Integration with other systems (payments, CRM)" },
        ],
      },
    ],
  },
};

export function Services() {
  const t = useT(COPY);
  const [c1, c2, c3, c4] = t.cards;

  return (
    <section id="uslugi" className="section">
      {/* Nagłówek */}
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          {t.eyebrow}
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          {t.title}
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">
          {t.description}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-4 md:grid-cols-3 md:auto-rows-fr">
        {/* Karta 1 — duża */}
        <BentoCard className="md:col-span-2">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]"
          >
            <pre className="absolute -right-4 top-6 font-mono text-[13px] leading-6 text-white">
              {CODE_SNIPPET}
            </pre>
          </div>

          <div className="relative flex h-full flex-col">
            <CardIcon icon={c1.icon} />
            <h3 className="mt-5 text-xl font-bold text-white">{c1.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              {c1.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {c1.perks.map((p) => (
                <Perk key={p.label} icon={p.icon} label={p.label} />
              ))}
            </ul>
          </div>
        </BentoCard>

        {/* Karta 2 — mała */}
        <BentoCard className="md:col-span-1">
          <div className="flex h-full flex-col">
            <CardIcon icon={c2.icon} />
            <h3 className="mt-5 text-xl font-bold text-white">{c2.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {c2.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {c2.perks.map((p) => (
                <Perk key={p.label} icon={p.icon} label={p.label} />
              ))}
            </ul>
          </div>
        </BentoCard>

        {/* Karta 3 — mała */}
        <BentoCard className="md:col-span-1">
          <div className="flex h-full flex-col">
            <CardIcon icon={c3.icon} />
            <h3 className="mt-5 text-xl font-bold text-white">{c3.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {c3.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {c3.perks.map((p) => (
                <Perk key={p.label} icon={p.icon} label={p.label} />
              ))}
            </ul>
          </div>
        </BentoCard>

        {/* Karta 4 — duża */}
        <BentoCard className="md:col-span-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#6C5CE7]/15 blur-3xl"
          />
          <div className="relative flex h-full flex-col">
            <CardIcon icon={c4.icon} />
            <h3 className="mt-5 text-xl font-bold text-white">{c4.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              {c4.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {c4.perks.map((p) => (
                <Perk key={p.label} icon={p.icon} label={p.label} />
              ))}
            </ul>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}

function BentoCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("group relative rounded-2xl", className)}>
      {/* Gradientowy border widoczny przy hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.05] bg-[#121723] p-7 transition-colors duration-300 group-hover:border-white/[0.12]">
        {children}
      </div>
    </div>
  );
}

function CardIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
      <Icon className="h-6 w-6 text-[#00D2FF]" />
    </span>
  );
}

function Perk({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-slate-300">
      <Icon className="h-4 w-4 shrink-0 text-[#6C5CE7]" />
      {label}
    </li>
  );
}
