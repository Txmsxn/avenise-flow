"use client";

import { ArrowRight } from "lucide-react";
import { ProjectPreview } from "@/components/sections/ProjectPreview";
import { useT } from "@/lib/language";

const COPY = {
  pl: {
    badge: "Nie wierz na słowo — kliknij i przetestuj demo",
    h1Start: "Łączę precyzyjny kod z designem, który",
    h1Accent: "generuje klientów",
    sub: "Projektuję i wdrażam dedykowane strony firmowe oraz narzędzia www — pisane od zera, pod konkretny cel biznesowy. Bez gotowych szablonów i tanich wizytówek.",
    ctaPrimary: "Rozpocznij Projekt",
    ctaSecondary: "Zobacz Case Study",
  },
  en: {
    badge: "Don't take my word for it — click and try the demo",
    h1Start: "I combine precise code with design that",
    h1Accent: "generates customers",
    sub: "I design and build dedicated business websites and web tools — coded from scratch, for a specific business goal. No off-the-shelf templates, no cheap business cards.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "See Case Study",
  },
};

export function Hero() {
  const t = useT(COPY);

  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44 md:pb-28">
      {/* Asymmetric ambient glow — pojedyncze światło po prawej */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.16),rgba(108,92,231,0.08)_45%,transparent_70%)] blur-2xl"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-slate-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D2FF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D2FF]" />
          </span>
          {t.badge}
        </span>

        {/* H1 */}
        <h1 className="mt-6 text-balance text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t.h1Start}{" "}
          <span className="inline bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
            {t.h1Accent}
          </span>
          .
        </h1>

        {/* Podnagłówek */}
        <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-slate-300 md:text-lg">
          {t.sub}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#kontakt" className="btn-outline-glow group">
            {t.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a href="#portfolio" className="btn-quiet">
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Pływająca karta z podglądem projektu */}
      <div className="relative mx-auto mt-14 max-w-5xl md:mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-10 -top-6 -z-10 h-40 rounded-full bg-[#00D2FF]/10 blur-3xl"
        />
        <ProjectPreview />
      </div>
    </section>
  );
}
