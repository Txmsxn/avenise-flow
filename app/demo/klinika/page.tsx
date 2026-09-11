"use client";

import { useState } from "react";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  Check,
  Plus,
  CalendarDays,
  Scan,
  Sparkle,
  Syringe,
  Navigation,
} from "lucide-react";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { useT } from "@/lib/language";

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "'Source Sans 3', system-ui, sans-serif";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap";

const SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
const NAV_HREFS = ["#zespol", "#cennik", "#rezerwacja", "#faq"];

const TOPBAR_INDUSTRY = { pl: "kliniki stomatologicznej Aura Dental", en: "dental clinic Aura Dental" };

const COPY = {
  pl: {
    nav: ["Zespół", "Cennik", "Rezerwacja", "FAQ"],
    registrationLabel: "Rejestracja: 12 345 67 89",
    bookCta: "Umów wizytę",
    eyebrow: "Klinika stomatologiczna · Warszawa",
    h1a: "Spokojna wizyta.",
    h1b: "Zdrowy uśmiech.",
    sub: "Delikatne leczenie, cyfrowa diagnostyka i pełna transparentność kosztów — w kameralnym, ciepłym wnętrzu.",
    badges: [
      { i: ShieldCheck, t: "Certyfikat ISO 9001" },
      { i: Star, t: "4.9 / 5 · 640 opinii" },
      { i: Clock, t: "Wizyty także w soboty" },
    ],
    teamTitle: "Nasz zespół",
    team: [
      { n: "dr n. med. Anna Wróbel", s: "Stomatologia zachowawcza" },
      { n: "lek. dent. Piotr Kaczmarek", s: "Implantologia" },
      { n: "lek. dent. Marta Lis", s: "Ortodoncja" },
    ],
    treatments: [
      { n: "Przegląd + konsultacja", p: "150 zł", t: "30 min" },
      { n: "Higienizacja (skaling + piaskowanie)", p: "350 zł", t: "45 min" },
      { n: "Wybielanie nakładkowe", p: "1 200 zł", t: "60 min" },
      { n: "Leczenie próchnicy", p: "od 300 zł", t: "45 min" },
    ],
    bookingTitle: "Rezerwacja wizyty",
    bookingSub: "Wybierz zabieg, dzień i godzinę.",
    step1: "1. Zabieg",
    step2: "2. Dzień",
    step3: "3. Godzina",
    confirm: "Potwierdź rezerwację",
    bookedTitle: "Wizyta wstępnie zarezerwowana",
    bookedNote: "Prześlemy SMS z potwierdzeniem i przypomnieniem.",
    bookedAt: (treatment: string, day: string, sub: string, slot: string) =>
      `${treatment} — ${day} ${sub}, godz. ${slot}.`,
    pickAnother: "Wybierz inny termin",
    techTitle: "Technologia i sprzęt",
    techSub: "Nowoczesna diagnostyka oznacza mniej wizyt i dokładniejsze leczenie.",
    tech: [
      { icon: Scan, t: "Skaner wewnątrzustny 3D", d: "Cyfrowe wyciski bez masy silikonowej — szybciej i wygodniej." },
      { icon: Syringe, t: "Znieczulenie komputerowe", d: "Precyzyjne dawkowanie, minimalny dyskomfort podania." },
      { icon: Sparkle, t: "Laser stomatologiczny", d: "Zabiegi na dziąsłach bez szycia i dłuższego gojenia." },
    ],
    locationTitle: "Lokalizacja i dojazd",
    locationNote: "Klinika mieści się 5 minut pieszo od stacji metra Politechnika, z parkingiem podziemnym w budynku.",
    locationCta: "Wyznacz trasę",
    pricingTitle: "Cennik zabiegów",
    faqTitle: "Pytania pacjentów",
    faq: [
      { q: "Czy pierwsza wizyta boli?", a: "Pierwsza wizyta to bezbolesny przegląd i konsultacja. Leczenie planujemy na kolejny termin, zawsze w znieczuleniu." },
      { q: "Jak przygotować się do higienizacji?", a: "Nie wymaga przygotowania. Po zabiegu zalecamy 2 godziny bez kawy, herbaty i barwiących produktów." },
      { q: "Czy rozkładacie płatność na raty?", a: "Tak — leczenie powyżej 2 000 zł można rozłożyć na nieoprocentowane raty do 12 miesięcy." },
    ],
    reviewsTitle: "Opinie pacjentów",
    reviews: [
      {
        q: "Higienizacja bezbolesna, umówiona na tę samą godzinę co wcześniej ustalona. Miła atmosfera i konkretny plan leczenia bez naciągania na dodatkowe zabiegi.",
        n: "Magdalena R.",
        stars: 5,
      },
      {
        q: "Implant zaplanowany etapami, każdy krok wytłumaczony wcześniej razem z kosztem. Żadnych niespodzianek na fakturze.",
        n: "Tomasz K.",
        stars: 5,
      },
      {
        q: "Zabrałam dziecko na pierwszą wizytę — dr Wróbel podeszła do tego bardzo cierpliwie. Wracamy tu regularnie.",
        n: "Ilona P.",
        stars: 5,
      },
    ],
    footerAddress: "ul. Wiejska 12, Warszawa",
    footerHours: "Pon–Pt 8–20 · Sob 9–14",
    footerRegTitle: "Rejestracja",
    footerRegEmail: "rejestracja@auradental.pl",
    footerRights: "© 2026 Aura Dental Clinic. NIP 000-000-00-00.",
    footerRegistry: "Wpis do RPWDL nr 000000.",
    days: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  },
  en: {
    nav: ["Team", "Pricing", "Booking", "FAQ"],
    registrationLabel: "Front desk: 12 345 67 89",
    bookCta: "Book a visit",
    eyebrow: "Dental Clinic · Warsaw",
    h1a: "A calm visit.",
    h1b: "A healthy smile.",
    sub: "Gentle treatment, digital diagnostics and full cost transparency — in a warm, intimate space.",
    badges: [
      { i: ShieldCheck, t: "ISO 9001 Certified" },
      { i: Star, t: "4.9 / 5 · 640 reviews" },
      { i: Clock, t: "Saturday appointments available" },
    ],
    teamTitle: "Our team",
    team: [
      { n: "Dr. Anna Wróbel, DDS", s: "Restorative dentistry" },
      { n: "Dr. Piotr Kaczmarek, DDS", s: "Implantology" },
      { n: "Dr. Marta Lis, DDS", s: "Orthodontics" },
    ],
    treatments: [
      { n: "Check-up + consultation", p: "150 PLN", t: "30 min" },
      { n: "Hygiene treatment (scaling + polishing)", p: "350 PLN", t: "45 min" },
      { n: "Tray whitening", p: "1,200 PLN", t: "60 min" },
      { n: "Cavity treatment", p: "from 300 PLN", t: "45 min" },
    ],
    bookingTitle: "Book a visit",
    bookingSub: "Choose a treatment, day and time.",
    step1: "1. Treatment",
    step2: "2. Day",
    step3: "3. Time",
    confirm: "Confirm booking",
    bookedTitle: "Visit provisionally booked",
    bookedNote: "We'll send an SMS confirmation and reminder.",
    bookedAt: (treatment: string, day: string, sub: string, slot: string) =>
      `${treatment} — ${day} ${sub}, at ${slot}.`,
    pickAnother: "Choose another time",
    techTitle: "Technology & equipment",
    techSub: "Modern diagnostics mean fewer visits and more precise treatment.",
    tech: [
      { icon: Scan, t: "3D intraoral scanner", d: "Digital impressions with no silicone putty — faster and more comfortable." },
      { icon: Syringe, t: "Computer-controlled anesthesia", d: "Precise dosing, minimal discomfort on injection." },
      { icon: Sparkle, t: "Dental laser", d: "Gum treatments with no stitches and faster healing." },
    ],
    locationTitle: "Location & directions",
    locationNote: "The clinic is a 5-minute walk from Politechnika metro station, with underground parking in the building.",
    locationCta: "Get directions",
    pricingTitle: "Treatment price list",
    faqTitle: "Patient questions",
    faq: [
      { q: "Does the first visit hurt?", a: "The first visit is a painless check-up and consultation. Any treatment is scheduled for a follow-up appointment, always under anesthesia." },
      { q: "How do I prepare for a hygiene treatment?", a: "No preparation needed. Afterwards we recommend avoiding coffee, tea and staining foods for 2 hours." },
      { q: "Can I pay for treatment in installments?", a: "Yes — treatment over 2,000 PLN can be split into interest-free installments over up to 12 months." },
    ],
    reviewsTitle: "Patient reviews",
    reviews: [
      {
        q: "Painless hygiene treatment, booked for the exact time slot I wanted. Friendly atmosphere and a clear treatment plan with no upselling.",
        n: "Magdalena R.",
        stars: 5,
      },
      {
        q: "The implant was planned in stages, every step explained upfront along with the cost. No surprises on the invoice.",
        n: "Tomasz K.",
        stars: 5,
      },
      {
        q: "I brought my child in for their first visit — Dr. Wróbel was extremely patient with them. We keep coming back.",
        n: "Ilona P.",
        stars: 5,
      },
    ],
    footerAddress: "12 Wiejska St, Warsaw",
    footerHours: "Mon–Fri 8am–8pm · Sat 9am–2pm",
    footerRegTitle: "Front desk",
    footerRegEmail: "frontdesk@auradental.pl",
    footerRights: "© 2026 Aura Dental Clinic. Tax ID 000-000-00-00.",
    footerRegistry: "Registered under license no. 000000.",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
};

function nextDays(count: number, dayNames: string[]) {
  const out: { label: string; sub: string }[] = [];
  const d = new Date("2026-09-14");
  for (let i = 0; i < count; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i);
    out.push({ label: dayNames[x.getDay()], sub: `${x.getDate()}.${x.getMonth() + 1}` });
  }
  return out;
}

export default function AuraDentalDemo() {
  const t = useT(COPY);
  const topBarIndustry = useT(TOPBAR_INDUSTRY);
  const days = nextDays(7, t.days);
  const [treatment, setTreatment] = useState(t.treatments[1].n);
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3B3A36]" style={{ fontFamily: SANS }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={FONTS} />
      <DemoTopBar industry={topBarIndustry} />

      {/* Header */}
      <header className="border-b border-[#E6DECF] bg-[#FAF7F2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-2xl tracking-tight text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>
            Aura<span className="text-[#7A9174]"> Dental</span>
          </span>
          <nav className="hidden gap-8 md:flex">
            {t.nav.map((n, i) => (
              <a key={n} href={NAV_HREFS[i]} className="text-sm font-semibold text-[#6B6A63] hover:text-[#2F3B32]">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+48123456789" className="hidden items-center gap-2 text-sm font-bold text-[#2F3B32] sm:flex">
              <Phone className="h-4 w-4 text-[#7A9174]" /> {t.registrationLabel}
            </a>
            <a href="#rezerwacja" className="rounded-full bg-[#7A9174] px-5 py-2 text-sm font-bold text-white hover:bg-[#6b8265]">
              {t.bookCta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A9174]">{t.eyebrow}</span>
            <h1 className="mt-5 text-5xl leading-[1.1] text-[#2F3B32] md:text-6xl" style={{ fontFamily: SERIF, fontWeight: 700 }}>
              {t.h1a}<br />
              <span className="italic text-[#7A9174]">{t.h1b}</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-[#6B6A63]">{t.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.badges.map(({ i: Icon, t: label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[#E6DECF] bg-white px-4 py-2 text-sm font-semibold text-[#4A4A44]">
                  <Icon className="h-4 w-4 text-[#7A9174]" /> {label}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#E6DECF] bg-white p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#9A9890]">{t.teamTitle}</div>
            <div className="mt-4 space-y-4">
              {t.team.map((m) => (
                <div key={m.n} className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#DDE7D9] to-[#EDE4D3]" />
                  <div>
                    <div className="text-sm font-bold text-[#2F3B32]">{m.n}</div>
                    <div className="text-xs text-[#6B6A63]">{m.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rezerwacja */}
      <section id="rezerwacja" className="px-6 py-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E6DECF] bg-white p-8 shadow-[0_20px_60px_-30px_rgba(90,80,60,.4)]">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>{t.bookingTitle}</h2>
          <p className="mt-1 text-[#6B6A63]">{t.bookingSub}</p>

          {!booked ? (
            <>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#9A9890]">{t.step1}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {t.treatments.map((tr) => (
                  <button key={tr.n} onClick={() => setTreatment(tr.n)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      treatment === tr.n ? "border-[#7A9174] bg-[#EEF2EB] text-[#3F5138]" : "border-[#E6DECF] text-[#6B6A63] hover:border-[#c9bfa9]"
                    }`}>
                    {tr.n}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#9A9890]">{t.step2}</p>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                {days.map((d, i) => (
                  <button key={i} onClick={() => setDay(i)}
                    className={`flex min-w-[64px] flex-col items-center rounded-xl border px-3 py-2 text-xs font-bold ${
                      day === i ? "border-[#7A9174] bg-[#7A9174] text-white" : "border-[#E6DECF] text-[#4A4A44]"
                    }`}>
                    <span>{d.label}</span>
                    <span className="text-[11px] opacity-80">{d.sub}</span>
                  </button>
                ))}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#9A9890]">{t.step3}</p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {SLOTS.map((s) => (
                  <button key={s} onClick={() => setSlot(s)}
                    className={`rounded-lg border px-2 py-2 text-sm font-bold ${
                      slot === s ? "border-[#7A9174] bg-[#7A9174] text-white" : "border-[#E6DECF] text-[#3B3A36] hover:border-[#7A9174]"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>

              <button disabled={!slot} onClick={() => setBooked(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7A9174] px-6 py-3 text-sm font-bold text-white disabled:opacity-40">
                <CalendarDays className="h-4 w-4" /> {t.confirm}
              </button>
            </>
          ) : (
            <div className="mt-6 rounded-2xl border border-[#CBD9C4] bg-[#EEF3EB] p-6">
              <div className="flex items-center gap-2 font-bold text-[#3F5138]">
                <Check className="h-5 w-5" /> {t.bookedTitle}
              </div>
              <p className="mt-2 text-sm text-[#4A4A44]">
                {t.bookedAt(treatment, days[day].label, days[day].sub, slot ?? "")} {t.bookedNote}
              </p>
              <button onClick={() => { setBooked(false); setSlot(null); }} className="mt-4 text-sm font-bold text-[#3F5138] underline">
                {t.pickAnother}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cennik */}
      {/* Technologia i sprzęt */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>{t.techTitle}</h2>
          <p className="mt-1 text-[#6B6A63]">{t.techSub}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.tech.map(({ icon: Icon, t: title, d }) => (
              <div key={title} className="rounded-2xl border border-[#E6DECF] bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#EEF2EB]">
                  <Icon className="h-5 w-5 text-[#7A9174]" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#2F3B32]">{title}</h3>
                <p className="mt-1.5 text-sm text-[#6B6A63]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokalizacja */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#E6DECF] bg-white p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>{t.locationTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6A63]">{t.locationNote}</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7A9174] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#6b8265]">
                <Navigation className="h-4 w-4" /> {t.locationCta}
              </a>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-[repeating-linear-gradient(135deg,#EEF2EB,#EEF2EB_12px,#F6F8F4_12px,#F6F8F4_24px)]" />
          </div>
        </div>
      </section>

      <section id="cennik" className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>{t.pricingTitle}</h2>
          <div className="mt-6 divide-y divide-[#E6DECF] overflow-hidden rounded-2xl border border-[#E6DECF] bg-white">
            {t.treatments.map((tr) => (
              <div key={tr.n} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-bold text-[#2F3B32]">{tr.n}</p>
                  <p className="text-xs text-[#9A9890]">{tr.t}</p>
                </div>
                <span className="text-sm font-bold text-[#7A9174]">{tr.p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>{t.faqTitle}</h2>
          <div className="mt-6 flex flex-col gap-3">
            {t.faq.map((item, i) => {
              const open = faq === i;
              return (
                <div key={item.q} className="rounded-2xl border border-[#E6DECF] bg-white">
                  <button onClick={() => setFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="font-bold text-[#2F3B32]">{item.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 text-[#7A9174] transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  {open && <p className="px-5 pb-4 text-sm leading-relaxed text-[#5A5951]">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opinie pacjentów */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>
            {t.reviewsTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.reviews.map((r) => (
              <div key={r.n} className="rounded-2xl border border-[#E6DECF] bg-white p-6">
                <div className="text-[#E0A93E]">{"★".repeat(r.stars)}</div>
                <p className="mt-3 text-sm leading-relaxed text-[#5A5951]">„{r.q}”</p>
                <div className="mt-4 border-t border-[#E6DECF] pt-3 text-sm font-bold text-[#2F3B32]">
                  {r.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-[#E6DECF] bg-[#F3EEE4] px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <span className="text-xl text-[#2F3B32]" style={{ fontFamily: SERIF, fontWeight: 700 }}>Aura Dental</span>
            <p className="mt-3 flex items-center gap-2 text-sm text-[#6B6A63]"><MapPin className="h-4 w-4 text-[#7A9174]" /> {t.footerAddress}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#6B6A63]"><Clock className="h-4 w-4 text-[#7A9174]" /> {t.footerHours}</p>
          </div>
          <div>
            <div className="text-sm font-bold text-[#2F3B32]">{t.footerRegTitle}</div>
            <a href="tel:+48123456789" className="mt-3 flex items-center gap-2 text-sm text-[#7A9174]"><Phone className="h-4 w-4" /> 12 345 67 89</a>
            <p className="mt-2 text-sm text-[#6B6A63]">{t.footerRegEmail}</p>
          </div>
          <p className="text-xs text-[#9A9890] md:text-right">
            {t.footerRights}<br />{t.footerRegistry}
          </p>
        </div>
      </footer>
    </div>
  );
}
