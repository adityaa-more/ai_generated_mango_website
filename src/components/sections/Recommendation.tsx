"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "919021484830";

export default function Recommendation() {
  const { t } = useLanguage();

  const advice = [
    { label: t('recommendation.family'), value: t('products.alphonso.dozen2') },
    { label: t('recommendation.gifting'), value: t('products.alphonso.peti') },
    { label: t('recommendation.save'), value: t('products.alphonso.peti') },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-leaf/5 rounded-[2.5rem] p-10 md:p-14 text-center border border-leaf/10 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-8 leading-tight">
            {t('recommendation.title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-left">
            {advice.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-cream shadow-sm flex flex-col items-center text-center gap-1"
              >
                <span className="text-xs font-bold text-brown/40 uppercase tracking-widest">{item.label}</span>
                <span className="text-lg font-bold text-leaf">{item.value}</span>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('recommendation.helpText'))}`}
            className="inline-flex items-center gap-2 bg-leaf text-white font-bold text-lg px-10 py-4 rounded-2xl hover:scale-105 transition-all shadow-lg"
          >
            {t('recommendation.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
