import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar/navBar";
import Home from "./modules/Home/home";
import About from "./modules/About/about";
import Profile from "./modules/Profile/profile";
import Donation from "./modules/Donation/donation";
import Footer from "../components/layout/Footer/footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donation" element={<Donation />} />
        {/* <Route path="/aboutus" element={< />} /> */}
        {/* <Route path="/donation" element={<Donation />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
