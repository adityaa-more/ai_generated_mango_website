"use client";

import React from "react";
import { Container } from "../ui/Layout";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-cream py-10 md:py-16">
      <Container>
        <div className="flex flex-col items-center justify-center text-center gap-6 relative">
          <div className="flex items-center gap-2">
            <span className="text-4xl drop-shadow-sm">🥭</span>
            <span className="text-2xl md:text-3xl font-bold font-serif text-brown tracking-tight">{t('footer.brand')}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-brown/80 font-medium mt-2 z-10 text-[14px]">
            <div className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full border border-cream">
              <span className="text-xl">🚚</span> {t('footer.delivery')}
            </div>
            <a href="https://wa.me/919021484830" className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full border border-cream hover:bg-leaf/10 hover:border-leaf/20 transition-colors">
              <span className="text-xl">💬</span> +91 {t('footer.whatsapp')}
            </a>
            <a href={`mailto:${t('footer.email')}`} className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full border border-cream hover:bg-leaf/10 hover:border-leaf/20 transition-colors">
              <span className="text-xl">📧</span> {t('footer.email')}
            </a>
          </div>
          
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-cream to-transparent my-4" />
          
          <div className="text-brown/40 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {t('footer.brand')}. {t('footer.copyright')}
          </div>
        </div>
      </Container>
    </footer>
  );
}
