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
            <span className="text-2xl md:text-3xl font-bold font-serif text-brown tracking-tight">{t('footer.brand')}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-brown/80 font-medium mt-2 z-10 text-[14px]">
            <div className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full border border-cream">
              {t('footer.delivery')}
            </div>
            <a 
              href="https://wa.me/919021484830" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full border border-cream hover:bg-leaf/10 hover:border-leaf/20 transition-all hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#4CAF50"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.631 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              +91 {t('footer.whatsapp')}
            </a>
            <a 
              href={`mailto:${t('footer.email')}`} 
              className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full border border-cream hover:bg-leaf/10 hover:border-leaf/20 transition-all hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-brown/60"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              {t('footer.email')}
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
