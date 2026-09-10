import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="mx-auto mt-10 w-full max-w-5xl px-6">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-3">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 bg-[#0A0D14]/70 px-6 py-8 text-center backdrop-blur-sm"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
              <Icon className="h-5 w-5 text-[#00D2FF]" />
            </span>
            <p className="font-display text-2xl font-bold text-white">{value}</p>
            <p className="text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
