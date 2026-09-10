"use client";

import { useState } from "react";
import { Zap, Boxes, GitBranch, Cpu, Rocket, ArrowRight } from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Syne:wght@700;800&display=swap";
const HEAD = "'Syne', system-ui, sans-serif";
const BODY = "'Space Grotesk', system-ui, sans-serif";

const NAV = ["Usługi", "Porównanie", "Realizacje", "Kontakt"];

const STACKS = {
  next: { label: "NEXT.JS", load: "0.7 s", js: "180 KB", lh: "99", bar: 96 },
  wp: { label: "WORDPRESS", load: "3.8 s", js: "1400 KB", lh: "61", bar: 34 },
};

const SERVICES = [
  { i: Boxes, t: "Platformy SaaS", d: "Multi-tenant, billing, panele." },
  { i: GitBranch, t: "Integracje API", d: "ERP, CRM, płatności, webhooki." },
  { i: Cpu, t: "Dedykowane narzędzia", d: "Konwertery, generatory, automaty." },
  { i: Rocket, t: "Audyt & Speed", d: "Migracja z WP, Core Web Vitals." },
];

export default function ApexForgeDemo() {
  const [stack, setStack] = useState<keyof typeof STACKS>("next");
  const s = STACKS[stack];

  return (
    <div className="min-h-screen bg-[#FFF9E6] text-black" style={{ fontFamily: BODY }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry="software house'u Apex Forge" />

      {/* Header */}
      <header className="border-b-4 border-black bg-[#CCFF00]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <span className="border-4 border-black bg-black px-3 py-1 text-lg font-extrabold uppercase text-[#CCFF00]" style={{ fontFamily: HEAD }}>
            Apex Forge
          </span>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm font-bold uppercase hover:underline">
                {n}
              </a>
            ))}
          </nav>
          <a href="#kontakt" className="border-4 border-black bg-[#FF66C4] px-4 py-2 text-sm font-extrabold uppercase shadow-[5px_5px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]">
            Wyceń projekt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="inline-block rotate-[-2deg] border-4 border-black bg-[#FF66C4] px-4 py-1.5 text-sm font-extrabold uppercase shadow-[5px_5px_0_#000]">
            ★ B2B Software Studio
          </div>
          <h1 className="mt-6 max-w-4xl text-[64px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[84px]" style={{ fontFamily: HEAD }}>
            Budujemy <span className="bg-[#CCFF00] px-2">szybki</span> software.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-bold">
            Next.js, TypeScript, architektura edge. Zero wtyczek. Zero ściemy.
            Kod, który wytrzyma skalowanie.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#porównanie" className="inline-flex items-center gap-2 border-4 border-black bg-black px-6 py-3 text-sm font-extrabold uppercase text-[#CCFF00] shadow-[6px_6px_0_#FF66C4]">
              Zobacz porównanie <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#usługi" className="inline-flex items-center gap-2 border-4 border-black bg-white px-6 py-3 text-sm font-extrabold uppercase shadow-[6px_6px_0_#000]">
              Usługi
            </a>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section id="porównanie" className="border-y-4 border-black bg-[#FFF0F8] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>
            Next.js vs WordPress
          </h2>
          <div className="mt-6 inline-flex border-4 border-black shadow-[6px_6px_0_#000]">
            {(Object.keys(STACKS) as (keyof typeof STACKS)[]).map((k) => (
              <button key={k} onClick={() => setStack(k)}
                className={`px-6 py-3 text-sm font-extrabold uppercase ${
                  stack === k ? "bg-black text-[#CCFF00]" : "bg-white text-black"
                } ${k === "next" ? "border-r-4 border-black" : ""}`}>
                {STACKS[k].label}
              </button>
            ))}
          </div>

          <div className="mt-8 border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
            <Metric label="Czas ładowania" value={s.load} />
            <Metric label="Rozmiar JS" value={s.js} />
            <Metric label="Lighthouse" value={`${s.lh}/100`} />
            <div className="mt-4 h-8 border-4 border-black bg-[#FFF9E6]">
              <div className="h-full bg-[#CCFF00] transition-[width] duration-500" style={{ width: `${s.bar}%` }} />
            </div>
            <p className="mt-3 text-sm font-bold uppercase">Wynik ogólny wydajności</p>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="usługi" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: HEAD }}>Co robimy</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ i: Icon, t, d }, idx) => (
              <div key={t} className="border-4 border-black p-6 shadow-[7px_7px_0_#000]" style={{ backgroundColor: idx % 2 ? "#CCFF00" : "#fff" }}>
                <button className="grid h-16 w-16 place-items-center border-4 border-black bg-[#FF66C4] shadow-[4px_4px_0_#000]">
                  <Icon className="h-7 w-7" />
                </button>
                <h3 className="mt-4 text-xl font-extrabold uppercase">{t}</h3>
                <p className="mt-1 text-sm font-semibold">{d}</p>
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
            <p className="mt-4 max-w-sm text-sm font-semibold text-white/70">
              Software house B2B. Piszemy kod, który się nie sypie.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:build@apexforge.dev" className="inline-flex items-center gap-2 border-4 border-[#CCFF00] bg-[#CCFF00] px-5 py-3 text-sm font-extrabold uppercase text-black shadow-[5px_5px_0_#FF66C4]">
              <Zap className="h-4 w-4" /> build@apexforge.dev
            </a>
            <span className="text-xs font-bold uppercase text-white/50">© 2026 Apex Forge sp. z o.o.</span>
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
