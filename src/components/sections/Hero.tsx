"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "919021484830";

export default function Hero() {
  const { t } = useLanguage();
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('hero.waMsg'))}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFF8E7 0%, #FFF0C8 50%, #E8F5E9 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-mango/20 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-leaf/10 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* MAIN CONTENT: Image + Text */}
      <div className="relative z-10 flex flex-col items-center flex-1 justify-center px-4 pt-6 pb-16">
        {/* DOMINANT MANGO IMAGE */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 mb-8">
          <div className="absolute inset-0 rounded-full bg-mango/20 blur-2xl scale-90 animate-pulse" />
          <Image
            src="/real/WhatsApp Image 2026-03-27 at 10.11.58 AM (1).jpeg"
            alt="Fresh Ratnagiri Alphonso Mango"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* BADGE / SOCIAL PROOF CLIP */}
        <div className="inline-block px-4 py-1.5 bg-mango/20 rounded-full text-brown font-bold text-sm mb-6 animate-fade-in">
          {t('hero.badge')}
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight max-w-4xl mb-6 tracking-tight text-brown">
          {t('hero.title')}
        </h1>

        {/* SUBTEXT */}
        <p className="text-center text-brown/70 text-lg md:text-xl max-w-2xl mb-10 font-medium">
          {t('hero.subtitle')}
        </p>

        {/* PRIMARY CTA */}
        <div className="flex flex-col items-center gap-4 w-full">
          <a
            href={waLink}
            id="hero-main-cta"
            className="w-full max-w-md md:w-auto bg-leaf text-white text-2xl md:text-3xl font-bold py-6 px-14 rounded-[2rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(76,175,80,0.3)] hover:scale-105 transition-all duration-300 text-center inline-block animate-pulse-subtle"
          >
            {t('hero.cta')}
          </a>
          
          {/* URGENCY MICROCOPY */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-brown/80 font-bold text-sm md:text-base mt-2">
            <span className="flex items-center gap-1.5 bg-mango/10 px-3 py-1 rounded-full border border-mango/20">
              {t('hero.urgency1')}
            </span>
            <span className="flex items-center gap-1.5 bg-leaf/10 px-3 py-1 rounded-full border border-leaf/20">
              {t('hero.urgency2')}
            </span>
          </div>
        </div>

        {/* SECONDARY TRUST STRIP (MINIMAL) */}
        <div className="flex items-center justify-center gap-4 mt-8 text-brown/40 font-bold text-[10px] uppercase tracking-[0.2em]">
          <span>{t('trust.chemFree')}</span>
          <span className="w-1 h-1 rounded-full bg-brown/10" />
          <span>{t('trust.delivery')}</span>
        </div>
      </div>
    </section>
  );
}
