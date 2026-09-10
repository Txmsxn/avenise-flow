import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { CONTACT } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const SOCIALS = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        {/* Marka */}
        <div>
          <Link href="#" aria-label="AVENISE FLOW" className="flex items-center gap-3">
            <LogoMark className="h-8 w-auto" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Avenise <span className="text-[#00D2FF]">Flow</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            AveniseFlow — Studio kreacji cyfrowej i nowoczesnych stron www.
          </p>
        </div>

        {/* Szybkie linki */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Nawigacja
          </h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Kontakt
          </h4>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#00D2FF]" />
            {CONTACT.email}
          </a>
          <div className="mt-4 flex gap-2.5">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-slate-400 transition-colors hover:border-[#00D2FF]/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Dolny pasek */}
      <div className="border-t border-white/[0.06]">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-slate-500 md:text-left">
          © 2026 AveniseFlow. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
