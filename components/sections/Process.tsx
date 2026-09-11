"use client";

import { ClipboardList, MonitorPlay, Code2, Rocket } from "lucide-react";
import { useT } from "@/lib/language";

const COPY = {
  pl: {
    eyebrow: "Proces",
    title: "Przejrzysta współpraca w 4 krokach.",
    description:
      "Wiesz, co dzieje się na każdym etapie — od pierwszej rozmowy po przekazanie gotowej strony i praw do kodu.",
    steps: [
      {
        icon: ClipboardList,
        step: "01",
        title: "Krótki Brief & Analiza",
        description: "Rozmawiamy o celach Twojego biznesu, a ja ustalam zakres funkcjonalności strony.",
      },
      {
        icon: MonitorPlay,
        step: "02",
        title: "Projekt & Interaktywne Demo",
        description: "Tworzę wstępny widok strony, dzięki czemu widzisz i testujesz projekt przed wdrożeniem.",
      },
      {
        icon: Code2,
        step: "03",
        title: "Kodowanie & Testy",
        description: "Piszę czysty kod w Next.js / Tailwind CSS, dbając o bezpieczeństwo i błyskawiczne ładowanie.",
      },
      {
        icon: Rocket,
        step: "04",
        title: "Wdrożenie & Prawa Autorskie",
        description: "Podpinam stronę pod Twoją domenę i przekazuję pełne majątkowe prawa autorskie do kodu.",
      },
    ],
  },
  en: {
    eyebrow: "Process",
    title: "A transparent process in 4 steps.",
    description:
      "You know what's happening at every stage — from the first conversation to handing over the finished site and code rights.",
    steps: [
      {
        icon: ClipboardList,
        step: "01",
        title: "Brief & Analysis",
        description: "We talk about your business goals, and I define the site's feature scope.",
      },
      {
        icon: MonitorPlay,
        step: "02",
        title: "Design & Interactive Demo",
        description: "I build an early preview of the site, so you can see and test the project before it goes live.",
      },
      {
        icon: Code2,
        step: "03",
        title: "Coding & Testing",
        description: "I write clean code in Next.js / Tailwind CSS, focused on security and lightning-fast loading.",
      },
      {
        icon: Rocket,
        step: "04",
        title: "Deployment & Copyright",
        description: "I connect the site to your domain and transfer full copyright to the code.",
      },
    ],
  },
};

export function Process() {
  const t = useT(COPY);
  return (
    <section id="proces" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          {t.eyebrow}
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          {t.title}
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">{t.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {t.steps.map(({ icon: Icon, step, title, description }) => (
          <div
            key={step}
            className="group relative flex flex-col rounded-2xl border border-white/[0.05] bg-[#121723]/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/[0.12]"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                <Icon className="h-5 w-5 text-[#00D2FF]" />
              </span>
              <span className="font-mono text-2xl font-bold text-white/10">
                {step}
              </span>
            </div>
            <h3 className="mt-5 text-base font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
