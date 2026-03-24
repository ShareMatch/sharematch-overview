import StickyNav from "./components/nav/StickyNav";
import HeroSection from "./components/hero/HeroSection";
import WhoWeAreSection from "./components/team/WhoWeAreSection";
import PlatformSection from "./components/platform/PlatformSection";
import HowItWorksSection from "./components/howitworks/HowItWorksSection";
import USPSection from "./components/usps/USPSection";
import AudienceSection from "./components/audience/AudienceSection";
import RoadmapSection from "./components/roadmap/RoadmapSection";
import CTASection from "./components/cta/CTASection";

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
);

export default function Home() {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <Divider />
      <WhoWeAreSection />
      <Divider />
      <PlatformSection />
      <Divider />
      <HowItWorksSection />
      <Divider />
      <USPSection />
      <Divider />
      <AudienceSection />
      <Divider />
      <RoadmapSection />
      <Divider />
      <CTASection />
    </main>
  );
}
