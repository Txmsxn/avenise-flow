"use client";

import { useMemo, useState } from "react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { useT, useLanguage } from "@/lib/language";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;900&display=swap";
const FONT = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

const NAV_HREFS = ["#kolekcja", "#atelier", "#wycena", "#kontakt"];

const TOPBAR_INDUSTRY = { pl: "atelier meblowego Lumière", en: "furniture atelier Lumière" };

const COPY = {
  pl: {
    nav: ["Kolekcja", "Atelier", "Wycena", "Kontakt"],
    est: "Warszawa · Est. 2011",
    gallery: [
      { id: "01", n: "Krzesło ROND", y: "2025" },
      { id: "02", n: "Stół LINEA", y: "2025" },
      { id: "03", n: "Regał GRID", y: "2024" },
      { id: "04", n: "Fotel MASSA", y: "2024" },
      { id: "05", n: "Lampa AXIS", y: "2026" },
      { id: "06", n: "Komoda PLAN", y: "2026" },
    ],
    cats: [
      { n: "Krzesło", base: 2400 },
      { n: "Stół", base: 6800 },
      { n: "Regał / zabudowa", base: 9200 },
    ],
    mats: [
      { n: "Dąb olejowany", k: 1 },
      { n: "Orzech amerykański", k: 1.35 },
      { n: "Stal + kamień", k: 1.6 },
    ],
    h1: ["Meble", "projektowane", "na jedno życie"],
    heroText: "Atelier Lumière. Meble autorskie z litego drewna i stali, wykonywane ręcznie na indywidualne zamówienie.",
    heroCta: "Zamów wycenę →",
    collectionTitle: "Kolekcja",
    collectionCount: "6 obiektów",
    calcTitle: "Kalkulator projektu indywidualnego",
    categoryLabel: "Kategoria",
    materialLabel: "Materiał",
    quantityLabel: (qty: number) => `Liczba sztuk — ${qty}`,
    estimateLabel: "Szacowany przedział",
    estimateNote: (cat: string, mat: string, qty: number) =>
      `${cat} · ${mat} · ${qty} szt. Wycena orientacyjna netto, realizacja 8–12 tygodni.`,
    bookMeeting: "Umów spotkanie w atelier",
    processTitle: "Jak powstaje mebel na zamówienie",
    process: [
      ["01", "Konsultacja", "Rozmawiamy o funkcji, wymiarach i miejscu, w którym mebel ma stanąć."],
      ["02", "Projekt i wizualizacja", "Przygotowujemy rysunek techniczny i wizualizację 3D do akceptacji."],
      ["03", "Dobór materiałów", "Wybierasz gatunek drewna, wykończenie i okucia — widzisz próbki na żywo."],
      ["04", "Wykonanie w pracowni", "Mebel powstaje ręcznie, etap po etapie, z kontrolą jakości przy każdym."],
      ["05", "Dostawa i montaż", "Transportujemy i montujemy na miejscu, z instrukcją pielęgnacji drewna."],
    ],
    footerTagline: "Atelier meblowe",
    footerAddress: ["ul. Mokotowska 4", "00-640 Warszawa"],
    footerRights: "© 2026 Lumière",
  },
  en: {
    nav: ["Collection", "Atelier", "Quote", "Contact"],
    est: "Warsaw · Est. 2011",
    gallery: [
      { id: "01", n: "ROND Chair", y: "2025" },
      { id: "02", n: "LINEA Table", y: "2025" },
      { id: "03", n: "GRID Shelving", y: "2024" },
      { id: "04", n: "MASSA Armchair", y: "2024" },
      { id: "05", n: "AXIS Lamp", y: "2026" },
      { id: "06", n: "PLAN Sideboard", y: "2026" },
    ],
    cats: [
      { n: "Chair", base: 2400 },
      { n: "Table", base: 6800 },
      { n: "Shelving / built-in", base: 9200 },
    ],
    mats: [
      { n: "Oiled oak", k: 1 },
      { n: "American walnut", k: 1.35 },
      { n: "Steel + stone", k: 1.6 },
    ],
    h1: ["Furniture", "designed", "for one lifetime"],
    heroText: "Atelier Lumière. Signature furniture in solid wood and steel, handmade to individual order.",
    heroCta: "Request a quote →",
    collectionTitle: "Collection",
    collectionCount: "6 pieces",
    calcTitle: "Custom project calculator",
    categoryLabel: "Category",
    materialLabel: "Material",
    quantityLabel: (qty: number) => `Quantity — ${qty}`,
    estimateLabel: "Estimated range",
    estimateNote: (cat: string, mat: string, qty: number) =>
      `${cat} · ${mat} · ${qty} pc. Ballpark net estimate, 8–12 week turnaround.`,
    bookMeeting: "Book a visit to the atelier",
    processTitle: "How a custom piece is made",
    process: [
      ["01", "Consultation", "We talk through function, dimensions, and where the piece will stand."],
      ["02", "Design & rendering", "We prepare a technical drawing and 3D render for your approval."],
      ["03", "Material selection", "You choose the wood species, finish and hardware — and see samples in person."],
      ["04", "Made in the workshop", "The piece is made by hand, step by step, with quality control at every stage."],
      ["05", "Delivery & installation", "We deliver and install on site, with wood-care instructions."],
    ],
    footerTagline: "Furniture atelier",
    footerAddress: ["4 Mokotowska St", "00-640 Warsaw"],
    footerRights: "© 2026 Lumière",
  },
};

export default function LumiereDemo() {
  const t = useT(COPY);
  const topBarIndustry = useT(TOPBAR_INDUSTRY);
  const { lang } = useLanguage();
  const [cat, setCat] = useState(0);
  const [mat, setMat] = useState(0);
  const [qty, setQty] = useState(1);

  const est = useMemo(() => {
    const unit = Math.round(t.cats[cat].base * t.mats[mat].k);
    return { low: unit * qty, high: Math.round(unit * qty * 1.25) };
  }, [t, cat, mat, qty]);

  const locale = lang === "pl" ? "pl-PL" : "en-US";
  const currency = lang === "pl" ? "zł" : "PLN";

  return (
    <div className="min-h-screen bg-white text-[#111111]" style={{ fontFamily: FONT }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry={topBarIndustry} />

      {/* Header */}
      <header className="border-b border-black bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-xl font-black uppercase tracking-[0.25em]">Lumière</span>
          <nav className="hidden gap-10 md:flex">
            {t.nav.map((n, i) => (
              <a key={n} href={NAV_HREFS[i]} className="text-xs font-bold uppercase tracking-[0.15em] hover:opacity-50">
                {n}
              </a>
            ))}
          </nav>
          <span className="text-xs font-bold uppercase tracking-[0.15em]">{t.est}</span>
        </div>
      </header>

      {/* Hero — asymetryczny grid */}
      <section className="border-b border-black">
        <div className="mx-auto grid max-w-6xl grid-cols-12 px-6">
          <div className="col-span-12 border-b border-black py-16 md:col-span-8 md:border-b-0 md:border-r md:pr-10">
            <h1 className="text-[56px] font-black uppercase leading-[0.92] tracking-tight md:text-[80px]">
              {t.h1[0]}<br />{t.h1[1]}<br />{t.h1[2]}
            </h1>
          </div>
          <div className="col-span-12 flex flex-col justify-end py-10 md:col-span-4 md:pl-10">
            <p className="text-sm leading-relaxed text-[#111111]/70">{t.heroText}</p>
            <a href="#wycena" className="mt-8 inline-block border-b-2 border-black pb-1 text-xs font-bold uppercase tracking-[0.2em]">
              {t.heroCta}
            </a>
          </div>
        </div>
      </section>

      {/* Galeria B&W */}
      <section id="kolekcja" className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-baseline justify-between border-b border-black pb-4">
            <h2 className="text-2xl font-black uppercase tracking-tight">{t.collectionTitle}</h2>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">{t.collectionCount}</span>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-black md:grid-cols-3">
            {t.gallery.map((g) => (
              <div key={g.id} className="border-b border-r border-black p-5">
                <div className="aspect-[4/5] w-full bg-[repeating-linear-gradient(45deg,#f0f0f0,#f0f0f0_10px,#fafafa_10px,#fafafa_20px)]" />
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm font-bold uppercase">{g.n}</span>
                  <span className="text-xs text-[#111111]/50">{g.id} · {g.y}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wycena */}
      <section id="wycena" className="border-b border-black">
        <div className="mx-auto grid max-w-6xl grid-cols-12 px-6">
          <div className="col-span-12 border-b border-black py-10 md:col-span-7 md:border-b-0 md:border-r md:pr-10">
            <h2 className="text-2xl font-black uppercase tracking-tight">{t.calcTitle}</h2>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">{t.categoryLabel}</p>
            <div className="mt-2 flex flex-wrap gap-0 border border-black">
              {t.cats.map((c, i) => (
                <button key={c.n} onClick={() => setCat(i)}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] ${i < t.cats.length - 1 ? "border-r border-black" : ""} ${cat === i ? "bg-black text-white" : "bg-white"}`}>
                  {c.n}
                </button>
              ))}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">{t.materialLabel}</p>
            <div className="mt-2 flex flex-wrap border border-black">
              {t.mats.map((m, i) => (
                <button key={m.n} onClick={() => setMat(i)}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] ${i < t.mats.length - 1 ? "border-r border-black" : ""} ${mat === i ? "bg-black text-white" : "bg-white"}`}>
                  {m.n}
                </button>
              ))}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">{t.quantityLabel(qty)}</p>
            <input type="range" min={1} max={12} value={qty} onChange={(e) => setQty(Number(e.target.value))} className="mt-3 w-full accent-black" />
          </div>

          <div className="col-span-12 flex flex-col justify-center py-10 md:col-span-5 md:pl-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">{t.estimateLabel}</span>
            <div className="mt-3 text-4xl font-black tracking-tighter md:text-5xl">
              {est.low.toLocaleString(locale)}–{est.high.toLocaleString(locale)} {currency}
            </div>
            <p className="mt-4 text-sm text-[#111111]/60">
              {t.estimateNote(t.cats[cat].n, t.mats[mat].n, qty)}
            </p>
            <a href="#kontakt" className="mt-8 inline-block w-max border-2 border-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white">
              {t.bookMeeting}
            </a>
          </div>
        </div>
      </section>

      {/* Proces / Atelier */}
      <section id="atelier" className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-black uppercase tracking-tight">{t.processTitle}</h2>
          <div className="mt-10 grid gap-8 border-t border-black pt-8 md:grid-cols-5">
            {t.process.map(([n, title, d]) => (
              <div key={n}>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/40">{n}</div>
                <div className="mt-2 text-sm font-bold uppercase">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-[#111111]/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.2em]">Lumière</div>
            <p className="mt-3 text-xs text-[#111111]/60">{t.footerTagline}</p>
          </div>
          <div className="text-xs text-[#111111]/60">
            {t.footerAddress[0]}<br />{t.footerAddress[1]}
          </div>
          <div className="text-xs text-[#111111]/60">
            atelier@lumiere.pl<br />+48 22 000 11 22
          </div>
          <div className="text-xs text-[#111111]/60 md:text-right">{t.footerRights}</div>
        </div>
      </footer>
    </div>
  );
}
