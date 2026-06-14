import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import {
  StatsBar,
  RoomsPreview,
  ActivitiesStrip,
  AboutTeaser,
  DiningHighlight,
  ReviewsSection,
  FinalCTA,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <RoomsPreview />
      <Marquee />
      <ActivitiesStrip />
      <AboutTeaser />
      <DiningHighlight />
      <ReviewsSection />
      <FinalCTA />
    </>
  );
}
