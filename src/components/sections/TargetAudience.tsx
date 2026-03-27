"use client";

import React from "react";
import { Container, Section } from "../ui/Layout";
import { useLanguage } from "@/context/LanguageContext";

export default function TargetAudience() {
  const { t } = useLanguage();

  const audiences = [
    { icon: "👨‍👩‍👧‍👦", title: t('audience.families'), desc: t('recommendation.family') },
    { icon: "🎁", title: t('audience.gifting'), desc: t('recommendation.gifting') },
    { icon: "🏢", title: t('audience.bulk'), desc: t('recommendation.save') },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown">{t('audience.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-cream/30 rounded-3xl border border-cream shadow-sm hover:shadow-md transition-all">
              <span className="text-5xl mb-4">{aud.icon}</span>
              <h3 className="text-xl font-bold text-brown mb-2">{aud.title}</h3>
              <p className="text-brown/60 text-sm text-center">{aud.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Trust Microcopy requested in Point 7 */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-leaf font-bold text-sm md:text-base">
           <span className="flex items-center gap-2"> {t('trust.quality')} </span>
           <span className="flex items-center gap-2"> {t('trust.support')} </span>
        </div>
      </Container>
    </Section>
  );
}
