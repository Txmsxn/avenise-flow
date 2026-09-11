"use client";

import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useT } from "@/lib/language";

const COPY = {
  pl: {
    title: "Gotowy na stronę, która realnie pracuje na klientów?",
    description:
      "Napisz kilka słów o swoim projekcie przez formularz kontaktowy. Wrócę z propozycją zakresu i wyceną w ciągu 24 godzin.",
    cta: "Wypełnij formularz",
  },
  en: {
    title: "Ready for a website that actually works for your customers?",
    description:
      "Write a few words about your project through the contact form. I'll get back to you with a scope and quote within 24 hours.",
    cta: "Fill out the form",
  },
};

export function CTA() {
  const t = useT(COPY);
  return (
    <section className="section">
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#121723]/60 px-8 py-16 text-center backdrop-blur-xl md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#00D2FF]/15 blur-[120px]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#kontakt" className="btn-outline-glow group">
              {t.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn-quiet">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
