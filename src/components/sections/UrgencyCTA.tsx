"use client";

import React from "react";
import { Container, Section } from "../ui/Layout";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "919021484830";

export default function UrgencyCTA() {
  const { t } = useLanguage();

  return (
    <Section className="py-16 md:py-24 bg-[#FFF8E7]">
      <Container>
        <div className="bg-mango rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-lg border border-mango/50 flex flex-col items-center justify-center">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-leaf/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-6 sm:gap-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brown leading-tight tracking-tight">
              {t('urgency.title')}
            </h2>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-brown/90 font-medium md:leading-relaxed">
              {t('urgency.subtitle')}
            </p>
            
            <a 
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('urgency.title'))}`} 
              className="mt-4 px-8 py-5 md:px-12 md:py-6 bg-leaf text-white rounded-2xl font-bold text-xl md:text-2xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              {t('urgency.cta')} 
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
