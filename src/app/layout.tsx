import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Mangoes | Order on WhatsApp – Sai Samarth",
  description: "Sweet, juicy, and hand-picked Ratnagiri & Kesar mangoes delivered to your doorstep. Place your order instantly on WhatsApp. Alphonso, Kesar, Langra varieties available.",
  keywords: ["fresh mangoes", "Ratnagiri Alphonso", "Kesar mango", "order mangoes online", "mangoes WhatsApp", "Sai Samarth"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Fresh Mangoes | Sai Samarth",
    description: "Hand-picked Ratnagiri & Kesar mangoes delivered to your door. Order on WhatsApp — fast & easy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Mangoes | Sai Samarth",
    description: "Hand-picked Ratnagiri & Kesar mangoes. Order on WhatsApp!",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-inter bg-cream text-accent">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
