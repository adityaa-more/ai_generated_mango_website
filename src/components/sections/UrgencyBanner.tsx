"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function UrgencyBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-mango text-brown py-4 px-4 text-center font-bold text-sm md:text-lg tracking-wide shadow-inner">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <span className="text-2xl animate-bounce">⚠️</span>
        {t('urgency.banner')}
        <span className="text-2xl animate-bounce">⚠️</span>
      </div>
    </div>
  );
}
