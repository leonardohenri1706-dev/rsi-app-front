"use client";

import { useTranslation } from "react-i18next";
import React from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("common");

  // Safety check
  if (!i18n) return null;

  const currentLocale = i18n.language || "pt-BR";
  const nextLocale = currentLocale === "pt-BR" ? "en" : "pt-BR";

  // Button shows the target language to switch TO, or the current state?
  // User asked for "English Version" as option.
  // If I am in PT, I show "English Version".
  // If I am in EN, I show "Versão em Português" (or "PT").

  const label = currentLocale === "pt-BR" ? "English Version" : "Versão em Português";

  function switchLanguage() {
    i18n.changeLanguage(nextLocale);
  }

  return (
    <button
      onClick={switchLanguage}
      className={`
        fixed top-4 right-4 z-[1000]
        bg-[#00c9aa] text-white font-bold
        px-5 py-2 rounded-full shadow-lg
        hover:bg-[#00b59a]
        transition-all active:scale-95
        border border-black/10
      `}
      aria-label={currentLocale === "pt-BR" ? "Switch to English" : "Mudar para Português"}
      title={currentLocale === "pt-BR" ? "Switch to English" : "Mudar para Português"}
    >
      {label} {currentLocale === "pt-BR" ? "(EN)" : "(PT)"}
    </button>
  );
}
