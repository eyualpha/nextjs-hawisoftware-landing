import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
// import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import OutSourceSection from "@/components/OutSourceSection";
import ObserverProvider from "@/components/provider/ObserverProvider";
import ServiceSection from "@/components/ServiceSection";
import Techstack from "@/components/Techstack";
import Test from "@/components/Test";
// import Navbar from "@/components/ui/Navbar";
import React from "react";

const Home = () => {
  return (
    <ObserverProvider>
      <div className="w-full h-auto  scroll-smooth relative">
        {/* <Navbar /> */}
        <HeroSection />
        <Features />
        <Techstack />
        <Test />
        <OutSourceSection />
        <ServiceSection />
        <ContactSection />
        {/* <FooterSection /> */}
      </div>
    </ObserverProvider>
  );
};

export default Home;
