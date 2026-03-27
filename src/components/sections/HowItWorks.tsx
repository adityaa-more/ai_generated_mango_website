"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "919021484830";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", icon: "🥭", ...t('howItWorks.steps')[0] },
    { number: "02", icon: "💬", ...t('howItWorks.steps')[1] },
    { number: "03", icon: "✅", ...t('howItWorks.steps')[2] },
    { number: "04", icon: "🚚", ...t('howItWorks.steps')[3] },
  ];

  return (
    <section id="how" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('howItWorks.title')}</h2>
          <p className="text-brown/70 max-w-xl mx-auto">{t('howItWorks.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-mango/20 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#FFF8E7] border-4 border-mango rounded-full flex items-center justify-center text-3xl mb-6 shadow-md shadow-mango/10 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="text-leaf font-bold mb-2 tracking-widest">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.t}</h3>
              <p className="text-brown/60 text-sm leading-relaxed px-2">{step.d}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('howItWorks.steps')[1].d)}`} 
            className="bg-leaf text-white px-8 py-3 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
          >
            {t('howItWorks.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
