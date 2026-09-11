"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/language";

const NAV_LINKS = {
  pl: [
    { label: "Usługi", href: "#uslugi" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Dlaczego My", href: "#dlaczego-my" },
    { label: "FAQ", href: "#faq" },
  ],
  en: [
    { label: "Services", href: "#uslugi" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Me", href: "#dlaczego-my" },
    { label: "FAQ", href: "#faq" },
  ],
};

const CTA = { pl: "Darmowa Wycena", en: "Free Quote" };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = useT(NAV_LINKS);
  const cta = useT(CTA);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-[#07090E]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="#" aria-label="AVENISE FLOW — strona główna" className="flex items-center">
          <Logo className="h-7 sm:h-8" />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#kontakt" className="btn-outline-glow hidden !py-2.5 !text-[13px] md:inline-flex">
          {cta}
        </Link>

        <button
          type="button"
          aria-label="Menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#07090E]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="btn-outline-glow mt-3"
            >
              {cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
