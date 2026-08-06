import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar/navBar";
import Home from "./modules/Home/home";
import About from "./modules/About/about";
import Donation from "./modules/Donation/donation";
import Footer from "../components/layout/Footer/footer";
import ContactUs from "./modules/ContactUs/contactUs";
import VisionMission from "./modules/About/VisionMission";
import FAQSection from "../components/layout/Legal/FAQSection";
import PrivacyPolicyPage from "../components/layout/Legal/PrivacyPolicyPage";
import { nav_links } from "../constant/constants";
import TermsCondition from "../components/layout/Legal/Terms&Condition";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${nav_links.about_us}`} element={<About />} />
        <Route
          path={`${nav_links.vision_mission}`}
          element={<VisionMission />}
        />
        <Route path={`${nav_links.donation}`} element={<Donation />} />
        <Route path={`${nav_links.contact_us}`} element={<ContactUs />} />
        <Route path={`${nav_links.faqs}`} element={<FAQSection />} />
        <Route
          path={`${nav_links.terms_conditions}`}
          element={<TermsCondition />}
        />
        <Route
          path={`${nav_links.privacy_policy}`}
          element={<PrivacyPolicyPage />}
        />
        {/* <Route path="/aboutus" element={< />} /> */}
        {/* <Route path="/donation" element={<Donation />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
