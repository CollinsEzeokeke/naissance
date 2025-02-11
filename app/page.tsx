"use client"

import CardsSection from "@/components/CardsSection";
import Footer from "@/components/footer";
import GlowingHomeComponent from "@/components/GlowingHomeComponent";
import { HeroSection } from "@/components/hero-section";
import ScrollZoomReveal from "@/components/reveal";
import Team from "@/components/team";
import { Geiger } from "react-geiger";

export default function Home() {
  return (
    <>
      <Geiger>
        <HeroSection />
        <CardsSection />
        <Team />
        <ScrollZoomReveal />
        <GlowingHomeComponent />
        <Footer />
      </Geiger>
    </>
  );
}
