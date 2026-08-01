import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar/navBar";
import Home from "./modules/Home/home";
import About from "./modules/About/about";
import Donation from "./modules/Donation/donation";
import Footer from "../components/layout/Footer/footer";
import ContactUs from "./modules/ContactUs/contactUs";
import VisionMission from "./modules/About/VisionMission";
import FAQSection from "../components/layout/Faqs/FAQSection";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQSection />} />
        {/* <Route path="/aboutus" element={< />} /> */}
        {/* <Route path="/donation" element={<Donation />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
