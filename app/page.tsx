import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import OutSourceSection from "@/components/OutSourceSection";
import ObserverProvider from "@/components/provider/ObserverProvider";
import Techstack from "@/components/Techstack";
import Test from "@/components/Test";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const Home = () => {
  return (
    <ObserverProvider>
      <div className="w-full h-auto bg-red-50 scroll-smooth relative">
        <Navbar />
        <HeroSection />
        <Features />
        <Techstack />
        <Test />
        <OutSourceSection />
      </div>
    </ObserverProvider>
  );
};

export default Home;
