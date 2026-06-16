import AboutHome from "./HomeAbout";
import Programmes from "./Programmes";
import { slides } from "../../../constant/constants";
import ImageSlider from "../../../components/ui/ImageSlider";
import OurPartners from "../OurPartners/ourPartners";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <ImageSlider slides={slides} />
      <AboutHome />
      <Programmes />
      <OurPartners />
    </div>
  );
};

export default Home;
