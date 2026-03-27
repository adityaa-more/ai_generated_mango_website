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
          <span className="text-xl font-bold font-serif text-brown tracking-tight">Sai Samarth</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="font-medium hover:text-leaf transition-colors">{t('nav.products')}</a>
          <a href="#about" className="font-medium hover:text-leaf transition-colors">{t('nav.about')}</a>
          <a href="#reviews" className="font-medium hover:text-leaf transition-colors">{t('nav.reviews')}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-1.5 bg-cream/50 hover:bg-cream rounded-full px-4 py-1.5 border border-cream transition-all text-[11px] font-bold text-brown">
              <span>{language === 'en' ? 'EN' : language === 'mr' ? 'मराठी' : 'हिंदी'}</span>
              <span className="text-[8px] opacity-40">▼</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-24 bg-white border border-cream rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[60] overflow-hidden">
              <button onClick={() => setLanguage('en')} className="w-full px-4 py-2 text-left text-[11px] font-bold hover:bg-mango/10 transition-colors border-b border-cream/30">EN</button>
              <button onClick={() => setLanguage('mr')} className="w-full px-4 py-2 text-left text-[11px] font-bold hover:bg-mango/10 transition-colors border-b border-cream/30">मराठी</button>
              <button onClick={() => setLanguage('hi')} className="w-full px-4 py-2 text-left text-[11px] font-bold hover:bg-mango/10 transition-colors">हिंदी</button>
            </div>
          </div>

          <a 
            href="https://wa.me/919021484830?text=Hi, I came from your website. I want to order mangoes." 
            className="hidden md:inline-flex bg-leaf text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition-all shadow-md text-xs whitespace-nowrap"
          >
            {t('nav.order')}
          </a>
        </div>
      </Container>
    </nav>
  );
}
