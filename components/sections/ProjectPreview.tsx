/**
 * Pływająca, szklana karta z podglądem projektu:
 * po lewej fragment kodu, po prawej wyrenderowany podgląd strony klienta.
 */
export function ProjectPreview() {
  return (
    <div className="animate-float rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-2xl backdrop-blur-xl">
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0B0E15]">
        {/* Pasek okna */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF]" />
            aveniseflow.dev / preview
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Kod — component React/Next.js + Tailwind */}
          <div className="hidden border-r border-white/[0.06] p-5 font-mono text-[12px] leading-6 md:block">
            <CodeLine n={1}>
              <span className="text-[#6C5CE7]">import</span>{" "}
              <span className="text-slate-300">{"{ ArrowRight }"}</span>{" "}
              <span className="text-[#6C5CE7]">from</span>{" "}
              <span className="text-emerald-300">&quot;lucide-react&quot;</span>;
            </CodeLine>
            <CodeLine n={2}> </CodeLine>
            <CodeLine n={3}>
              <span className="text-[#6C5CE7]">export function</span>{" "}
              <span className="text-[#00D2FF]">Hero</span>({"{"}{" "}
              <span className="text-slate-300">title</span>,{" "}
              <span className="text-slate-300">cta</span>{" "}
              {"}: HeroProps) {"}
            </CodeLine>
            <CodeLine n={4}>
              {"  "}
              <span className="text-[#6C5CE7]">return</span> (
            </CodeLine>
            <CodeLine n={5}>
              {"    "}
              <span className="text-slate-500">&lt;section</span>{" "}
              <span className="text-[#00D2FF]">className</span>=
              <span className="text-emerald-300">
                &quot;mx-auto max-w-5xl px-6 py-24&quot;
              </span>
              <span className="text-slate-500">&gt;</span>
            </CodeLine>
            <CodeLine n={6}>
              {"      "}
              <span className="text-slate-500">&lt;h1</span>{" "}
              <span className="text-[#00D2FF]">className</span>=
              <span className="text-emerald-300">
                &quot;text-5xl font-extrabold&quot;
              </span>
              <span className="text-slate-500">&gt;</span>
            </CodeLine>
            <CodeLine n={7}>
              {"        "}
              <span className="text-slate-300">{"{title}"}</span>
            </CodeLine>
            <CodeLine n={8}>
              {"      "}
              <span className="text-slate-500">&lt;/h1&gt;</span>
            </CodeLine>
            <CodeLine n={9}>
              {"      "}
              <span className="text-slate-500">&lt;a</span>{" "}
              <span className="text-[#00D2FF]">href</span>=
              <span className="text-slate-300">{"{cta.href}"}</span>{" "}
              <span className="text-[#00D2FF]">className</span>=
              <span className="text-emerald-300">&quot;btn-primary&quot;</span>
              <span className="text-slate-500">&gt;</span>
            </CodeLine>
            <CodeLine n={10}>
              {"        "}
              <span className="text-slate-300">{"{cta.label}"}</span>{" "}
              <span className="text-slate-500">&lt;ArrowRight </span>
              <span className="text-slate-500">/&gt;</span>
            </CodeLine>
            <CodeLine n={11}>
              {"      "}
              <span className="text-slate-500">&lt;/a&gt;</span>
            </CodeLine>
            <CodeLine n={12}>
              {"    "}
              <span className="text-slate-500">&lt;/section&gt;</span>
            </CodeLine>
            <CodeLine n={13}>
              {"  "});
            </CodeLine>
            <CodeLine n={14}>{"}"}</CodeLine>
          </div>

          {/* Podgląd */}
          <div className="relative flex flex-col justify-center gap-4 p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full bg-[#6C5CE7]/20 blur-2xl"
            />
            <span className="text-xs uppercase tracking-widest text-slate-500">
              Case study
            </span>
            <p className="text-xl font-semibold leading-snug text-white">
              Twoja marka.{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                Więcej klientów.
              </span>
            </p>
            <p className="text-sm text-slate-400">
              Redesign + wdrożenie w 3 tygodnie. PageSpeed 98/100.
            </p>
            <div className="mt-1 flex gap-2">
              <span className="rounded-full bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] px-4 py-1.5 text-xs font-semibold text-white">
                Zobacz projekt
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-slate-300">
                +42% konwersji
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="w-4 shrink-0 select-none text-right text-slate-600">
        {n}
      </span>
      <span className="whitespace-pre text-slate-400">{children}</span>
    </div>
  );
}
