import { Hero } from "@/components/home/Hero";
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
      <ActivitiesStrip />
      <AboutTeaser />
      <DiningHighlight />
      <ReviewsSection />
      <FinalCTA />
    </>
  );
}
