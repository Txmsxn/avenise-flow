import { ArrowRight, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const SCOPE_OPTIONS = [
  "Dedykowana Strona Firmowa (500–800 zł)",
  "Rozbudowany Serwis / Aplikacja Web (800–1400 zł)",
  "Identyfikacja Wizualna / Logo / Grafika (od 300 PLN)",
  "Inne rozwiązanie do uzgodnienia",
];

export function Contact() {
  return (
    <section id="kontakt" className="mx-auto w-full max-w-4xl px-6 py-24 md:py-32">
      <div className="rounded-3xl border border-white/[0.06] bg-[#121723]/60 p-8 backdrop-blur-xl md:p-12">
        <div className="mb-10 text-center">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
            Kontakt
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
            Zbudujmy coś wyjątkowego.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-400 md:text-base">
            Opisz krótko projekt. Odpowiadamy w ciągu 24 godzin z propozycją
            kolejnych kroków.
          </p>
        </div>

        <form className="mx-auto flex max-w-xl flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Imię / Nazwa firmy" placeholder="Jan Kowalski" />
            <Field name="email" type="email" label="E-mail" placeholder="jan@firma.pl" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="scope" className="text-xs text-slate-400">
              Zakres projektu
            </label>
            <select
              id="scope"
              name="scope"
              defaultValue=""
              required
              className="rounded-xl border border-white/[0.08] bg-[#07090E] px-4 py-3 text-sm text-white transition-colors focus:border-[#00D2FF]/50 focus:outline-none"
            >
              <option value="" disabled>
                Wybierz zakres…
              </option>
              {SCOPE_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs text-slate-400">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Czego potrzebujesz? Jaki jest cel i termin?"
              className="rounded-xl border border-white/[0.08] bg-[#07090E] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-[#00D2FF]/50 focus:outline-none"
            />
          </div>

          <button type="submit" className="btn-outline-glow group mt-2 self-start">
            Wyślij zapytanie
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </form>

        <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-white/[0.06] pt-6 text-sm text-slate-400">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#00D2FF]" />
            {CONTACT.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#00D2FF]" />
            {CONTACT.city}
          </span>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs text-slate-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-white/[0.08] bg-[#07090E] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-[#00D2FF]/50 focus:outline-none"
      />
    </div>
  );
}
