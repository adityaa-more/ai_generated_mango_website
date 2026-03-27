"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "919021484830";

const PRODUCTS = [
  {
    id: "alphonso",
    titleKey: "products.alphonso.title",
    descKey: "products.alphonso.desc",
    image: "/product_alphonso.png",
    badge: "👑 King of Mangoes",
    trustPoints: ["🌿 Naturally ripened", "🚫 No chemicals", "🧑‍🌾 Farm fresh"],
    options: [
      {
        label: "🟢 Buy 1 Dozen",
        hint: "Perfect to try",
        style: "border border-leaf/30 bg-white text-brown hover:bg-leaf/5",
        msgKey: "products.alphonso.dozen1Msg",
      },
      {
        label: "🟡 Buy 2 Dozen",
        hint: "👨‍👩‍👧‍👦 Family of 4",
        style: "border border-mango/40 bg-[#FFF8E7] text-brown hover:bg-mango/20",
        msgKey: "products.alphonso.dozen2Msg",
      },
      {
        label: "🔥 Best Value → Buy Peti",
        hint: "🎁 Gifting & Bulk Savings",
        style: "bg-leaf text-white hover:bg-leaf/90 shadow-lg",
        isBest: true,
        msgKey: "products.alphonso.petiMsg",
      },
    ],
  },
  {
    id: "pairi",
    titleKey: "products.pairi.title",
    descKey: "products.pairi.desc",
    image: "/product_langra.png",
    badge: "🥭 Perfect for Aamras",
    trustPoints: ["🌿 Naturally ripened", "🚫 No chemicals", "🧑‍🌾 Farm fresh"],
    options: [
      {
        label: "🟢 Buy 1 Dozen",
        hint: "Perfect to try",
        style: "border border-leaf/30 bg-white text-brown hover:bg-leaf/5",
        msgKey: "products.pairi.dozen1Msg",
      },
      {
        label: "🔥 Best Value → Buy Peti",
        hint: "🎁 Gifting & Bulk Savings",
        style: "bg-leaf text-white hover:bg-leaf/90 shadow-lg",
        isBest: true,
        msgKey: "products.pairi.petiMsg",
      },
    ],
  },
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-brown">
            {t("products.title")}
          </h2>
          <p className="text-leaf font-semibold text-sm flex items-center justify-center gap-2">
            🌾 {t("products.trust")} • Handpicked • Direct from Ratnagiri
          </p>
        </div>

        {/* Smart Guidance strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: "👨‍👩‍👧‍👦", label: "Family of 4", rec: "→ 2 Dozen" },
            { icon: "🎁", label: "Gifting", rec: "→ Peti" },
            { icon: "💰", label: "Best Value", rec: "→ Peti" },
          ].map((g) => (
            <div
              key={g.label}
              className="flex items-center gap-2 bg-[#FFF8E7] border border-mango/30 rounded-full px-4 py-2 text-xs font-bold text-brown"
            >
              <span>{g.icon}</span>
              <span>{g.label}</span>
              <span className="text-leaf">{g.rec}</span>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#FFF8E7] rounded-[2.5rem] p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-5"
            >
              {/* Badge */}
              <span className="bg-mango/20 text-brown text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {product.badge}
              </span>

              {/* Image */}
              <div className="relative w-44 h-44">
                <Image
                  src={product.image}
                  alt={t(product.titleKey)}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain drop-shadow-xl hover:rotate-6 transition-transform duration-500"
                />
              </div>

              {/* Title + Desc */}
              <div>
                <h3 className="text-2xl font-bold text-brown mb-1">{t(product.titleKey)}</h3>
                <p className="text-brown/65 text-sm leading-relaxed">{t(product.descKey)}</p>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap justify-center gap-2">
                {product.trustPoints.map((tp) => (
                  <span
                    key={tp}
                    className="text-[11px] font-semibold text-leaf bg-leaf/10 rounded-full px-3 py-1"
                  >
                    {tp}
                  </span>
                ))}
              </div>

              {/* Peti highlight box */}
              <div className="w-full space-y-3">
                {product.options.map((opt, idx) => (
                  <div key={idx} className={opt.isBest ? "bg-white rounded-2xl p-3 border border-leaf/20 shadow-sm" : ""}>
                    {opt.isBest && (
                      <div className="flex items-center justify-center gap-1.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
                        <span className="text-[10px] font-bold text-leaf uppercase tracking-widest">
                          Best Value
                        </span>
                      </div>
                    )}
                    <p className="text-[10px] text-brown/50 font-bold uppercase tracking-wider mb-1.5">
                      {opt.hint}
                    </p>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t(opt.msgKey))}`}
                      className={`w-full block py-3.5 rounded-xl font-bold text-sm transition-all text-center ${opt.style}`}
                    >
                      {opt.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <p className="text-center text-brown/50 text-xs mt-10 font-medium">
          💬 Not sure what to order? Just ask on WhatsApp — we&apos;ll help you pick the right one.
        </p>
      </div>
    </section>
  );
}
