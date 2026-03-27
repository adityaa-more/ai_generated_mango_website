"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "919021484830";

export default function Products() {
  const { t } = useLanguage();

  const productData = [
    {
      id: "alphonso",
      name: t('products.alphonso.title'),
      desc: t('products.alphonso.desc'),
      image: "/product_alphonso.png",
      options: [
        { label: t('products.alphonso.dozen1'), msg: t('products.alphonso.dozen1Msg') },
        { label: t('products.alphonso.dozen2'), msg: t('products.alphonso.dozen2Msg'), highlight: t('products.alphonso.family') },
        { label: t('products.alphonso.peti'), msg: t('products.alphonso.petiMsg'), secondary: t('products.alphonso.best') },
      ],
    },
    {
      id: "pairi",
      name: t('products.pairi.title'),
      desc: t('products.pairi.desc'),
      image: "/product_langra.png", 
      options: [
        { label: t('products.pairi.dozen1'), msg: t('products.pairi.dozen1Msg') },
        { label: t('products.pairi.peti'), msg: t('products.pairi.petiMsg'), secondary: t('products.pairi.best') },
      ],
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('products.title')}
          </h2>
          <p className="text-leaf font-bold flex items-center justify-center gap-2">
           {t('products.trust')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {productData.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FFF8E7] rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-contain drop-shadow-xl group-hover:rotate-6 transition-transform duration-500"
                />
              </div>

              <h3 className="text-3xl font-bold mb-3 text-brown">{product.name}</h3>
              <p className="text-brown/70 mb-8 text-sm leading-relaxed">
                {product.desc}
              </p>

              <div className="flex flex-col gap-3 w-full">
                {product.options.map((option, idx) => {
                  const isBestValue = option.label.includes("Peti") || option.secondary;
                  
                  return (
                    <div key={idx} className={`flex flex-col gap-1 p-2 rounded-2xl transition-all ${isBestValue ? "bg-mango/20 border-2 border-mango shadow-sm" : ""}`}>
                      {isBestValue && (
                        <span className="text-[10px] font-black text-brown uppercase tracking-[0.2em] mb-1">
                          👑 {t('products.bestValue')}
                        </span>
                      )}
                      {option.highlight && (
                        <span className="text-[10px] font-bold text-leaf uppercase tracking-wider">
                          {option.highlight}
                        </span>
                      )}
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(option.msg)}`}
                        className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-sm ${
                          isBestValue 
                            ? "bg-mango text-brown hover:bg-mango/90 scale-105" 
                            : option.highlight
                              ? "bg-leaf text-white hover:bg-leaf/90"
                              : "bg-white text-brown border border-cream hover:bg-cream/20"
                        }`}
                      >
                        {option.label}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
