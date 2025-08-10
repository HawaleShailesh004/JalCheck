import React from "react";
import {
  HeroSection,
  HowItWorks,
  ImpactStatsCards,
  ShockingFootprints,
  RealImpactNumbers,
  WhyJalCheck,
  SustainableAlternatives,
  CallToAction,
} from "./sections";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-5 mt-10">
        <HeroSection />
        <ImpactStatsCards />
        <ShockingFootprints />
        <WhyJalCheck />
        <HowItWorks />
        <RealImpactNumbers />
        <SustainableAlternatives />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
