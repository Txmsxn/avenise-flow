import { Gauge, ShieldCheck, Copyright } from "lucide-react";

const CARDS = [
  {
    icon: Gauge,
    title: "Gwarancja Szybkości (PageSpeed 90+)",
    description:
      "Strona ładuje się w ułamku sekundy na telefonach i komputerach, co poprawia pozycjonowanie w Google.",
  },
  {
    icon: ShieldCheck,
    title: "Czysty i Bezpieczny Kod",
    description:
      "Brak podatnych na ataki hakerskie wtyczek oraz ociężałych szablonów znanych z WordPressa.",
  },
  {
    icon: Copyright,
    title: "100% Praw Autorskich",
    description:
      "Brak ukrytych opłat abonamentowych za sam kod. Strona jest na zawsze Twoją własnością.",
  },
];

export function Guarantees() {
  return (
    <section id="dlaczego-my" className="section">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D2FF]">
          Standardy &amp; Gwarancje
        </span>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Quality, które dostajesz w każdym projekcie.
        </h2>
        <p className="max-w-xl font-semibold text-slate-300 md:text-lg">
          Konkretne zobowiązania, nie hasła marketingowe — spisane i wpisane
          w każdą umowę.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative rounded-2xl"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative flex h-full flex-col rounded-2xl border border-white/[0.05] bg-[#121723] p-7 transition-colors duration-300 group-hover:border-white/[0.12]">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                <Icon className="h-6 w-6 text-[#00D2FF]" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
