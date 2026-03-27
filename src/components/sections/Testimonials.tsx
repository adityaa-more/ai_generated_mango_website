"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonialList = t('testimonials.items').map((item: any, i: number) => ({
    ...item,
    rating: 5,
    image: i === 0 ? "/testimonials/peti1.jpg" : i === 1 ? "/testimonials/delivery1.jpg" : "/testimonials/peti2.jpg"
  }));

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <div className="w-16 h-1 bg-mango mx-auto rounded-full mb-6" />
          <p className="text-brown/70 max-w-xl mx-auto text-lg mb-8">
            {t('testimonials.subtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="bg-white px-6 py-3 rounded-2xl border border-cream shadow-sm flex items-center gap-3 animate-bounce-subtle">
              <span className="text-2xl">📦</span>
              <span className="font-bold text-brown">{t('testimonials.stat1')}</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-cream shadow-sm flex items-center gap-3 animate-bounce-subtle">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-brown">{t('testimonials.stat2')}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialList.map((testi: any, i: number) => (
            <div key={i} className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col group border border-cream">
              {/* Image Section */}
              <div className="relative h-56 w-full bg-cream/40 flex items-center justify-center overflow-hidden">
                <Image 
                  src={testi.image} 
                  alt={`Customer photo`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 z-10"
                  onError={(e: any) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-brown/40 z-0 bg-leaf/5">
                  <span className="text-4xl mb-3">📸</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center px-6 leading-relaxed">
                    Customer Photo
                  </span>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="text-mango text-7xl absolute -top-8 right-6 opacity-20 font-serif leading-none">“</div>
                
                <div className="flex gap-1 mb-5">
                  {[...Array(testi.rating)].map((_, idx) => (
                    <span key={idx} className="text-mango text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-brown/80 mb-8 italic leading-relaxed flex-grow text-[15px]">
                  &quot;{testi.text}&quot;
                </p>
                
                <div className="border-t border-cream pt-5">
                  <div className="font-bold text-brown text-lg">{testi.name}</div>
                  <div className="text-[10px] text-leaf uppercase tracking-widest font-bold mt-1">
                    {t('testimonials.verified')} • {testi.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
