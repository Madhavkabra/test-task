"use client";

import Header from "./Header";
import HeroBirds from "./Hero/HeroBirds";
import FeatureBadge from "./Hero/FeatureBadge";
import HeroHeading from "./Hero/HeroHeading";
import HeroDescription from "./Hero/HeroDescription";
import HeroCTAs from "./Hero/HeroCTAs";
import HeroClouds from "./Hero/HeroClouds";
import ScrollIndicator from "./Hero/ScrollIndicator";
import Ellipse from "../assets/icons/Ellipse";

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#007AFF",
        backgroundImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))",
      }}
    >
      <div className="absolute top-0 left-0 max-md:hidden">
        <Ellipse />
      </div>
      <HeroBirds />

      <Header />

      <div className="max-w-4xl mx-auto text-center p-4 py-16 md:p-8 lg:p-16 lg:pb-[54px] flex flex-col gap-6">
        <FeatureBadge />
        <HeroHeading />
        <HeroDescription />
        <HeroCTAs />
      </div>

      <HeroClouds />
     
    </section>
  );
}
