import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingHeroSection from "../components/LandingHeroSection";
import LandingPageSection2 from "../components/LandingPageSection2";
import LandingPageSection3 from "../components/LandingPageSection3";
import LandingPageSection4 from "../components/LandingPageSection4";
import { Helmet } from "react-helmet";

function LandingPage() {
  return (
    <div>
      <Helmet>
        <title>RecruitEx - Get hired at your dream job with ease</title>
        <meta name={"Get hired at your dream job with ease"} content={"RecruitEx assists you to get hired without applying to hundreds of jobs rather you are contacted by employers"} />
        <meta name="site_name" content="Recruitex" />
        <meta
          name="title"
          content="Recruitex: Get hired at your dream job with ease"
        />
        <meta
          name="description"
          content="Connecting recruiters and candidates to appropriate job roles and simplifying the hiring process"
        />
        <meta
          name="image"
          content="https://recruitex.in/RecruitExFavicon.png"
        />
      </Helmet>
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
