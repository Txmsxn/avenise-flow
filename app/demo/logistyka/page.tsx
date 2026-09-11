"use client";

import { useMemo, useState } from "react";
import {
  Truck,
  Package,
  MapPin,
  Timer,
  Radar,
  ShieldCheck,
  Phone,
  ArrowRight,
  CircleCheck,
  Boxes,
  Plus,
  Quote,
} from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";

const FAQ_ITEMS = [
  {
    q: "Czy mój ładunek jest ubezpieczony?",
    a: "Tak — każdy transport obejmuje ubezpieczenie cargo do pełnej wartości towaru. Na życzenie doubezpieczamy ładunki szczególnie wartościowe lub wrażliwe na warunki transportu.",
  },
  {
    q: "Ile trwa dostawa krajowa i zagraniczna?",
    a: "Transport krajowy: 24–48 godzin. Międzynarodowy: zwykle 2–5 dni roboczych, zależnie od trasy i odprawy celnej. Dokładny termin dostajesz razem z wyceną.",
  },
  {
    q: "Jak sprawdzę, gdzie aktualnie jest mój transport?",
    a: "Każda przesyłka ma numer listu przewozowego i monitoring GPS — status sprawdzisz online w sekcji „Śledzenie przesyłki\" powyżej, bez dzwonienia do dyspozytorni.",
  },
  {
    q: "Jakie dokumenty muszę przygotować do nadania?",
    a: "Podstawą jest list przewozowy CMR. Przy transporcie międzynarodowym dochodzą dokumenty celne — przygotowujemy je razem z Tobą, nie musisz znać się na formalnościach.",
  },
];

const NAV = ["Flota", "Usługi", "Śledzenie", "Kontakt"];

const TRACK_STEPS = [
  "Przyjęto w magazynie Wrocław",
  "W transporcie — A4, węzeł Katowice",
  "Sortownia Warszawa Okęcie",
  "W doręczeniu — kurier #DR-214",
];

function pln(n: number) {
  return n.toLocaleString("pl-PL", { maximumFractionDigits: 0 }) + " zł";
}

export default function VoltDriveDemo() {
  const [weight, setWeight] = useState(6);
  const [distance, setDistance] = useState(420);
  const [express, setExpress] = useState(false);
  const [track, setTrack] = useState("");
  const [tracked, setTracked] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const price = useMemo(() => {
    let p = 260 + distance * 2.3 + weight * 48;
    if (express) p *= 1.4;
    return Math.round(p / 10) * 10;
  }, [weight, distance, express]);

  return (
    <div className="min-h-screen bg-[#060B18] font-sans text-slate-300">
      <DemoTopBar industry="firmy transportowej VoltDrive Logistics" />

      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#060B18]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#00E5A0] to-[#00A3FF] text-black">
              <Truck className="h-5 w-5" />
            </span>
            <span className="text-lg font-black tracking-tight text-white">
              VOLT<span className="text-[#00E5A0]">DRIVE</span>
            </span>
          </div>
          <nav className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm font-semibold text-slate-400 hover:text-white">
                {n}
              </a>
            ))}
          </nav>
          <a href="#usługi" className="rounded-full bg-[#00E5A0] px-5 py-2 text-sm font-bold text-black hover:bg-[#00c98d]">
            Wyceń transport
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] rounded-full bg-[#00A3FF]/20 blur-[150px]" />
        <div className="pointer-events-none absolute left-1/3 top-40 h-[380px] w-[380px] rounded-full bg-[#00E5A0]/15 blur-[150px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00E5A0]/25 bg-[#00E5A0]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00E5A0]">
              <Radar className="h-3.5 w-3.5" /> Monitoring GPS 24/7
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tighter text-white md:text-6xl">
              Twój ładunek.{" "}
              <span className="bg-gradient-to-r from-[#00E5A0] to-[#00A3FF] bg-clip-text text-transparent">
                Zawsze na czas.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg font-medium text-slate-400">
              Transport dedykowany i drobnicowy po Polsce i Europie. Nowoczesna
              flota, telematyka i gwarancja terminu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#usługi" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00E5A0] to-[#00A3FF] px-6 py-3 text-sm font-bold text-black">
                Kalkulator frachtu <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#śledzenie" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white hover:bg-white/[0.05]">
                Śledź przesyłkę
              </a>
            </div>
          </div>

          {/* Wizual: mapa/flota */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="relative h-56 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A1020]">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,229,160,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(0,163,255,.12) 1px,transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 224">
                <path d="M30 180 C 120 60, 260 260, 370 60" fill="none" stroke="#00E5A0" strokeWidth="2.5" strokeDasharray="6 6" />
                <circle cx="30" cy="180" r="6" fill="#00A3FF" />
                <circle cx="370" cy="60" r="6" fill="#00E5A0" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00E5A0]/40 bg-[#00E5A0]/10 px-3 py-1 text-xs font-bold text-[#00E5A0]">
                <Truck className="mr-1 inline h-3.5 w-3.5" /> ETA 04:12
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { i: Truck, v: "120+", l: "pojazdów" },
                { i: MapPin, v: "27", l: "krajów" },
                { i: Timer, v: "99.2%", l: "na czas" },
              ].map(({ i: Icon, v, l }) => (
                <div key={l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
                  <Icon className="mx-auto h-4 w-4 text-[#00A3FF]" />
                  <div className="mt-1 text-lg font-black text-white">{v}</div>
                  <div className="text-[11px] text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kalkulator */}
      <section id="usługi" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">Kalkulator frachtu</h2>
          <p className="mt-2 font-medium text-slate-400">Symulacja online — cena aktualizuje się na żywo.</p>
          <div className="mt-8 grid gap-6 rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl md:grid-cols-[1.4fr_1fr] md:p-8">
            <div className="space-y-8">
              <Range label="Waga ładunku" v={weight} min={0.5} max={24} step={0.5} unit="t" on={setWeight} />
              <Range label="Dystans" v={distance} min={20} max={2500} step={10} unit="km" on={setDistance} />
              <button
                onClick={() => setExpress((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold ${
                  express ? "border-[#00E5A0] bg-[#00E5A0]/10 text-[#00E5A0]" : "border-white/10 text-slate-400"
                }`}
              >
                <Timer className="h-4 w-4" /> Ekspres (+40%)
              </button>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-white/[0.06] bg-[#0A1020] p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Szacowana cena netto</span>
              <span className="mt-2 text-4xl font-black tracking-tighter text-white">{pln(price)}</span>
              <span className="mt-1 text-xs text-slate-500">{weight} t · {distance} km</span>
              <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00E5A0] to-[#00A3FF] px-4 py-2 text-xs font-bold text-black">
                <ShieldCheck className="h-4 w-4" /> Cena ważna 48h
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Śledzenie */}
      <section id="śledzenie" className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-black tracking-tighter text-white">Śledzenie przesyłki</h2>
          <div className="mt-5 flex gap-2">
            <input
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              placeholder="Nr listu przewozowego, np. VD-88213"
              className="flex-1 rounded-xl border border-white/10 bg-[#0A1020] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-[#00E5A0]/50 focus:outline-none"
            />
            <button
              onClick={() => setTracked(track ? TRACK_STEPS.length - 1 : 1)}
              className="rounded-xl bg-[#00E5A0] px-5 text-sm font-bold text-black"
            >
              Sprawdź
            </button>
          </div>
          {tracked !== null && (
            <ol className="mt-6 space-y-3">
              {TRACK_STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm">
                  <CircleCheck className={`h-5 w-5 shrink-0 ${i <= tracked ? "text-[#00E5A0]" : "text-white/15"}`} />
                  <span className={i <= tracked ? "text-white" : "text-slate-600"}>{s}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* Flota */}
      <section id="flota" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">Nasza flota</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { i: Package, n: "Bus do 3.5 t", c: "1.4 t · 8 palet" },
              { i: Truck, n: "Solówka 12 t", c: "6 t · 18 palet" },
              { i: Boxes, n: "Naczepa TIR", c: "24 t · 33 palety" },
            ].map(({ i: Icon, n, c }) => (
              <div key={n} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <Icon className="h-7 w-7 text-[#00E5A0]" />
                <h3 className="mt-4 text-lg font-bold text-white">{n}</h3>
                <p className="mt-1 text-sm text-slate-400">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">Zaufali nam</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                q: "Współpracujemy od 2 lat — zero opóźnień w dostawach do naszych 40 sklepów. Panel śledzenia oszczędza nam codzienne telefony do spedycji.",
                n: "Katarzyna M.",
                r: "Kierownik logistyki, sieć handlowa",
              },
              {
                q: "Transport międzynarodowy części zamiennych — zawsze na czas, dokumenty celne przygotowane bez naszego udziału.",
                n: "Marcin W.",
                r: "Właściciel, hurtownia motoryzacyjna",
              },
              {
                q: "Kalkulator na stronie dał nam realną cenę w minutę, bez czekania na telefon od handlowca. Zamówienie złożyliśmy tego samego dnia.",
                n: "Ola K.",
                r: "Specjalistka ds. zakupów, producent mebli",
              },
            ].map((t) => (
              <div key={t.n} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <Quote className="h-5 w-5 text-[#00E5A0]" />
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.q}</p>
                <div className="mt-4 border-t border-white/[0.06] pt-3">
                  <div className="text-sm font-bold text-white">{t.n}</div>
                  <div className="text-xs text-slate-500">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">Najczęstsze pytania</h2>
          <div className="mt-8 flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const open = faqOpen === i;
              return (
                <div key={item.q} className="rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                  <button
                    type="button"
                    onClick={() => setFaqOpen(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-bold text-white">{item.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 text-[#00E5A0] transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  {open && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-400">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="border-t border-white/[0.06] bg-[#050A14] px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <span className="text-lg font-black text-white">VOLT<span className="text-[#00E5A0]">DRIVE</span></span>
            <p className="mt-3 text-sm text-slate-500">Operator logistyczny. Licencja wspólnotowa nr PL-042189.</p>
          </div>
          <FootCol title="Firma" items={["O nas", "Flota", "Kariera", "ISO / certyfikaty"]} />
          <FootCol title="Usługi" items={["Transport dedykowany", "Drobnica", "Magazynowanie", "Cross-docking"]} />
          <div>
            <div className="text-sm font-bold text-white">Dyspozytornia 24/7</div>
            <a href="tel:+48221000000" className="mt-3 flex items-center gap-2 text-sm text-[#00E5A0]">
              <Phone className="h-4 w-4" /> +48 22 100 00 00
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/[0.06] pt-6 text-xs text-slate-600">
          © 2026 VoltDrive Logistics Sp. z o.o. — wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}

function Range({
  label, v, min, max, step, unit, on,
}: { label: string; v: number; min: number; max: number; step: number; unit: string; on: (n: number) => void }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-slate-300">{label}</span>
        <span className="text-lg font-black text-white">{v} {unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => on(Number(e.target.value))} className="mt-3 w-full accent-[#00E5A0]" />
    </div>
  );
}

function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-bold text-white">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-500">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-slate-300">{i}</a></li>)}
      </ul>
    </div>
  );
}
