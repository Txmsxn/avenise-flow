"use client";

import { TECHNOLOGIES } from "@/lib/constants";
import { useT } from "@/lib/language";

const COPY = {
  pl: "Technologie, w których pracuję na co dzień",
  en: "Technologies I work with every day",
};

export function Technologies() {
  const label = useT(COPY);
  return (
    <section className="section !py-16">
      <p className="mb-8 text-center text-xs uppercase tracking-widest text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {TECHNOLOGIES.map((tech) => (
          <span
            key={tech}
            className="glass rounded-full px-5 py-2 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
