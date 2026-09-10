import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Opinie"
        title={
          <>
            Co mówią <span className="text-gradient">klienci</span>
          </>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <GlassCard key={t.name} className="flex flex-col">
            <Quote className="h-7 w-7 text-accent-violet" />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
              „{t.quote}”
            </p>
            <div className="mt-6 border-t border-glass pt-4">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
