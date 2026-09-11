"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "pl" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "af-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pl");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "pl" || saved === "en") setLangState(saved);
    } catch {
      // localStorage niedostępny (np. tryb prywatny) — zostajemy przy PL
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignoruj — ustawienie działa tylko w bieżącej sesji
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage musi być użyty wewnątrz <LanguageProvider>");
  }
  return ctx;
}

/** Pomocnik: wybiera wersję PL/EN z obiektu { pl, en }. */
export function useT<T>(dict: Record<Lang, T>): T {
  const { lang } = useLanguage();
  return dict[lang];
}
