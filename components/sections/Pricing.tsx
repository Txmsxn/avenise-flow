import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section id="cennik" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D2FF]">
          Cennik
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Przejrzyste widełki, bez ukrytych kosztów.
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">
          Orientacyjne przedziały. Ostateczną wycenę ustalamy po krótkiej
          rozmowie i analizie zakresu.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
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
                  Najczęściej wybierany
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
                Zapytaj o wycenę
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
