import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AveniseFlow — Tworzenie stron WWW i projektowanie UI/UX",
  description:
    "AveniseFlow — projektuję i koduję dedykowane strony internetowe, narzędzia www oraz identyfikację wizualną i UI/UX. Tworzę cyfrowe produkty, które konwertują.",
  keywords: [
    "strony internetowe",
    "tworzenie stron www",
    "projektowanie UI/UX",
    "dedykowane strony firmowe",
    "Next.js",
  ],
  openGraph: {
    title: "AveniseFlow — dedykowane strony i UI/UX",
    description:
      "Projektuję i koduję nowoczesne strony internetowe oraz identyfikację wizualną i UI/UX.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={jakarta.variable}>
      <body className="min-h-screen font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
