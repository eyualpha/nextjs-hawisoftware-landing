import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-auto bg-red-50">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
