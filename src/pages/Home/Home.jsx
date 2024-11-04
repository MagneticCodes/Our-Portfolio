import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import HighlightsSection from "./HighlightsSection/HighlightsSection";
const Home = () => {
  return (
    <div className="relative w-full">
      <HeroSection />
      <HighlightsSection />
    </div>
  );
};

export default Home;
