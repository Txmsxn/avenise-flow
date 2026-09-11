"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/language";

const COPY = {
  pl: {
    eyebrow: "Cennik",
    title: "Przejrzyste widełki, bez ukrytych kosztów.",
    description: "Orientacyjne przedziały. Ostateczną wycenę ustalamy po krótkiej rozmowie i analizie zakresu.",
    highlightedTag: "Najczęściej wybierany",
    cta: "Zapytaj o wycenę",
    plans: [
      {
        name: "Strona Firmowa",
        price: "500 – 800 zł",
        description: "Dedykowana, szybka strona dla biznesu w czystym kodzie.",
        features: [
          "Nowoczesny stack (Next.js / Tailwind CSS)",
          "100% Responsywność (RWD)",
          "Optymalizacja szybkości (PageSpeed 90+)",
          "Podstawowe SEO & Analityka",
          "Formularz kontaktowy",
        ],
        highlighted: true,
      },
      {
        name: "Serwis & Aplikacja Web",
        price: "800 – 1 400 zł",
        description: "Rozbudowane systemy, bazy danych i dedykowane narzędzia.",
        features: [
          "Wszystko co w Stronie Firmowej",
          "Dedykowane moduły i kalkulatory",
          "Dynamiczne bazy danych / API",
          "Zaawansowana analityka i filtrowanie",
          "Pełne skalowanie i wsparcie",
        ],
        highlighted: false,
      },
      {
        name: "Optymalizacja & Kod",
        price: "Wycena indywidualna",
        description: "Przepisanie wolnej strony na Next.js lub dedykowane skrypty.",
        features: [
          "Audyt i przyspieszenie istniejącej strony",
          "Usuwanie powolnych wtyczek WordPress",
          "Dedykowane skrypty i konwertery",
          "Bezpieczeństwo i czyszczenie kodu",
        ],
        highlighted: false,
      },
    ],
  },
  en: {
    eyebrow: "Pricing",
    title: "Transparent ranges, no hidden costs.",
    description: "Ballpark ranges. The final quote is set after a short call and scoping the project.",
    highlightedTag: "Most popular",
    cta: "Ask for a quote",
    plans: [
      {
        name: "Business Website",
        price: "500 – 800 PLN",
        description: "A dedicated, fast website for your business in clean code.",
        features: [
          "Modern stack (Next.js / Tailwind CSS)",
          "100% Responsive (mobile-friendly)",
          "Speed optimization (PageSpeed 90+)",
          "Basic SEO & Analytics",
          "Contact form",
        ],
        highlighted: true,
      },
      {
        name: "Web Service & App",
        price: "800 – 1,400 PLN",
        description: "Larger systems, databases and custom tools.",
        features: [
          "Everything in Business Website",
          "Custom modules and calculators",
          "Dynamic databases / API",
          "Advanced analytics and filtering",
          "Full scaling and support",
        ],
        highlighted: false,
      },
      {
        name: "Optimization & Code",
        price: "Custom quote",
        description: "Rebuilding a slow website in Next.js, or custom scripts.",
        features: [
          "Audit and speed-up of an existing site",
          "Removing slow WordPress plugins",
          "Custom scripts and converters",
          "Security and code cleanup",
        ],
        highlighted: false,
      },
    ],
  },
};

export function Pricing() {
  const t = useT(COPY);
  return (
    <section id="cennik" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          {t.eyebrow}
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          {t.title}
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">{t.description}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {t.plans.map((plan) => (
          <div key={plan.name} className="group relative rounded-2xl">
            {/* Gradientowy border przy hover / dla wyróżnionego */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] blur-[2px] transition-opacity duration-300",
                plan.highlighted
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100",
              )}
            />
            <div className="relative flex h-full flex-col rounded-2xl border border-white/[0.05] bg-[#121723] p-8">
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] px-3 py-1 text-xs font-semibold text-white">
                  {t.highlightedTag}
                </span>
              )}

              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

              <p className="mt-6 text-2xl font-bold text-white md:text-[1.75rem]">
                {plan.price}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00D2FF]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={cn(
                  "mt-8 text-center",
                  plan.highlighted ? "btn-outline-glow" : "btn-quiet",
                )}
              >
                {t.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
