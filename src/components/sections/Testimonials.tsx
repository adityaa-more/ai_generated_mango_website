"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const PLACEHOLDER_IMAGES = [
  "/product_alphonso.png",
  "/product_langra.png",
];

const CARD_W = 280;   // card width px
const GAP = 16;       // gap px
const SPEED = 0.6;    // px per frame

export default function Testimonials() {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  const isPaused = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);

  // drag/swipe
  const dragStartX = useRef<number | null>(null);
  const dragStartPos = useRef(0);

  // Load images from API
  useEffect(() => {
    fetch("/api/testimonial-images")
      .then((r) => r.json())
      .then((d) => {
        const imgs: string[] = d.images ?? [];
        setImages(imgs.length > 0 ? imgs : PLACEHOLDER_IMAGES);
      })
      .catch(() => setImages(PLACEHOLDER_IMAGES));
  }, []);

  // Start animation loop once images are loaded
  useEffect(() => {
    if (images.length === 0 || !trackRef.current) return;

    // One "set" = all original images
    const singleSetW = images.length * (CARD_W + GAP);

    const tick = () => {
      if (!isPaused.current && dragStartX.current === null) {
        posRef.current += SPEED;
        // Reset seamlessly when we've scrolled exactly one set
        if (posRef.current >= singleSetW) {
          posRef.current -= singleSetW;
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [images]);

  if (images.length === 0) return null;

  // Repeat enough times so we always have content off-screen
  const copies = Math.max(3, Math.ceil(2400 / (images.length * (CARD_W + GAP))) + 1);
  const displayImages = Array.from({ length: copies }, () => images).flat();

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = dragStartX.current - e.clientX;
    posRef.current = dragStartPos.current + dx;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  const onPointerUp = () => {
    dragStartX.current = null;
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FFF8E7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brown mb-3 tracking-tight">
            ⭐ {t("testimonials.title")}
          </h2>
          <div className="w-16 h-1 bg-mango mx-auto rounded-full mb-5" />
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white border border-cream px-5 py-2 rounded-2xl text-sm font-bold text-brown shadow-sm">
              {t("testimonials.stat1")}
            </span>
            <span className="bg-white border border-cream px-5 py-2 rounded-2xl text-sm font-bold text-brown shadow-sm">
              {t("testimonials.stat2")}
            </span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FFF8E7] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FFF8E7] to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: GAP, width: "max-content" }}
        >
          {displayImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden"
              style={{ width: CARD_W, height: 340 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Customer proof ${(i % images.length) + 1}`}
                  fill
                  sizes="280px"
                  className="object-contain p-3"
                  draggable={false}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
