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

const CODE_SNIPPET = `export default async function Page() {
  const data = await getContent();
  return (
    <main className="min-h-screen">
      <Hero {...data.hero} />
      <Services items={data.services} />
    </main>
  );
}`;

export function Services() {
  return (
    <section id="uslugi" className="section">
      {/* Nagłówek */}
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          Oferta
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          Wszystko, czego potrzebuje Twoja marka w sieci.
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">
          Dedykowane wdrożenia dla firm — od projektu interfejsu, przez kod
          w Next.js, po autorskie narzędzia i integracje.
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
            <CardIcon icon={Code2} />
            <h3 className="mt-5 text-xl font-bold text-white">
              Dedykowane Strony WWW
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Szybkie, responsywne i bezpieczne strony pisane od zera w
              najnowszych technologiach — bez zbędnych wtyczek i kompromisów.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Perk icon={Zap} label="Błyskawiczne ładowanie strony" />
              <Perk icon={Smartphone} label="Wygląda dobrze na telefonie i komputerze" />
              <Perk icon={Search} label="Lepsza widoczność w Google (SEO)" />
            </ul>
          </div>
        </BentoCard>

        {/* Karta 2 — mała */}
        <BentoCard className="md:col-span-1">
          <div className="flex h-full flex-col">
            <CardIcon icon={Palette} />
            <h3 className="mt-5 text-xl font-bold text-white">
              Projektowanie UI/UX
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Interfejsy skupione na konwersji i estetyce. Makiety, prototypy i
              ścieżki użytkownika przemyślane w każdym detalu.
            </p>
            <ul className="mt-6 space-y-2.5">
              <Perk icon={MousePointerClick} label="Interfejs zaprojektowany, by sprzedawać" />
              <Perk icon={Layers} label="Spójny system wizualny całej strony" />
            </ul>
          </div>
        </BentoCard>

        {/* Karta 3 — mała */}
        <BentoCard className="md:col-span-1">
          <div className="flex h-full flex-col">
            <CardIcon icon={Sparkles} />
            <h3 className="mt-5 text-xl font-bold text-white">
              Identyfikacja Wizualna &amp; Logo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Logotypy, księgi znaku i palety barw, które budują spójny i
              rozpoznawalny wizerunek marki.
            </p>
            <ul className="mt-6 space-y-2.5">
              <Perk icon={Palette} label="Paleta barw i typografia" />
              <Perk icon={Layers} label="Księga znaku (brandbook)" />
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
            <CardIcon icon={Cpu} />
            <h3 className="mt-5 text-xl font-bold text-white">
              Narzędzia &amp; Dedykowane Web Apps
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Dedykowane skrypty, konwertery, panele i integracje API — od pomysłu
              po działające narzędzie wpięte w Twój proces.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Perk icon={Braces} label="Autorskie skrypty pod Twój proces" />
              <Perk icon={Repeat} label="Konwertery i automatyzacje" />
              <Perk icon={Plug} label="Połączenie z innymi systemami (płatności, CRM)" />
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
