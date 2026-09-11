"use client";

import { useMemo, useState } from "react";
import { Sun, Leaf, Wallet, TrendingDown, Zap, ArrowRight, Plus } from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { useT, useLanguage } from "@/lib/language";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap";
const FONT = "'Outfit', system-ui, sans-serif";

const NAV_HREFS = ["#rozwiazania", "#symulator", "#realizacje", "#kontakt"];
const GEN = [18, 32, 55, 78, 96, 100, 98, 88, 66, 40, 20, 14];

const TOPBAR_INDUSTRY = { pl: "firmy EcoPulse Energy", en: "solar energy company EcoPulse Energy" };

const COPY = {
  pl: {
    nav: ["Rozwiązania", "Symulator", "Realizacje", "Kontakt"],
    headerCta: "Darmowy audyt",
    badge: "Fotowoltaika · Pompy ciepła · Magazyny energii",
    h1a: "Twój dom.",
    h1b: "Twoja energia.",
    sub: "Projektujemy i montujemy instalacje, które realnie obniżają rachunki. Sprawdź swoje oszczędności w 30 sekund.",
    heroCta: "Uruchom symulator",
    chartTitle: "Produkcja energii — rok",
    chartDelta: "+ 4 980 kWh",
    months: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
    simTitle: "Symulator oszczędności",
    simSub: "Przesuń suwaki — wynik przelicza się na żywo.",
    systems: [
      { k: "pv" as const, label: "Fotowoltaika", icon: Sun },
      { k: "hp" as const, label: "Pompa ciepła", icon: Zap },
    ],
    billLabel: "Rachunek za prąd / mies.",
    areaLabel: "Powierzchnia dachu / instalacji",
    statSavings: "oszczędność / rok",
    statPayback: "zwrot inwestycji",
    statCo2: "mniej CO₂ / rok",
    statInvest: "szac. inwestycja",
    paybackUnit: "lat",
    simCta: "Zamów bezpłatny audyt",
    faqTitle: "Najczęstsze pytania",
    faq: [
      { q: "Czy mogę skorzystać z dofinansowania?", a: "Tak — pomagamy skompletować wniosek o dofinansowanie (np. Mój Prąd) oraz ulgę termomodernizacyjną. Większość klientów odzyskuje 20–40% kosztów instalacji." },
      { q: "Jaka jest gwarancja na instalację?", a: "Panele fotowoltaiczne: 25 lat gwarancji produkcyjnej. Inwerter: 10–12 lat. Robociznę i montaż obejmujemy własną gwarancją na 5 lat." },
      { q: "Ile trwa realizacja od podpisania umowy?", a: "Zwykle 3–6 tygodni — zależnie od czasu oczekiwania na zgodę zakładu energetycznego na przyłączenie instalacji do sieci." },
      { q: "Co się dzieje z nadwyżką wyprodukowanej energii?", a: "Nadwyżkę oddajesz do sieci w systemie net-billingu i odbierasz jako bonus pieniężny na rozliczeniu rocznym — nie przepada." },
    ],
    footerTagline: "Instalacje OZE dla domów i firm. Certyfikat UDT.",
    footerSolutionsTitle: "Rozwiązania",
    footerSolutions: ["Fotowoltaika", "Pompy ciepła", "Magazyny energii", "Wallbox"],
    footerCompanyTitle: "Firma",
    footerCompany: ["O nas", "Realizacje", "Finansowanie", "Blog"],
    footerRights: "© 2026 EcoPulse Energy S.A.",
  },
  en: {
    nav: ["Solutions", "Simulator", "Projects", "Contact"],
    headerCta: "Free audit",
    badge: "Solar panels · Heat pumps · Battery storage",
    h1a: "Your home.",
    h1b: "Your energy.",
    sub: "We design and install systems that genuinely lower your bills. Check your savings in 30 seconds.",
    heroCta: "Run the simulator",
    chartTitle: "Energy production — year",
    chartDelta: "+ 4,980 kWh",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    simTitle: "Savings simulator",
    simSub: "Move the sliders — the result updates live.",
    systems: [
      { k: "pv" as const, label: "Solar panels", icon: Sun },
      { k: "hp" as const, label: "Heat pump", icon: Zap },
    ],
    billLabel: "Electricity bill / month",
    areaLabel: "Roof / installation area",
    statSavings: "savings / year",
    statPayback: "payback period",
    statCo2: "less CO₂ / year",
    statInvest: "est. investment",
    paybackUnit: "years",
    simCta: "Request a free audit",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Can I get a government subsidy?", a: "Yes — we help complete the subsidy application (e.g. \"Mój Prąd\") and the thermal modernization tax relief. Most clients recover 20–40% of installation costs." },
      { q: "What warranty comes with the installation?", a: "Solar panels: 25-year production warranty. Inverter: 10–12 years. We cover labor and installation with our own 5-year warranty." },
      { q: "How long does it take from signing the contract?", a: "Usually 3–6 weeks — depending on how long the grid operator takes to approve connecting the installation." },
      { q: "What happens to surplus energy I produce?", a: "Surplus is fed back into the grid under net billing and credited as a cash bonus on your annual settlement — it's never lost." },
    ],
    footerTagline: "Renewable energy systems for homes and businesses. UDT certified.",
    footerSolutionsTitle: "Solutions",
    footerSolutions: ["Solar panels", "Heat pumps", "Battery storage", "Wallbox"],
    footerCompanyTitle: "Company",
    footerCompany: ["About us", "Projects", "Financing", "Blog"],
    footerRights: "© 2026 EcoPulse Energy Inc.",
  },
};

export default function EcoPulseDemo() {
  const t = useT(COPY);
  const topBarIndustry = useT(TOPBAR_INDUSTRY);
  const { lang } = useLanguage();
  const [bill, setBill] = useState(480);
  const [system, setSystem] = useState<"pv" | "hp">("pv");
  const [area, setArea] = useState(35);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const sim = useMemo(() => {
    const yearly = bill * 12;
    const rate = system === "pv" ? 0.82 : 0.64;
    const sizeFactor = Math.min(1, area / 40);
    const savings = Math.round(yearly * rate * (0.7 + 0.3 * sizeFactor));
    const invest = system === "pv" ? 24000 + area * 350 : 42000;
    const payback = (invest / savings).toFixed(1);
    const co2 = Math.round((system === "pv" ? 3.4 : 2.1) * sizeFactor * 10) / 10;
    return { savings, payback, co2, invest };
  }, [bill, system, area]);

  const locale = lang === "pl" ? "pl-PL" : "en-US";
  const currency = lang === "pl" ? "zł" : "PLN";

  return (
    <div
      className="min-h-screen text-slate-800"
      style={{ fontFamily: FONT, background: "linear-gradient(160deg,#FFE9D6 0%,#DCEAFF 42%,#E7DEFF 100%)" }}
    >
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry={topBarIndustry} />

      {/* Header */}
      <header className="border-b border-white/40 bg-white/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 to-sky-400 text-white">
              <Sun className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-slate-800">EcoPulse</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            {t.nav.map((n, i) => (
              <a key={n} href={NAV_HREFS[i]} className="text-sm font-semibold text-slate-600 hover:text-slate-900">
                {n}
              </a>
            ))}
          </nav>
          <a href="#symulator" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            {t.headerCta}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5" /> {t.badge}
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
              {t.h1a}{" "}
              <span className="bg-gradient-to-r from-amber-500 to-sky-500 bg-clip-text text-transparent">
                {t.h1b}
              </span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-600">{t.sub}</p>
            <a href="#symulator" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-sky-500 px-6 py-3 text-sm font-semibold text-white">
              {t.heroCta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Wykres generacji */}
          <div className="rounded-[28px] border border-white/50 bg-white/45 p-6 shadow-[0_30px_70px_-30px_rgba(70,90,150,.4)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">{t.chartTitle}</span>
              <span className="text-xs font-semibold text-emerald-600">{t.chartDelta}</span>
            </div>
            <div className="mt-5 flex h-40 items-end gap-1.5">
              {GEN.map((g, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-amber-300 to-sky-400" style={{ height: `${g}%` }} />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-slate-500">
              {t.months.map((m) => <span key={m}>{m[0]}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Symulator */}
      <section id="symulator" className="px-6 py-14">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-white/50 bg-white/45 p-6 shadow-[0_30px_70px_-30px_rgba(70,90,150,.4)] backdrop-blur-xl md:p-9">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{t.simTitle}</h2>
          <p className="mt-2 text-slate-600">{t.simSub}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-7">
              <div className="flex gap-2">
                {t.systems.map(({ k, label, icon: Icon }) => (
                  <button key={k} onClick={() => setSystem(k)}
                    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      system === k ? "bg-slate-900 text-white" : "bg-white/60 text-slate-600"
                    }`}>
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                ))}
              </div>

              <Slider label={t.billLabel} v={bill} min={150} max={1500} step={10} unit={lang === "pl" ? "zł" : "PLN"} on={setBill} />
              <Slider label={t.areaLabel} v={area} min={10} max={80} step={1} unit="m²" on={setArea} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Stat icon={Wallet} v={`${sim.savings.toLocaleString(locale)} ${currency}`} l={t.statSavings} big />
              <Stat icon={TrendingDown} v={`${sim.payback} ${t.paybackUnit}`} l={t.statPayback} />
              <Stat icon={Leaf} v={`${sim.co2} t`} l={t.statCo2} />
              <Stat icon={Zap} v={`${sim.invest.toLocaleString(locale)} ${currency}`} l={t.statInvest} />
            </div>
          </div>

          <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-sky-500 px-6 py-3 text-sm font-semibold text-white">
            {t.simCta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{t.faqTitle}</h2>
          <div className="mt-6 flex flex-col gap-3">
            {t.faq.map((item, i) => {
              const open = faqOpen === i;
              return (
                <div key={item.q} className="rounded-2xl border border-white/50 bg-white/45 backdrop-blur-xl">
                  <button
                    type="button"
                    onClick={() => setFaqOpen(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-slate-900">{item.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 text-sky-600 transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  {open && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="mt-8 border-t border-white/40 bg-white/40 px-6 py-14 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-sky-400 text-white">
                <Sun className="h-4 w-4" />
              </span>
              <span className="font-bold text-slate-800">EcoPulse Energy</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{t.footerTagline}</p>
          </div>
          <FootCol title={t.footerSolutionsTitle} items={t.footerSolutions} />
          <FootCol title={t.footerCompanyTitle} items={t.footerCompany} />
          <div className="text-sm text-slate-600">
            biuro@ecopulse.pl<br />+48 800 100 200<br />
            <span className="mt-3 block text-xs text-slate-500">{t.footerRights}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Slider({
  label, v, min, max, step, unit, on,
}: { label: string; v: number; min: number; max: number; step: number; unit: string; on: (n: number) => void }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        <span className="text-lg font-bold text-slate-900">{v} {unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => on(Number(e.target.value))} className="mt-3 w-full accent-sky-500" />
    </div>
  );
}

function Stat({
  icon: Icon, v, l, big = false,
}: { icon: React.ComponentType<{ className?: string }>; v: string; l: string; big?: boolean }) {
  return (
    <div className={`rounded-2xl border border-white/60 bg-white/60 p-4 ${big ? "col-span-2" : ""}`}>
      <Icon className="h-4 w-4 text-sky-600" />
      <div className={`mt-1 font-bold tracking-tight text-slate-900 ${big ? "text-3xl" : "text-xl"}`}>{v}</div>
      <div className="text-xs text-slate-500">{l}</div>
    </div>
  );
}

function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-bold text-slate-800">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-slate-900">{i}</a></li>)}
      </ul>
    </div>
  );
}
