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

const FURMANREPS_URL = "https://furmanreps.pl";

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#28C840]/25 bg-[#28C840]/10 px-3 py-1 text-[11px] font-semibold text-[#28C840]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28C840] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28C840]" />
      </span>
      Wersja Live
    </span>
  );
}

type Demo =
  | { kind: "external"; href: string; label: string }
  | { kind: "internal"; href: string; label: string };

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          Portfolio
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Nie mockupy w Figmie — działający kod, który możesz kliknąć.
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">
          Jedna realna strona komercyjna oraz pięć w pełni klikalnych,
          samodzielnych landing page'y — każdy z własnym brandingiem, nawigacją
          i stopką, zbudowany od zera w Next.js.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Projekt 1 — produkcja */}
        <ProjectRow
          live
          badge="Projekt komercyjny / Live"
          title="furmanreps.pl — Interaktywny Hub & Baza 1800+ Produktów"
          description="Dedykowany portal zbudowany od zera w Next.js. Przekształcenie rozproszonych danych w interaktywny serwis z wyszukiwaniem, filtrowaniem przedmiotów oraz autorskim konwerterem linków pod affiliate marketing."
          tags={["Next.js", "Tailwind CSS", "UI/UX", "Dynamic Search", "Custom Tools"]}
          metrics={[
            { value: "1800+", label: "Baza Produktów" },
            { value: "Sub-sekundowy", label: "Czas reakcji" },
            { value: "Dedykowany", label: "Konwerter linków" },
          ]}
          demo={{
            kind: "external",
            href: FURMANREPS_URL,
            label: "Otwórz furmanreps.pl",
          }}
          visual={<ProductionVisual />}
        />

        {/* Projekt 2 — logistyka */}
        <ProjectRow
          reversed
          badge="Autonomiczne demo / Transport & Logistyka"
          title="VoltDrive Logistics — cyber/dark tech dla firmy flotowej"
          description="Samodzielna strona firmy transportowej: własny header VoltDrive, hero z mapą trasy, kalkulator frachtu (waga + dystans → cena), panel śledzenia przesyłki i brandowana stopka. Głęboki granat, neonowe akcenty."
          tags={["Own header/footer", "Kalkulator frachtu", "Tracking", "Dark neon"]}
          highlights={[
            { icon: Truck, label: "Pełna nawigacja i stopka w stylu marki" },
            { icon: Search, label: "Kalkulator + panel śledzenia przesyłki" },
          ]}
          demo={{ kind: "internal", href: "/demo/logistyka", label: "Zobacz Podgląd Demo" }}
          visual={<IndustryVisual url="voltdrive.pl" icon={Truck} label="Fleet & Freight" tint="#00E5A0" />}
        />

        {/* Projekt 3 — klinika */}
        <ProjectRow
          badge="Autonomiczne demo / Medycyna & Usługi"
          title="Aura Dental Clinic — warm editorial dla kliniki"
          description="Kompletna strona kliniki: header z numerem rejestracji, hero z zespołem lekarzy i certyfikatami, rezerwacja wizyty z wyborem dnia i godziny, cennik zabiegów, FAQ medyczne i stopka z danymi placówki. Ciepła biel, szałwiowa zieleń, fonty szeryfowe."
          tags={["Own header/footer", "Kalendarz rezerwacji", "Serif", "Light"]}
          highlights={[
            { icon: Stethoscope, label: "Zespół, certyfikaty, cennik, FAQ medyczne" },
            { icon: PlayCircle, label: "Rezerwacja: zabieg → dzień → godzina" },
          ]}
          demo={{ kind: "internal", href: "/demo/klinika", label: "Zobacz Podgląd Demo" }}
          visual={<IndustryVisual url="auradental.pl" icon={Stethoscope} label="Booking system" tint="#7A9174" light />}
        />

        {/* Projekt 4 — tech */}
        <ProjectRow
          reversed
          badge="Autonomiczne demo / B2B & Tech Studio"
          title="Apex Forge Software — neo-brutalizm dla software house'u"
          description="Krzykliwy landing agencji programistycznej: brutalistyczny header, hero z ogromną typografią, interaktywne porównanie Next.js vs WordPress, kafelki usług z ikonicznymi przyciskami i brandowana stopka. Żółć, róż, grube czarne ramki, twarde cienie."
          tags={["Own header/footer", "border-4 border-black", "Perf compare", "Pop"]}
          highlights={[
            { icon: Code2, label: "Neo-brutalizm: hard shadows, blokowa typografia" },
            { icon: Search, label: "Przełącznik wydajności Next.js vs WordPress" },
          ]}
          demo={{ kind: "internal", href: "/demo/tech", label: "Zobacz Podgląd Demo" }}
          visual={<IndustryVisual url="apexforge.dev" icon={Code2} label="Software house" tint="#111111" />}
        />

        {/* Projekt 5 — luxury */}
        <ProjectRow
          badge="Autonomiczne demo / Design & Rzemiosło"
          title="Lumière Atelier — szwajcarski minimalizm dla atelier mebli"
          description="Luksusowa, minimalistyczna strona atelier meblowego: ścisła siatka, czarna typografia, brak cieni, czarno-biała galeria kolekcji i kalkulator wyceny projektu indywidualnego (kategoria + materiał + ilość → przedział cenowy)."
          tags={["Own header/footer", "Grid system", "B&W", "Kalkulator wyceny"]}
          highlights={[
            { icon: Palette, label: "Swiss / International Typographic Style" },
            { icon: Search, label: "Kalkulator projektu na wymiar" },
          ]}
          demo={{ kind: "internal", href: "/demo/luxury", label: "Zobacz Podgląd Demo" }}
          visual={<IndustryVisual url="lumiere-atelier.pl" icon={Palette} label="Swiss minimal" tint="#111111" light />}
        />

        {/* Projekt 6 — energy */}
        <ProjectRow
          reversed
          badge="Autonomiczne demo / OZE & Energia"
          title="EcoPulse Energy — soft glassmorphism dla firmy OZE"
          description="Przyjazna strona firmy fotowoltaicznej: szklane karty z rozmyciem, pastelowe gradienty, wykres produkcji energii i symulator oszczędności (rachunek + typ instalacji + powierzchnia → oszczędność, zwrot, redukcja CO₂)."
          tags={["Own header/footer", "backdrop-blur", "Symulator", "Wykresy"]}
          highlights={[
            { icon: Layers, label: "Glassmorphism: rozmycie, warstwy, zaokrąglenia" },
            { icon: Search, label: "Symulator oszczędności z PV / pompy ciepła" },
          ]}
          demo={{ kind: "internal", href: "/demo/energy", label: "Zobacz Podgląd Demo" }}
          visual={<IndustryVisual url="ecopulse.pl" icon={Layers} label="Savings simulator" tint="#38BDF8" light />}
        />
      </div>

      {/* CTA */}
      <div className="mt-14 flex justify-center">
        <a href="#kontakt" className="btn-outline-glow group text-center">
          Znajdź demo z Twojej branży — albo napisz, jakiej brakuje
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}

type Metric = { value: string; label: string };
type Highlight = { icon: React.ComponentType<{ className?: string }>; label: string };

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
          {live && <LiveBadge />}
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

function WindowChrome({ url, light = false }: { url: string; light?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b px-4 py-3",
        light ? "border-black/[0.06]" : "border-white/[0.06]",
      )}
    >
      <div className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]/80" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]/80" />
      </div>
      <div
        className={cn(
          "mx-auto flex items-center gap-2 rounded-md border px-3 py-1 text-xs",
          light
            ? "border-black/[0.06] bg-black/[0.03] text-slate-500"
            : "border-white/[0.06] bg-white/[0.03] text-slate-500",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF]" />
        {url}
      </div>
    </div>
  );
}

function IndustryVisual({
  url,
  icon: Icon,
  label,
  tint,
  light = false,
}: {
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tint: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl",
        light ? "border-black/10 bg-white" : "border-white/10 bg-[#0B0E15]",
      )}
    >
      <WindowChrome url={url} light={light} />
      <div className="flex flex-col items-center gap-3 p-8 text-center">
        <span
          className="grid h-14 w-14 place-items-center rounded-2xl"
          style={{ backgroundColor: `${tint}1A`, color: tint }}
        >
          <Icon className="h-7 w-7" />
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-widest",
            light ? "text-slate-500" : "text-slate-400",
          )}
        >
          {label}
        </span>
        <p
          className={cn(
            "text-lg font-black leading-snug tracking-tight",
            light ? "text-slate-900" : "text-white",
          )}
        >
          Interaktywna makieta
        </p>
        <div className="grid w-full grid-cols-3 gap-2">
          {["Hero", "Widget", "Formularz"].map((s) => (
            <div
              key={s}
              className={cn(
                "rounded-md border px-2 py-2 text-[10px]",
                light
                  ? "border-black/[0.06] bg-black/[0.03] text-slate-500"
                  : "border-white/[0.05] bg-white/[0.03] text-slate-400",
              )}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductionVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E15] shadow-2xl backdrop-blur-xl">
      <WindowChrome url="furmanreps.pl" />
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-xs text-slate-400">
          <Search className="h-4 w-4 text-[#00D2FF]" />
          Szukaj w 1800+ produktach…
        </div>
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
          <div className="mb-2 flex items-center gap-2 text-xs text-slate-300">
            <Link2 className="h-4 w-4 text-[#6C5CE7]" />
            Konwerter linków
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
    </div>
  );
}
