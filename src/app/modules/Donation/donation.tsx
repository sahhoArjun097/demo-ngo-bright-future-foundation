import HeroSection from "./HeroSection";
import DonationSection from "./DonationSection";
import ImpactSection from "./ImpactSection";
import FAQSection from "./FAQSection";

const Donation = () => {
  return (
    <div className="min-h-screen bg-primary  font-sans">
      <HeroSection />
      <ImpactSection />
      <DonationSection />
      <FAQSection />
    </div>
  );
};

export default Donation;
