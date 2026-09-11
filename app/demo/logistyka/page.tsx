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
  ClipboardList,
  PackageCheck,
  Globe2,
  FileCheck2,
} from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { useT, useLanguage } from "@/lib/language";

const TOPBAR_INDUSTRY = { pl: "firmy transportowej VoltDrive Logistics", en: "transport company VoltDrive Logistics" };

const COPY = {
  pl: {
    nav: ["Flota", "Usługi", "Śledzenie", "Kontakt"],
    headerCta: "Wyceń transport",
    badge: "Monitoring GPS 24/7",
    h1a: "Twój ładunek.",
    h1b: "Zawsze na czas.",
    sub: "Transport dedykowany i drobnicowy po Polsce i Europie. Nowoczesna flota, telematyka i gwarancja terminu.",
    ctaCalc: "Kalkulator frachtu",
    ctaTrack: "Śledź przesyłkę",
    eta: "ETA 04:12",
    stats: [
      { v: "120+", l: "pojazdów" },
      { v: "27", l: "krajów" },
      { v: "99.2%", l: "na czas" },
    ],
    calcTitle: "Kalkulator frachtu",
    calcSub: "Symulacja online — cena aktualizuje się na żywo.",
    weightLabel: "Waga ładunku",
    distanceLabel: "Dystans",
    expressLabel: "Ekspres (+40%)",
    priceLabel: "Szacowana cena netto",
    priceGuarantee: "Cena ważna 48h",
    trackTitle: "Śledzenie przesyłki",
    trackPlaceholder: "Nr listu przewozowego, np. VD-88213",
    trackButton: "Sprawdź",
    trackSteps: [
      "Przyjęto w magazynie Wrocław",
      "W transporcie — A4, węzeł Katowice",
      "Sortownia Warszawa Okęcie",
      "W doręczeniu — kurier #DR-214",
    ],
    fleetTitle: "Nasza flota",
    fleet: [
      { i: Package, n: "Bus do 3.5 t", c: "1.4 t · 8 palet" },
      { i: Truck, n: "Solówka 12 t", c: "6 t · 18 palet" },
      { i: Boxes, n: "Naczepa TIR", c: "24 t · 33 palety" },
    ],
    processTitle: "Jak zamówić transport",
    process: [
      { icon: ClipboardList, t: "Zgłoszenie", d: "Podajesz trasę, wagę i termin — telefonicznie lub przez formularz." },
      { icon: FileCheck2, t: "Potwierdzenie ceny", d: "W 30 minut dostajesz cenę i numer zlecenia, bez ukrytych opłat." },
      { icon: Truck, t: "Odbiór ładunku", d: "Kierowca odbiera towar w uzgodnionym oknie czasowym, z pełną dokumentacją." },
      { icon: PackageCheck, t: "Dostawa i POD", d: "Śledzisz przesyłkę online, a po dostawie dostajesz potwierdzenie (POD) mailem." },
    ],
    coverageTitle: "Zasięg działania",
    coverageSub: "Transport krajowy i międzynarodowy, obsługiwany z własnych baz przeładunkowych.",
    coverage: [
      { icon: Globe2, t: "Europa Zachodnia", d: "Niemcy, Francja, Beneluks, Austria — 2–3 dni robocze." },
      { icon: Globe2, t: "Europa Południowa", d: "Włochy, Hiszpania, Bałkany — 3–5 dni roboczych." },
      { icon: Globe2, t: "Skandynawia i kraje bałtyckie", d: "Dania, Szwecja, Litwa, Łotwa, Estonia — 3–4 dni robocze." },
      { icon: Globe2, t: "Polska", d: "Dostawy krajowe next-day na większości tras." },
    ],
    testimonialsTitle: "Zaufali nam",
    testimonials: [
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
    ],
    faqTitle: "Najczęstsze pytania",
    faq: [
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
    ],
    footer: {
      licence: "Operator logistyczny. Licencja wspólnotowa nr PL-042189.",
      companyTitle: "Firma",
      companyItems: ["O nas", "Flota", "Kariera", "ISO / certyfikaty"],
      servicesTitle: "Usługi",
      servicesItems: ["Transport dedykowany", "Drobnica", "Magazynowanie", "Cross-docking"],
      dispatchTitle: "Dyspozytornia 24/7",
      rights: "© 2026 VoltDrive Logistics Sp. z o.o. — wszelkie prawa zastrzeżone.",
    },
  },
  en: {
    nav: ["Fleet", "Services", "Tracking", "Contact"],
    headerCta: "Get a quote",
    badge: "24/7 GPS monitoring",
    h1a: "Your cargo.",
    h1b: "Always on time.",
    sub: "Dedicated and less-than-truckload transport across Poland and Europe. A modern fleet, telematics, and an on-time guarantee.",
    ctaCalc: "Freight calculator",
    ctaTrack: "Track a shipment",
    eta: "ETA 04:12",
    stats: [
      { v: "120+", l: "vehicles" },
      { v: "27", l: "countries" },
      { v: "99.2%", l: "on time" },
    ],
    calcTitle: "Freight calculator",
    calcSub: "Online simulation — the price updates live.",
    weightLabel: "Cargo weight",
    distanceLabel: "Distance",
    expressLabel: "Express (+40%)",
    priceLabel: "Estimated net price",
    priceGuarantee: "Price valid for 48h",
    trackTitle: "Shipment tracking",
    trackPlaceholder: "Waybill number, e.g. VD-88213",
    trackButton: "Check",
    trackSteps: [
      "Received at the Wrocław warehouse",
      "In transit — A4 highway, Katowice hub",
      "Warsaw Okęcie sorting facility",
      "Out for delivery — courier #DR-214",
    ],
    fleetTitle: "Our fleet",
    fleet: [
      { i: Package, n: "Van up to 3.5 t", c: "1.4 t · 8 pallets" },
      { i: Truck, n: "Rigid truck 12 t", c: "6 t · 18 pallets" },
      { i: Boxes, n: "Semi-trailer", c: "24 t · 33 pallets" },
    ],
    processTitle: "How to book a shipment",
    process: [
      { icon: ClipboardList, t: "Submit a request", d: "Give us the route, weight and date — by phone or through the form." },
      { icon: FileCheck2, t: "Price confirmation", d: "You get a price and order number within 30 minutes, no hidden fees." },
      { icon: Truck, t: "Cargo pickup", d: "A driver collects the goods within the agreed window, with full paperwork." },
      { icon: PackageCheck, t: "Delivery & POD", d: "Track the shipment online, and get a proof of delivery (POD) by email." },
    ],
    coverageTitle: "Coverage",
    coverageSub: "Domestic and international transport, run from our own cross-dock hubs.",
    coverage: [
      { icon: Globe2, t: "Western Europe", d: "Germany, France, Benelux, Austria — 2–3 business days." },
      { icon: Globe2, t: "Southern Europe", d: "Italy, Spain, the Balkans — 3–5 business days." },
      { icon: Globe2, t: "Scandinavia & Baltics", d: "Denmark, Sweden, Lithuania, Latvia, Estonia — 3–4 business days." },
      { icon: Globe2, t: "Poland", d: "Next-day domestic delivery on most routes." },
    ],
    testimonialsTitle: "Trusted by",
    testimonials: [
      {
        q: "We've worked together for 2 years — zero delays delivering to our 40 stores. The tracking panel saves us daily calls to dispatch.",
        n: "Katarzyna M.",
        r: "Logistics Manager, retail chain",
      },
      {
        q: "International transport of spare parts — always on time, customs paperwork handled without us lifting a finger.",
        n: "Marcin W.",
        r: "Owner, automotive wholesaler",
      },
      {
        q: "The calculator on the site gave us a real price in a minute, no waiting for a sales call. We placed the order the same day.",
        n: "Ola K.",
        r: "Procurement specialist, furniture manufacturer",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Is my cargo insured?",
        a: "Yes — every shipment includes cargo insurance up to the full value of the goods. On request, we add extra cover for particularly valuable or sensitive cargo.",
      },
      {
        q: "How long does domestic and international delivery take?",
        a: "Domestic: 24–48 hours. International: usually 2–5 business days, depending on the route and customs clearance. You get an exact date with your quote.",
      },
      {
        q: "How do I check where my shipment currently is?",
        a: "Every shipment has a waybill number and GPS monitoring — check the status online in the \"Shipment tracking\" section above, no need to call dispatch.",
      },
      {
        q: "What documents do I need to prepare for shipping?",
        a: "The base document is a CMR waybill. For international transport, customs documents are also needed — we prepare them together with you, no need to know the paperwork yourself.",
      },
    ],
    footer: {
      licence: "Logistics operator. Community licence no. PL-042189.",
      companyTitle: "Company",
      companyItems: ["About us", "Fleet", "Careers", "ISO / certificates"],
      servicesTitle: "Services",
      servicesItems: ["Dedicated transport", "LTL shipping", "Warehousing", "Cross-docking"],
      dispatchTitle: "24/7 Dispatch",
      rights: "© 2026 VoltDrive Logistics Ltd. — all rights reserved.",
    },
  },
};

function pln(n: number, lang: "pl" | "en") {
  return lang === "pl"
    ? n.toLocaleString("pl-PL", { maximumFractionDigits: 0 }) + " zł"
    : n.toLocaleString("en-US", { maximumFractionDigits: 0 }) + " PLN";
}

export default function VoltDriveDemo() {
  const t = useT(COPY);
  const topBarIndustry = useT(TOPBAR_INDUSTRY);
  const { lang } = useLanguage();
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
      {/* Pasek agencji + header firmy przewijają się razem jako jedna sticky całość */}
      <div className="sticky top-0 z-[60]">
        <DemoTopBar industry={topBarIndustry} />

        <header className="border-b border-white/[0.06] bg-[#060B18]/95 backdrop-blur-xl">
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
              {t.nav.map((n, i) => (
                <a key={n} href={`#${["flota", "uslugi", "sledzenie", "kontakt"][i]}`} className="text-sm font-semibold text-slate-400 hover:text-white">
                  {n}
                </a>
              ))}
            </nav>
            <a href="#uslugi" className="rounded-full bg-[#00E5A0] px-5 py-2 text-sm font-bold text-black hover:bg-[#00c98d]">
              {t.headerCta}
            </a>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] rounded-full bg-[#00A3FF]/20 blur-[150px]" />
        <div className="pointer-events-none absolute left-1/3 top-40 h-[380px] w-[380px] rounded-full bg-[#00E5A0]/15 blur-[150px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00E5A0]/25 bg-[#00E5A0]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00E5A0]">
              <Radar className="h-3.5 w-3.5" /> {t.badge}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tighter text-white md:text-6xl">
              {t.h1a}{" "}
              <span className="bg-gradient-to-r from-[#00E5A0] to-[#00A3FF] bg-clip-text text-transparent">
                {t.h1b}
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg font-medium text-slate-400">{t.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#uslugi" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00E5A0] to-[#00A3FF] px-6 py-3 text-sm font-bold text-black">
                {t.ctaCalc} <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#sledzenie" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white hover:bg-white/[0.05]">
                {t.ctaTrack}
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
                <Truck className="mr-1 inline h-3.5 w-3.5" /> {t.eta}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {t.stats.map(({ v, l }, i) => {
                const Icon = [Truck, MapPin, Timer][i];
                return (
                  <div key={l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
                    <Icon className="mx-auto h-4 w-4 text-[#00A3FF]" />
                    <div className="mt-1 text-lg font-black text-white">{v}</div>
                    <div className="text-[11px] text-slate-500">{l}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Kalkulator */}
      <section id="uslugi" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">{t.calcTitle}</h2>
          <p className="mt-2 font-medium text-slate-400">{t.calcSub}</p>
          <div className="mt-8 grid gap-6 rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl md:grid-cols-[1.4fr_1fr] md:p-8">
            <div className="space-y-8">
              <Range label={t.weightLabel} v={weight} min={0.5} max={24} step={0.5} unit="t" on={setWeight} />
              <Range label={t.distanceLabel} v={distance} min={20} max={2500} step={10} unit="km" on={setDistance} />
              <button
                onClick={() => setExpress((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold ${
                  express ? "border-[#00E5A0] bg-[#00E5A0]/10 text-[#00E5A0]" : "border-white/10 text-slate-400"
                }`}
              >
                <Timer className="h-4 w-4" /> {t.expressLabel}
              </button>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-white/[0.06] bg-[#0A1020] p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.priceLabel}</span>
              <span className="mt-2 text-4xl font-black tracking-tighter text-white">
                {pln(price, lang)}
              </span>
              <span className="mt-1 text-xs text-slate-500">{weight} t · {distance} km</span>
              <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00E5A0] to-[#00A3FF] px-4 py-2 text-xs font-bold text-black">
                <ShieldCheck className="h-4 w-4" /> {t.priceGuarantee}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Śledzenie */}
      <section id="sledzenie" className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-black tracking-tighter text-white">{t.trackTitle}</h2>
          <div className="mt-5 flex gap-2">
            <input
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              placeholder={t.trackPlaceholder}
              className="flex-1 rounded-xl border border-white/10 bg-[#0A1020] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-[#00E5A0]/50 focus:outline-none"
            />
            <button
              onClick={() => setTracked(track ? t.trackSteps.length - 1 : 1)}
              className="rounded-xl bg-[#00E5A0] px-5 text-sm font-bold text-black"
            >
              {t.trackButton}
            </button>
          </div>
          {tracked !== null && (
            <ol className="mt-6 space-y-3">
              {t.trackSteps.map((s, i) => (
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
          <h2 className="text-3xl font-black tracking-tighter text-white">{t.fleetTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.fleet.map(({ i: Icon, n, c }) => (
              <div key={n} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <Icon className="h-7 w-7 text-[#00E5A0]" />
                <h3 className="mt-4 text-lg font-bold text-white">{n}</h3>
                <p className="mt-1 text-sm text-slate-400">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces zamówienia */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">{t.processTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.process.map(({ icon: Icon, t: title, d }, i) => (
              <div key={title} className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <span className="absolute right-5 top-5 font-mono text-2xl font-black text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 text-[#00E5A0]" />
                <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zasięg działania */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">{t.coverageTitle}</h2>
          <p className="mt-2 font-medium text-slate-400">{t.coverageSub}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.coverage.map(({ icon: Icon, t: title, d }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/[0.06] bg-[#0A1020]">
                  <Icon className="h-5 w-5 text-[#00A3FF]" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">{t.testimonialsTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.testimonials.map((tm) => (
              <div key={tm.n} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <Quote className="h-5 w-5 text-[#00E5A0]" />
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{tm.q}</p>
                <div className="mt-4 border-t border-white/[0.06] pt-3">
                  <div className="text-sm font-bold text-white">{tm.n}</div>
                  <div className="text-xs text-slate-500">{tm.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black tracking-tighter text-white">{t.faqTitle}</h2>
          <div className="mt-8 flex flex-col gap-3">
            {t.faq.map((item, i) => {
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
            <p className="mt-3 text-sm text-slate-500">{t.footer.licence}</p>
          </div>
          <FootCol title={t.footer.companyTitle} items={t.footer.companyItems} />
          <FootCol title={t.footer.servicesTitle} items={t.footer.servicesItems} />
          <div>
            <div className="text-sm font-bold text-white">{t.footer.dispatchTitle}</div>
            <a href="tel:+48221000000" className="mt-3 flex items-center gap-2 text-sm text-[#00E5A0]">
              <Phone className="h-4 w-4" /> +48 22 100 00 00
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/[0.06] pt-6 text-xs text-slate-600">
          {t.footer.rights}
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
