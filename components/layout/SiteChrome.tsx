"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Nawigacja i stopka głównego serwisu — ukrywane na podstronach demo,
 * które mają własny, przyklejony pasek (DemoTopBar).
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith("/demo") ?? false;

  return (
    <>
      {!isDemo && <Navbar />}
      <main>{children}</main>
      {!isDemo && <Footer />}
    </>
  );
}
