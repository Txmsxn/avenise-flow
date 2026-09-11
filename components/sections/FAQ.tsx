"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/language";

const COPY = {
  pl: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
    items: [
      {
        q: "Ile kosztuje dedykowana strona w AveniseFlow?",
        a: "Ceny pełnych stron firmowych pisanych w czystym kodzie (Next.js/Tailwind) zaczynają się od 500 zł. Nie tworzę masowych, powolnych wizytówek – każdy projekt koduję indywidualnie pod kątem szybkości i konwersji klientów.",
      },
      {
        q: "Dlaczego warto wybrać dedykowany kod zamiast tradycyjnego WordPressa?",
        a: "Strony pisane w Next.js ładują się natychmiastowo, są w 100% bezpieczne (brak podatnych na ataki wtyczek) i idealnie wyglądają na telefonach, co bezpośrednio przekłada się na lepsze wyniki w Google.",
      },
      {
        q: "Jak wygląda proces realizacji od pierwszego kontaktu?",
        a: "Zaczynam od rozmowy i briefu. Następnie: strategia, projekt UI/UX (makiety + prototyp do akceptacji), development w Next.js, testy, a na końcu wdrożenie i szkolenie z obsługi. Na każdym etapie masz wgląd w postępy i punkty decyzyjne.",
      },
      {
        q: "Czy przekazujesz pełne prawa autorskie do kodu i projektów?",
        a: "Tak. Po rozliczeniu projektu przekazuję pełne majątkowe prawa autorskie do kodu oraz plików projektowych (Figma). Repozytorium i wszystkie źródła trafiają do Ciebie — nie ma vendor lock-inu.",
      },
      {
        q: "Czy pomagasz w doborze i podpięciu domeny oraz hostingu?",
        a: "Tak. Doradzam w wyborze domeny, konfiguruję DNS i wdrażam stronę na wydajnym hostingu klasy premium — z globalnym CDN, certyfikatem SSL i automatycznymi kopiami zapasowymi. Możesz zostać przy swoim dostawcy albo przekazać mi pełną opiekę techniczną.",
      },
      {
        q: "Dlaczego w portfolio są demo, a nie same realizacje?",
        a: "furmanreps.pl to mój realny, działający projekt komercyjny. Pozostałe 5 to w pełni funkcjonalne, interaktywne demo branżowe — buduję je, żebyś mógł przetestować dokładnie taki mechanizm (kalkulator, rezerwację, porównanie), zanim zlecisz mi analogiczny dla swojej branży.",
      },
    ],
  },
  en: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a dedicated website at AveniseFlow cost?",
        a: "Prices for full business websites written in clean code (Next.js/Tailwind) start at 500 PLN. I don't build mass-produced, slow business-card sites – every project is coded individually with speed and client conversion in mind.",
      },
      {
        q: "Why choose dedicated code instead of traditional WordPress?",
        a: "Sites built in Next.js load instantly, are 100% secure (no plugins vulnerable to attacks), and look great on phones — which directly translates into better results in Google.",
      },
      {
        q: "What does the process look like from first contact?",
        a: "I start with a call and a brief. Then: strategy, UI/UX design (wireframes + prototype for approval), development in Next.js, testing, and finally deployment and a handover walkthrough. You have visibility into progress and decision points at every stage.",
      },
      {
        q: "Do you transfer full copyright to the code and designs?",
        a: "Yes. Once the project is settled, I transfer full copyright to the code and design files (Figma). The repository and all source files go to you — no vendor lock-in.",
      },
      {
        q: "Do you help with choosing and connecting a domain and hosting?",
        a: "Yes. I advise on choosing a domain, configure DNS, and deploy the site on premium-grade hosting — with a global CDN, SSL certificate, and automatic backups. You can stay with your own provider, or hand me the full technical care.",
      },
      {
        q: "Why does the portfolio show demos instead of only real projects?",
        a: "furmanreps.pl is my real, live commercial project. The other 5 are fully functional, interactive industry demos — I build them so you can test the exact mechanism (a calculator, a booking flow, a comparison) before commissioning a similar one for your own industry.",
      },
    ],
  },
};

export function FAQ() {
  const t = useT(COPY);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
          {t.eyebrow}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          {t.title}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {t.items.map((item, i) => {
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
