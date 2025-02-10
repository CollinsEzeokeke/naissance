import CardsSection from "@/components/CardsSection";
import { HeroSection } from "@/components/hero-section";
import HouseSection from "@/components/houseReveal";
import ScrollZoomReveal from "@/components/reveal";
import Team from "@/components/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <Team />
      <ScrollZoomReveal />
      <HouseSection />
      <div className="h-[400vh]"/>
    </>
  );
}
