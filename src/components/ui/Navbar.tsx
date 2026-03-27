"use client";

import React, { useState, useRef, useEffect } from "react";
import { Container } from "./Layout";
import { useLanguage } from "@/context/LanguageContext";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "mr", label: "मराठी" },
  { code: "hi", label: "हिंदी" },
] as const;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel = LANGS.find((l) => l.code === language)?.label ?? "EN";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mango/20">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold font-serif text-brown tracking-tight">🥭 Sai Samarth</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="font-medium hover:text-leaf transition-colors">{t('nav.products')}</a>
          <a href="#about" className="font-medium hover:text-leaf transition-colors">{t('nav.about')}</a>
          <a href="#reviews" className="font-medium hover:text-leaf transition-colors">{t('nav.reviews')}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop: golden pill toggle */}
          <div className="hidden md:flex items-center bg-[#FFF8E7] border border-mango/30 rounded-full p-0.5 gap-0.5">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-200 ${
                  language === lang.code
                    ? "bg-mango text-brown shadow-sm"
                    : "text-brown/50 hover:text-brown"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile: click dropdown */}
          <div className="relative md:hidden" ref={dropdownRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 bg-[#FFF8E7] border border-mango/30 rounded-full px-4 py-1.5 text-[11px] font-bold text-brown"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span>{currentLabel}</span>
              <span className={`text-[8px] opacity-40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▼</span>
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-28 bg-white border border-cream rounded-xl shadow-xl z-[60] overflow-hidden">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-[11px] font-bold transition-colors border-b border-cream/30 last:border-0 ${
                      language === lang.code
                        ? "bg-mango/20 text-brown"
                        : "hover:bg-mango/10 text-brown/70"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
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
