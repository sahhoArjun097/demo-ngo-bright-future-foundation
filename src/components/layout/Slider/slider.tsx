import { Link } from "react-router-dom";
import { logo, navItems } from "../../../constant/constants";
import NavItemComponent from "../../ui/navigation-menu";

const Slider = () => {
  return (
    <div className=" px-7 w-1/2 h-full  absolute  flex-col border py-3 flex justify-between items-center">
      <div className="h-20 w-20">
        <img src={logo} />
      </div>
      <ul className="flex flex-col gap-8">
        {navItems.map((item, index) => (
          <NavItemComponent key={index} item={item} />
        ))}
      </ul>
      <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-white">
        <Link to="/donation">Donations</Link>
      </button>
    </div>
  );
};

export default Slider;
