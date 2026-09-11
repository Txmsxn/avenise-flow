"use client";

import { useState } from "react";
import { Zap, Boxes, GitBranch, Cpu, Rocket, ArrowRight, MessageSquare, PenTool, Hammer, LifeBuoy } from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { useT } from "@/lib/language";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Syne:wght@700;800&display=swap";
const HEAD = "'Syne', system-ui, sans-serif";
const BODY = "'Space Grotesk', system-ui, sans-serif";

const NAV_HREFS = ["#uslugi", "#porownanie", "#realizacje", "#kontakt"];

const TOPBAR_INDUSTRY = { pl: "software house'u Apex Forge", en: "software house Apex Forge" };

const COPY = {
  pl: {
    nav: ["Usługi", "Porównanie", "Realizacje", "Kontakt"],
    quoteCta: "Wyceń projekt",
    badge: "★ B2B Software Studio",
    h1a: "Budujemy",
    h1Accent: "szybki",
    h1b: "software.",
    sub: "Next.js, TypeScript, architektura edge. Zero wtyczek. Zero ściemy. Kod, który wytrzyma skalowanie.",
    ctaCompare: "Zobacz porównanie",
    ctaServices: "Usługi",
    compareTitle: "Next.js vs WordPress",
    stacks: {
      next: { label: "NEXT.JS", load: "0.7 s", js: "180 KB", lh: "99", bar: 96 },
      wp: { label: "WORDPRESS", load: "3.8 s", js: "1400 KB", lh: "61", bar: 34 },
    },
    metricLoad: "Czas ładowania",
    metricJs: "Rozmiar JS",
    metricLighthouse: "Lighthouse",
    overallScore: "Wynik ogólny wydajności",
    servicesTitle: "Co robimy",
    services: [
      { i: Boxes, t: "Platformy SaaS", d: "Multi-tenant, billing, panele." },
      { i: GitBranch, t: "Integracje API", d: "ERP, CRM, płatności, webhooki." },
      { i: Cpu, t: "Dedykowane narzędzia", d: "Konwertery, generatory, automaty." },
      { i: Rocket, t: "Audyt & Speed", d: "Migracja z WP, Core Web Vitals." },
    ],
    stackTitle: "Stack technologiczny",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Tailwind CSS", "Docker", "AWS / Vercel", "Stripe"],
    processTitle: "Jak pracujemy",
    process: [
      { icon: MessageSquare, t: "Discovery", d: "Warsztat z zespołem: cel biznesowy, ograniczenia, definicja MVP." },
      { icon: PenTool, t: "Architektura", d: "Dobór stacku, model danych, plan sprintów z wycenionymi etapami." },
      { icon: Hammer, t: "Sprinty 2-tyg.", d: "Cotygodniowy demo builda, kod na bieżąco w Twoim repozytorium." },
      { icon: LifeBuoy, t: "Wsparcie po Launch", d: "Monitoring, SLA na poprawki, dalszy rozwój produktu." },
    ],
    caseStudiesTitle: "Realizacje",
    caseStudies: [
      { n: "FlowPay", d: "Panel rozliczeniowy B2B", m: [["0.6s", "czas ładowania (było 4.2s)"], ["+120%", "aktywnych użytkowników"]] },
      { n: "ShipSync", d: "Integracja 4 systemów magazynowych", m: [["800", "zamówień / dzień automatycznie"], ["-30h", "pracy ręcznej / miesiąc"]] },
      { n: "MedFlow", d: "Portal pacjenta, zgodny z RODO", m: [["15 000", "kont pacjentów w 3 miesiące"], ["99.9%", "dostępność (SLA)"]] },
    ],
    footerTagline: "Software house B2B. Piszemy kod, który się nie sypie.",
    footerRights: "© 2026 Apex Forge sp. z o.o.",
  },
  en: {
    nav: ["Services", "Comparison", "Work", "Contact"],
    quoteCta: "Get a quote",
    badge: "★ B2B Software Studio",
    h1a: "We build",
    h1Accent: "fast",
    h1b: "software.",
    sub: "Next.js, TypeScript, edge architecture. Zero plugins. Zero BS. Code that holds up at scale.",
    ctaCompare: "See the comparison",
    ctaServices: "Services",
    compareTitle: "Next.js vs WordPress",
    stacks: {
      next: { label: "NEXT.JS", load: "0.7 s", js: "180 KB", lh: "99", bar: 96 },
      wp: { label: "WORDPRESS", load: "3.8 s", js: "1400 KB", lh: "61", bar: 34 },
    },
    metricLoad: "Load time",
    metricJs: "JS size",
    metricLighthouse: "Lighthouse",
    overallScore: "Overall performance score",
    servicesTitle: "What we do",
    services: [
      { i: Boxes, t: "SaaS Platforms", d: "Multi-tenant, billing, dashboards." },
      { i: GitBranch, t: "API Integrations", d: "ERP, CRM, payments, webhooks." },
      { i: Cpu, t: "Custom Tools", d: "Converters, generators, automations." },
      { i: Rocket, t: "Audit & Speed", d: "WordPress migration, Core Web Vitals." },
    ],
    stackTitle: "Tech stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Tailwind CSS", "Docker", "AWS / Vercel", "Stripe"],
    processTitle: "How we work",
    process: [
      { icon: MessageSquare, t: "Discovery", d: "A workshop with your team: business goal, constraints, MVP definition." },
      { icon: PenTool, t: "Architecture", d: "Stack selection, data model, a sprint plan with priced milestones." },
      { icon: Hammer, t: "2-week sprints", d: "A weekly build demo, code pushed straight to your own repository." },
      { icon: LifeBuoy, t: "Post-launch support", d: "Monitoring, an SLA for fixes, ongoing product development." },
    ],
    caseStudiesTitle: "Our work",
    caseStudies: [
      { n: "FlowPay", d: "B2B billing dashboard", m: [["0.6s", "load time (was 4.2s)"], ["+120%", "active users"]] },
      { n: "ShipSync", d: "Integration of 4 warehouse systems", m: [["800", "orders / day automated"], ["-30h", "manual work / month"]] },
      { n: "MedFlow", d: "Patient portal, GDPR-compliant", m: [["15,000", "patient accounts in 3 months"], ["99.9%", "uptime (SLA)"]] },
    ],
    footerTagline: "B2B software house. We write code that doesn't fall apart.",
    footerRights: "© 2026 Apex Forge Ltd.",
  },
};

export default function ApexForgeDemo() {
  const t = useT(COPY);
  const topBarIndustry = useT(TOPBAR_INDUSTRY);
  const [stack, setStack] = useState<keyof typeof t.stacks>("next");
  const s = t.stacks[stack];

  return (
    <div className="min-h-screen bg-[#FFF9E6] text-black" style={{ fontFamily: BODY }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry={topBarIndustry} />

      {/* Header */}
      <header className="border-b-4 border-black bg-[#CCFF00]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <span className="border-4 border-black bg-black px-3 py-1 text-lg font-extrabold uppercase text-[#CCFF00]" style={{ fontFamily: HEAD }}>
            Apex Forge
          </span>
          <nav className="hidden gap-6 md:flex">
            {t.nav.map((n, i) => (
              <a key={n} href={NAV_HREFS[i]} className="text-sm font-bold uppercase hover:underline">
                {n}
              </a>
            ))}
          </nav>
          <a href="#kontakt" className="border-4 border-black bg-[#FF66C4] px-4 py-2 text-sm font-extrabold uppercase shadow-[5px_5px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]">
            {t.quoteCta}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="inline-block rotate-[-2deg] border-4 border-black bg-[#FF66C4] px-4 py-1.5 text-sm font-extrabold uppercase shadow-[5px_5px_0_#000]">
            {t.badge}
          </div>
          <h1 className="mt-6 max-w-4xl text-[64px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[84px]" style={{ fontFamily: HEAD }}>
            {t.h1a} <span className="bg-[#CCFF00] px-2">{t.h1Accent}</span> {t.h1b}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-bold">{t.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#porownanie" className="inline-flex items-center gap-2 border-4 border-black bg-black px-6 py-3 text-sm font-extrabold uppercase text-[#CCFF00] shadow-[6px_6px_0_#FF66C4]">
              {t.ctaCompare} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#uslugi" className="inline-flex items-center gap-2 border-4 border-black bg-white px-6 py-3 text-sm font-extrabold uppercase shadow-[6px_6px_0_#000]">
              {t.ctaServices}
            </a>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section id="porownanie" className="border-y-4 border-black bg-[#FFF0F8] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>
            {t.compareTitle}
          </h2>
          <div className="mt-6 inline-flex border-4 border-black shadow-[6px_6px_0_#000]">
            {(Object.keys(t.stacks) as (keyof typeof t.stacks)[]).map((k) => (
              <button key={k} onClick={() => setStack(k)}
                className={`px-6 py-3 text-sm font-extrabold uppercase ${
                  stack === k ? "bg-black text-[#CCFF00]" : "bg-white text-black"
                } ${k === "next" ? "border-r-4 border-black" : ""}`}>
                {t.stacks[k].label}
              </button>
            ))}
          </div>

          <div className="mt-8 border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
            <Metric label={t.metricLoad} value={s.load} />
            <Metric label={t.metricJs} value={s.js} />
            <Metric label={t.metricLighthouse} value={`${s.lh}/100`} />
            <div className="mt-4 h-8 border-4 border-black bg-[#FFF9E6]">
              <div className="h-full bg-[#CCFF00] transition-[width] duration-500" style={{ width: `${s.bar}%` }} />
            </div>
            <p className="mt-3 text-sm font-bold uppercase">{t.overallScore}</p>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="uslugi" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>{t.servicesTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.map(({ i: Icon, t: title, d }, idx) => (
              <div key={title} className="border-4 border-black p-6 shadow-[7px_7px_0_#000]" style={{ backgroundColor: idx % 2 ? "#CCFF00" : "#fff" }}>
                <button className="grid h-16 w-16 place-items-center border-4 border-black bg-[#FF66C4] shadow-[4px_4px_0_#000]">
                  <Icon className="h-7 w-7" />
                </button>
                <h3 className="mt-4 text-xl font-extrabold uppercase">{title}</h3>
                <p className="mt-1 text-sm font-semibold">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack technologiczny */}
      <section className="border-t-4 border-black bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>{t.stackTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.stack.map((s) => (
              <span key={s} className="border-4 border-black bg-[#FFF9E6] px-4 py-2 text-sm font-extrabold uppercase shadow-[4px_4px_0_#000]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="border-t-4 border-black bg-[#FFF0F8] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>{t.processTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map(({ icon: Icon, t: title, d }, i) => (
              <div key={title} className="border-4 border-black bg-white p-6 shadow-[7px_7px_0_#000]">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center border-4 border-black bg-[#CCFF00]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-extrabold text-black/15" style={{ fontFamily: HEAD, fontSize: 28 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold uppercase">{title}</h3>
                <p className="mt-1 text-sm font-semibold">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizacje */}
      <section id="realizacje" className="border-t-4 border-black bg-[#FFF9E6] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>{t.caseStudiesTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.caseStudies.map((c) => (
              <div key={c.n} className="border-4 border-black bg-white p-6 shadow-[7px_7px_0_#000]">
                <h3 className="text-xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>{c.n}</h3>
                <p className="mt-1 text-sm font-semibold">{c.d}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t-4 border-black pt-4">
                  {c.m.map(([v, l]) => (
                    <div key={l}>
                      <div className="text-2xl font-extrabold" style={{ fontFamily: HEAD }}>{v}</div>
                      <div className="text-xs font-semibold">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="border-t-4 border-black bg-black px-6 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="border-4 border-[#CCFF00] px-3 py-1 text-2xl font-extrabold uppercase text-[#CCFF00]" style={{ fontFamily: HEAD }}>
              Apex Forge
            </span>
            <p className="mt-4 max-w-sm text-sm font-semibold text-white/70">{t.footerTagline}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:build@apexforge.dev" className="inline-flex items-center gap-2 border-4 border-[#CCFF00] bg-[#CCFF00] px-5 py-3 text-sm font-extrabold uppercase text-black shadow-[5px_5px_0_#FF66C4]">
              <Zap className="h-4 w-4" /> build@apexforge.dev
            </a>
            <span className="text-xs font-bold uppercase text-white/50">{t.footerRights}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b-4 border-black py-3 last:border-0">
      <span className="text-sm font-bold uppercase">{label}</span>
      <span className="text-2xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</span>
    </div>
  );
}
