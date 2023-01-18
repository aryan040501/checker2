import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingHeroSection from "../components/LandingHeroSection";
import LandingPageSection2 from "../components/LandingPageSection2";
import LandingPageSection3 from "../components/LandingPageSection3";
import LandingPageSection4 from "../components/LandingPageSection4";

function LandingPage() {
  return (
    <div>
      <Header />
      <LandingHeroSection />
      <LandingPageSection2 />
      <LandingPageSection3 />
      <LandingPageSection4 />
      <Footer />
    </div>
  );
}

export default LandingPage;
