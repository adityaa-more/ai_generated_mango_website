"use client";

import React from "react";
import { Container, Section } from "../ui/Layout";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const points = [
    { ...t('whyUs.points')[0] },
    { ...t('whyUs.points')[1] },
    { ...t('whyUs.points')[2] },
    { ...t('whyUs.points')[3] },
  ];

  return (
    <Section className="bg-[#FFF8E7]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-2 tracking-tight">
            🌿 {t('whyUs.title')}
          </h2>
          <div className="w-16 h-1 bg-mango mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {points.map((point, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-cream hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
              <h3 className="text-sm md:text-lg font-bold mb-1 text-brown leading-tight">
                {point.t}
              </h3>
              <p className="text-[10px] md:text-sm text-brown/60 leading-relaxed">
                {point.d}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/919021484830?text=Hi, I came from your website. I'm interested in ordering fresh mangoes after reading why you are the best!"
            className="inline-flex items-center gap-3 bg-leaf text-white font-bold py-5 px-12 rounded-2xl shadow-xl hover:scale-105 transition-all text-xl"
          >
            {t('whyUs.cta')}
          </a>
        </div>
      </Container>
    </Section>
  );
}
