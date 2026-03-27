"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileStickyCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] sm:hidden p-4 bg-white/80 backdrop-blur-md border-t border-cream shadow-[0_-10px_20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-5 duration-500">
      <a 
        href="https://wa.me/919021484830?text=Hi, I came from your website. I want to order mangoes. 🥭"
        className="w-full bg-leaf text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-transform"
      >
        <span className="text-xl">💬</span>
        {t('sticky.cta')}
      </a>
    </div>
  );
}
