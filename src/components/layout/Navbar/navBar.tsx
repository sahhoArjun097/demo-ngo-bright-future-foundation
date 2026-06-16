import { Link } from "react-router-dom";
import { logo, navItems } from "../../../constant/constants";

import NavItemComponent from "../../ui/navigation-menu";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full border-b  backdrop-blur-md sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">
        <div className="h-16 w-16 shrink-0">
          <img className="w-full h-full object-contain" src={logo} alt="logo" />
        </div>

        <ul
          className="
            hidden md:flex
            flex-wrap
            justify-center
            gap-x-8 gap-y-3
            flex-1
          "
        >
          {navItems.map((item, index) => (
            <NavItemComponent key={index} item={item} />
          ))}
        </ul>

        <div className="hidden md:block shrink-0">
          <button className="hover:brightness-110 transition-all duration-300 font-semibold py-3 px-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
            <Link to="/donation">Donations</Link>
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-screen py-4" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-2 px-4">
          {navItems.map((item, index) => (
            <NavItemComponent key={index} item={item} />
          ))}

          <button className="mt-4 w-full hover:brightness-110 transition-all duration-300 font-semibold py-3 px-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
            <Link to="/donation">Donations</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
