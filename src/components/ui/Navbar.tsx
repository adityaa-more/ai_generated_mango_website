"use client";

import React from "react";
import { Container } from "./Layout";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mango/20">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥭</span>
          <span className="text-xl font-bold font-serif text-brown tracking-tight">Sai Samarth</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="font-medium hover:text-leaf transition-colors">{t('nav.products')}</a>
          <a href="#about" className="font-medium hover:text-leaf transition-colors">{t('nav.about')}</a>
          <a href="#reviews" className="font-medium hover:text-leaf transition-colors">{t('nav.reviews')}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-cream/50 rounded-full px-1 py-1 border border-cream h-9">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'en' ? 'bg-mango text-brown shadow-sm' : 'text-brown/40 hover:text-brown/70'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('mr')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'mr' ? 'bg-mango text-brown shadow-sm' : 'text-brown/40 hover:text-brown/70'}`}
            >
              मराठी
            </button>
            <button 
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'hi' ? 'bg-mango text-brown shadow-sm' : 'text-brown/40 hover:text-brown/70'}`}
            >
              हिंदी
            </button>
          </div>

          <a 
            href="https://wa.me/919021484830?text=Hi, I came from your website. I want to order mangoes. 🥭" 
            className="bg-leaf text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all shadow-md text-sm"
          >
            {t('nav.order')}
          </a>
        </div>
      </Container>
    </nav>
  );
}
