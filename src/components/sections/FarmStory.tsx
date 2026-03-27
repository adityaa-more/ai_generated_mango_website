"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const CAROUSEL_IMAGES = [
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.48 AM.jpeg", alt: "Fresh mangoes on a weighing scale" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.49 AM.jpeg", alt: "Farmer holding a fresh mango at the farm" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.50 AM.jpeg", alt: "Fresh green mangoes spread on the ground" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.58 AM (1).jpeg", alt: "Ripe yellow mango held by hand" },
];

export default function FarmStory() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Real Photo Carousel */}
        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl bg-cream/50">
          {CAROUSEL_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {CAROUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-mango scale-125" : "bg-white/60"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Story Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-block self-start bg-leaf/10 text-leaf px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {t('farmStory.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-brown">
            {t('farmStory.title')}
          </h2>

          <div className="space-y-4 text-brown/80 leading-relaxed text-base md:text-lg">
            <p>{t('farmStory.text1')}</p>
            <p>{t('farmStory.text2')}</p>

            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 md:max-h-none opacity-0 md:opacity-100'}`}>
              <div className="space-y-4 pt-4">
                <p className="font-semibold text-leaf">{t('farmStory.text3')}</p>
                <p>{t('farmStory.text4')}</p>
                <p>{t('farmStory.text5')}</p>
                <p className="italic font-bold text-brown">
                  {t('farmStory.text6')}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden w-full text-leaf font-bold flex items-center justify-center gap-2 mt-2 transition-all"
            >
              {isExpanded ? `⬆️ ${t('farmStory.readLess')}` : `📖 ${t('farmStory.readMore')}`}
            </button>

            {/* SECTION CTA */}
            <div className="pt-6 flex justify-center md:justify-start">
              <a
                href="https://wa.me/919021484830?text=Hi, I came from your website. I read your farm story! I want to order some authentic Ratnagiri mangoes."
                className="inline-flex items-center gap-3 bg-mango text-brown font-bold py-4 px-10 rounded-2xl shadow-lg hover:rotate-2 transition-all text-lg"
              >
                {t('farmStory.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
