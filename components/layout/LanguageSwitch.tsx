"use client";

import { useState } from "react";
import { Settings, Check } from "lucide-react";
import { useLanguage } from "@/lib/language";

const OPTIONS = [
  { code: "pl" as const, flag: "🇵🇱", label: "Polski" },
  { code: "en" as const, flag: "🇬🇧", label: "English" },
];

/** Pływające ustawienia języka — lewy dolny róg, widoczne na całej stronie głównej. */
export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-[70]">
      {open && (
        <div
          role="menu"
          className="mb-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#121723]/95 p-1.5 shadow-2xl backdrop-blur-xl"
        >
          <p className="px-3 pb-1.5 pt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {lang === "pl" ? "Język strony" : "Site language"}
          </p>
          {OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              role="menuitemradio"
              aria-checked={lang === opt.code}
              onClick={() => {
                setLang(opt.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                lang === opt.code
                  ? "bg-white/[0.08] text-white"
                  : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden>{opt.flag}</span>
                {opt.label}
              </span>
              {lang === opt.code && <Check className="h-4 w-4 text-[#00D2FF]" />}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        aria-label={lang === "pl" ? "Ustawienia języka" : "Language settings"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#121723]/90 text-slate-300 shadow-lg backdrop-blur-xl transition-colors hover:border-[#00D2FF]/40 hover:text-white"
      >
        <Settings className="h-5 w-5" />
      </button>
    </div>
  );
}
