import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/HeroSection";
import SpendWise from "@/components/sections/SpendWise";
import Confidentiality from "@/components/sections/Confidentiality";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className=" ">
      <div className="">
        <HeroSection />
      </div>
      {/* highlight section */}
      <div className="py-16 ">
        <p className="text-center font-medium">
          Gets 1000+ Downloads across the world
        </p>
      </div>
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-16" />

      <main className="container flex flex-col gap-16 ">
        <Features />
        <SpendWise />
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent " />
        <Confidentiality />
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent " />
      </main>
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
