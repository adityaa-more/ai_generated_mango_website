"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();

  const trustItems = [
    { label: t('trust.chemFree') },
    { label: t('trust.direct') },
    { label: t('trust.fresh') },
    { label: t('trust.delivery') },
  ];

  return (
    <div className="bg-[#FFF8E7] border-y border-mango/20 py-6 overflow-x-auto no-scrollbar">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between md:justify-center gap-8 md:gap-16 min-w-max md:min-w-0">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <span className="font-bold text-brown/60 text-xs uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
