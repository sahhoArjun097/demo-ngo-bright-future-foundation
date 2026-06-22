import HeroAboutSection from "./HeroAboutSection";
import OurStory from "./OurStory";
import VisionMission from "./VisionMission";
import Philosophy from "./Philosophy";
import LifeCycle from "./LifeCycle";
import HowWeWork from "./HowWeWork";
import WhyTrustUs from "./WhyTrustUs";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="bg-white">
      <HeroAboutSection />
      <OurStory />
      <VisionMission />
      <Philosophy />
      <LifeCycle />
      <HowWeWork />
      <WhyTrustUs />
      <Contact />
    </div>
  );
};

export default About;
