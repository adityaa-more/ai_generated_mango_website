"use client";

import React, { useState } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.50 AM (1).jpeg", alt: "Crate of mangoes with size label" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.51 AM.jpeg", alt: "4 dozen size peti of mangoes packed in straw" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.51 AM (1).jpeg", alt: "Green mango held by hand over bulk mangoes" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.51 AM (2).jpeg", alt: "Overhead view of mango held over dozens of mangoes on floor" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.57 AM.jpeg", alt: "Two wooden crates with 5 and 6 dozen size mangoes" },
  { src: "/real/WhatsApp Image 2026-03-27 at 10.11.58 AM.jpeg", alt: "Freshly harvested green mango placed in straw peti" },
];

const VIDEOS = [
  { src: "/real/WhatsApp Video 2026-03-27 at 10.11.51 AM.mp4", label: "Farm Harvest 🌿" },
  { src: "/real/WhatsApp Video 2026-03-27 at 10.12.02 AM.mp4", label: "Mango Packing 📦" },
];

export default function RealGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-leaf/10 text-leaf px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Straight From the Farm
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brown leading-tight">
            Real Photos &amp; Videos 🎥🌿
          </h2>
          <p className="text-brown/60 mt-3 text-base md:text-lg max-w-xl mx-auto">
            No stock photos. Every image is taken directly at our Ratnagiri farm.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md group focus:outline-none focus:ring-4 focus:ring-mango/50"
              aria-label={`View photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">🔍</span>
              </div>
            </button>
          ))}
        </div>

        {/* Video Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((video, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-xl bg-black">
              <div className="px-4 pt-3 pb-1 flex items-center gap-2">
                <span className="text-white/80 text-sm font-semibold">{video.label}</span>
              </div>
              <video
                src={video.src}
                controls
                muted
                loop
                playsInline
                className="w-full max-h-72 md:max-h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Gallery image fullscreen"
              width={900}
              height={900}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg hover:bg-black/80 transition-colors"
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
