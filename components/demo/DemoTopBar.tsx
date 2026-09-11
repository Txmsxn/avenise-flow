"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useT } from "@/lib/language";

const COPY = {
  pl: { intro: "To jest wersja demonstracyjna", by: "stworzona przez", back: "Powrót do agencji" },
  en: { intro: "This is a demo version of a", by: "built by", back: "Back to the agency" },
};

/**
 * Jedyne nawiązanie do agencji na autonomicznej podstronie demo.
 * Neutralny wizualnie, pasek nad własnym headerem firmy. Bez własnego
 * `sticky` — strona-rodzic opina go razem z headerem w jednym sticky
 * kontenerze, żeby oba paski przewijały się (i pozostawały widoczne)
 * jako jedna całość.
 * Przełącza się razem z globalnym ustawieniem języka strony głównej.
 */
export function DemoTopBar({ industry }: { industry: string }) {
  const t = useT(COPY);
  return (
    <div className="w-full border-b border-white/10 bg-[#07090E] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[13px]">
        <span className="text-slate-300">
          {t.intro} <strong className="text-white">{industry}</strong> {t.by}{" "}
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text font-bold text-transparent">
            AveniseFlow
          </span>
        </span>
        <span className="hidden text-white/20 sm:inline">|</span>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-bold text-white underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t.back}
        </Link>
      </div>
    </div>
  );
}
