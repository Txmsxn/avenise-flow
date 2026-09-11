"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

/**
 * Nawigacja i stopka głównego serwisu — ukrywane na podstronach demo,
 * które mają własny, przyklejony pasek (DemoTopBar). Przełącznik języka
 * dotyczy tylko strony głównej — podstrony demo są wyłącznie po polsku.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith("/demo") ?? false;

  return (
    <>
      {!isDemo && <Navbar />}
      <main>{children}</main>
      {!isDemo && <Footer />}
      {!isDemo && <LanguageSwitch />}
    </>
  );
}
