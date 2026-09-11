"use client";

import { Gauge, ShieldCheck, Copyright, ArrowUpRight } from "lucide-react";
import { useT } from "@/lib/language";

const COPY = {
  pl: {
    eyebrow: "Standardy & Gwarancje",
    title: "Quality, które dostajesz w każdym projekcie.",
    description: "Konkretne zobowiązania, nie hasła marketingowe — spisane i wpisane w każdą umowę.",
    cards: [
      {
        icon: Gauge,
        title: "PageSpeed 98/100 — sprawdź sam",
        description:
          "Nie obiecuję „szybką stronę” w ciemno. furmanreps.pl, mój realny projekt, ładuje się w ułamku sekundy — możesz to zmierzyć w PageSpeed Insights własnoręcznie.",
        href: "https://furmanreps.pl",
        linkLabel: "Zobacz furmanreps.pl",
      },
      {
        icon: ShieldCheck,
        title: "Czysty i Bezpieczny Kod",
        description: "Brak podatnych na ataki hakerskie wtyczek oraz ociężałych szablonów znanych z WordPressa.",
      },
      {
        icon: Copyright,
        title: "100% Praw Autorskich",
        description: "Brak ukrytych opłat abonamentowych za sam kod. Strona jest na zawsze Twoją własnością.",
      },
    ],
  },
  en: {
    eyebrow: "Standards & Guarantees",
    title: "The quality you get in every project.",
    description: "Concrete commitments, not marketing slogans — written into every contract.",
    cards: [
      {
        icon: Gauge,
        title: "PageSpeed 98/100 — see for yourself",
        description:
          "I don't promise a \"fast website\" on faith. furmanreps.pl, my real production project, loads in a fraction of a second — measure it yourself in PageSpeed Insights.",
        href: "https://furmanreps.pl",
        linkLabel: "View furmanreps.pl",
      },
      {
        icon: ShieldCheck,
        title: "Clean, Secure Code",
        description: "No plugins vulnerable to hacking, no heavy templates known from WordPress.",
      },
      {
        icon: Copyright,
        title: "100% Copyright Ownership",
        description: "No hidden subscription fees for the code itself. The site is permanently your own property.",
      },
    ],
  },
};

export function Guarantees() {
  const t = useT(COPY);
  return (
    <section id="dlaczego-my" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          {t.eyebrow}
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          {t.title}
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">{t.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {t.cards.map(({ icon: Icon, title, description, href, linkLabel }) => (
          <div key={title} className="group relative rounded-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative flex h-full flex-col rounded-2xl border border-white/[0.05] bg-[#121723] p-7 transition-colors duration-300 group-hover:border-white/[0.12]">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                <Icon className="h-6 w-6 text-[#00D2FF]" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#00D2FF] hover:text-white"
                >
                  {linkLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
