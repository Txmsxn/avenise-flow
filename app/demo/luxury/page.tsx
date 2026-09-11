"use client";

import { useMemo, useState } from "react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;900&display=swap";
const FONT = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

const NAV = ["Kolekcja", "Atelier", "Wycena", "Kontakt"];

const GALLERY = [
  { id: "01", n: "Krzesło ROND", y: "2025" },
  { id: "02", n: "Stół LINEA", y: "2025" },
  { id: "03", n: "Regał GRID", y: "2024" },
  { id: "04", n: "Fotel MASSA", y: "2024" },
  { id: "05", n: "Lampa AXIS", y: "2026" },
  { id: "06", n: "Komoda PLAN", y: "2026" },
];

const CATS = [
  { n: "Krzesło", base: 2400 },
  { n: "Stół", base: 6800 },
  { n: "Regał / zabudowa", base: 9200 },
];
const MATS = [
  { n: "Dąb olejowany", k: 1 },
  { n: "Orzech amerykański", k: 1.35 },
  { n: "Stal + kamień", k: 1.6 },
];

export default function LumiereDemo() {
  const [cat, setCat] = useState(0);
  const [mat, setMat] = useState(0);
  const [qty, setQty] = useState(1);

  const est = useMemo(() => {
    const unit = Math.round(CATS[cat].base * MATS[mat].k);
    return { low: unit * qty, high: Math.round(unit * qty * 1.25) };
  }, [cat, mat, qty]);

  return (
    <div className="min-h-screen bg-white text-[#111111]" style={{ fontFamily: FONT }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry="atelier meblowego Lumière" />

      {/* Header */}
      <header className="border-b border-black bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-xl font-black uppercase tracking-[0.25em]">Lumière</span>
          <nav className="hidden gap-10 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.15em] hover:opacity-50">
                {n}
              </a>
            ))}
          </nav>
          <span className="text-xs font-bold uppercase tracking-[0.15em]">Warszawa · Est. 2011</span>
        </div>
      </header>

      {/* Hero — asymetryczny grid */}
      <section className="border-b border-black">
        <div className="mx-auto grid max-w-6xl grid-cols-12 px-6">
          <div className="col-span-12 border-b border-black py-16 md:col-span-8 md:border-b-0 md:border-r md:pr-10">
            <h1 className="text-[56px] font-black uppercase leading-[0.92] tracking-tight md:text-[80px]">
              Meble<br />projektowane<br />na jedno życie
            </h1>
          </div>
          <div className="col-span-12 flex flex-col justify-end py-10 md:col-span-4 md:pl-10">
            <p className="text-sm leading-relaxed text-[#111111]/70">
              Atelier Lumière. Meble autorskie z litego drewna i stali,
              wykonywane ręcznie na indywidualne zamówienie.
            </p>
            <a href="#wycena" className="mt-8 inline-block border-b-2 border-black pb-1 text-xs font-bold uppercase tracking-[0.2em]">
              Zamów wycenę →
            </a>
          </div>
        </div>
      </section>

      {/* Galeria B&W */}
      <section id="kolekcja" className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-baseline justify-between border-b border-black pb-4">
            <h2 className="text-2xl font-black uppercase tracking-tight">Kolekcja</h2>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">6 obiektów</span>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-black md:grid-cols-3">
            {GALLERY.map((g) => (
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
            <h2 className="text-2xl font-black uppercase tracking-tight">Kalkulator projektu indywidualnego</h2>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">Kategoria</p>
            <div className="mt-2 flex flex-wrap gap-0 border border-black">
              {CATS.map((c, i) => (
                <button key={c.n} onClick={() => setCat(i)}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] ${i < CATS.length - 1 ? "border-r border-black" : ""} ${cat === i ? "bg-black text-white" : "bg-white"}`}>
                  {c.n}
                </button>
              ))}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">Materiał</p>
            <div className="mt-2 flex flex-wrap border border-black">
              {MATS.map((m, i) => (
                <button key={m.n} onClick={() => setMat(i)}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] ${i < MATS.length - 1 ? "border-r border-black" : ""} ${mat === i ? "bg-black text-white" : "bg-white"}`}>
                  {m.n}
                </button>
              ))}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">Liczba sztuk — {qty}</p>
            <input type="range" min={1} max={12} value={qty} onChange={(e) => setQty(Number(e.target.value))} className="mt-3 w-full accent-black" />
          </div>

          <div className="col-span-12 flex flex-col justify-center py-10 md:col-span-5 md:pl-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/50">Szacowany przedział</span>
            <div className="mt-3 text-4xl font-black tracking-tighter md:text-5xl">
              {est.low.toLocaleString("pl-PL")}–{est.high.toLocaleString("pl-PL")} zł
            </div>
            <p className="mt-4 text-sm text-[#111111]/60">
              {CATS[cat].n} · {MATS[mat].n} · {qty} szt. Wycena orientacyjna netto,
              realizacja 8–12 tygodni.
            </p>
            <a href="#kontakt" className="mt-8 inline-block w-max border-2 border-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white">
              Umów spotkanie w atelier
            </a>
          </div>
        </div>
      </section>

      {/* Proces / Atelier */}
      <section id="atelier" className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-black uppercase tracking-tight">Jak powstaje mebel na zamówienie</h2>
          <div className="mt-10 grid gap-8 border-t border-black pt-8 md:grid-cols-5">
            {[
              ["01", "Konsultacja", "Rozmawiamy o funkcji, wymiarach i miejscu, w którym mebel ma stanąć."],
              ["02", "Projekt i wizualizacja", "Przygotowujemy rysunek techniczny i wizualizację 3D do akceptacji."],
              ["03", "Dobór materiałów", "Wybierasz gatunek drewna, wykończenie i okucia — widzisz próbki na żywo."],
              ["04", "Wykonanie w pracowni", "Mebel powstaje ręcznie, etap po etapie, z kontrolą jakości przy każdym."],
              ["05", "Dostawa i montaż", "Transportujemy i montujemy na miejscu, z instrukcją pielęgnacji drewna."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/40">{n}</div>
                <div className="mt-2 text-sm font-bold uppercase">{t}</div>
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
            <p className="mt-3 text-xs text-[#111111]/60">Atelier meblowe</p>
          </div>
          <div className="text-xs text-[#111111]/60">
            ul. Mokotowska 4<br />00-640 Warszawa
          </div>
          <div className="text-xs text-[#111111]/60">
            atelier@lumiere.pl<br />+48 22 000 11 22
          </div>
          <div className="text-xs text-[#111111]/60 md:text-right">© 2026 Lumière</div>
        </div>
      </footer>
    </div>
  );
}
