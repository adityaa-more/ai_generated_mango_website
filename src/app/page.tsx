import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import UrgencyBanner from "@/components/sections/UrgencyBanner";
import TrustStrip from "@/components/sections/TrustStrip";
import Products from "@/components/sections/Products";
import Recommendation from "@/components/sections/Recommendation";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FarmStory from "@/components/sections/FarmStory";
import TargetAudience from "@/components/sections/TargetAudience";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import UrgencyCTA from "@/components/sections/UrgencyCTA";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/ui/FloatingWA";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-mango/30 selection:text-brown overflow-x-hidden">
      {/* 1. Sticky Header */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 2b. Urgency Strip */}
        <UrgencyBanner />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Products Section */}
        <Products />

        {/* 5. Smart Recommendation Banner */}
        <Recommendation />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Farm Story */}
        <FarmStory />

        {/* 7b. Target Audience */}
        <TargetAudience />

        {/* 8. How It Works */}
        <HowItWorks />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Urgency CTA */}
        <UrgencyCTA />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button & Mobile Bar */}
      <FloatingWA />
      <MobileStickyCTA />
    </div>
  );
}
