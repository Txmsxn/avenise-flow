"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const ITEMS = [
  {
    q: "Ile kosztuje dedykowana strona w AveniseFlow?",
    a: "Ceny pełnych stron firmowych pisanych w czystym kodzie (Next.js/Tailwind) zaczynają się od 800 zł. Nie tworzymy masowych, powolnych wizytówek – każdy projekt jest kodowany indywidualnie pod kątem szybkości i konwersji klientów.",
  },
  {
    q: "Dlaczego warto wybrać dedykowany kod zamiast tradycyjnego WordPressa?",
    a: "Strony pisane w Next.js ładują się natychmiastowo, są w 100% bezpieczne (brak podatnych na ataki wtyczek) i idealnie wyglądają na telefonach, co bezpośrednio przekłada się na lepsze wyniki w Google.",
  },
  {
    q: "Jak wygląda proces realizacji od pierwszego kontaktu?",
    a: "Zaczynamy od rozmowy i wypełnienia briefu. Następnie: warsztat i strategia, projekt UI/UX (makiety + prototyp do akceptacji), development w Next.js, testy, a na końcu wdrożenie i szkolenie z obsługi. Na każdym etapie masz wgląd w postępy i punkty decyzyjne.",
  },
  {
    q: "Czy przekazujesz pełne prawa autorskie do kodu i projektów?",
    a: "Tak. Po rozliczeniu projektu przekazujemy pełne majątkowe prawa autorskie do kodu oraz plików projektowych (Figma). Repozytorium i wszystkie źródła trafiają do Ciebie — nie ma vendor lock-inu.",
  },
  {
    q: "Czy pomagasz w doborze i podpięciu domeny oraz hostingu?",
    a: "Tak. Doradzamy w wyborze domeny, konfigurujemy DNS i wdrażamy stronę na wydajnym hostingu klasy premium — z globalnym CDN, certyfikatem SSL i automatycznymi kopiami zapasowymi. Możesz zostać przy swoim dostawcy albo przekazać nam pełną opiekę techniczną.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          FAQ
        </span>
        <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Najczęstsze pytania
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="rounded-2xl border border-white/[0.06] bg-[#121723]/60 backdrop-blur-md transition-colors duration-300 hover:border-white/[0.12]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">{item.q}</span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-[#00D2FF] transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
