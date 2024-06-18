import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineInfoCircle,
  AiOutlineShoppingCart,
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollToBio = () => {
    const bioElement = document.getElementById("biography");
    if (bioElement) {
      bioElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDiscography = () => {
    const discographyElement = document.getElementById("discography");
    if (discographyElement) {
      discographyElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMerch = () => {
    const merchElement = document.getElementById("merch");
    if (merchElement) {
      merchElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToUpcoming = () => {
    const upcomingElement = document.getElementById("upcoming");
    if (upcomingElement) {
      upcomingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="z-30 transition duration-300 ease-in-out bg-black bg-opacity-0 rounded-xl backdrop-blur-md">
      <div className="container flex items-center justify-center p-6 mx-auto">
        <ul
          className={`hidden md:flex space-x-24 items-center text-white font-bold `}
        >
          <button
            onClick={scrollToBio}
            className="px-6 py-2 font-semibold transition duration-300 ease-in-out bg-transparent rounded-xl hover:bg-red-600 hover:border-transparent hover:text-white hover:shadow-lg"
          >
            Bio
          </button>
          <button
            onClick={scrollToDiscography}
            className="px-6 py-2 font-semibold transition duration-300 ease-in-out bg-transparent rounded-xl hover:bg-red-600 hover:border-transparent hover:text-white hover:shadow-lg"
          >
            Discography
          </button>
          <button
            onClick={scrollToMerch}
            className="px-6 py-2 font-semibold transition duration-300 ease-in-out bg-transparent rounded-xl hover:bg-red-600 hover:border-transparent hover:text-white hover:shadow-lg"
          >
            Merch
          </button>
          <button
            onClick={scrollToUpcoming}
            className="px-6 py-2 font-semibold transition duration-300 ease-in-out bg-transparent rounded-xl hover:bg-red-600 hover:border-transparent hover:text-white hover:shadow-lg"
          >
            Upcoming
          </button>
          <button
            onClick={scrollToContact}
            className="px-6 py-2 font-semibold transition duration-300 ease-in-out bg-transparent rounded-xl hover:bg-red-600 hover:border-transparent hover:text-white hover:shadow-lg"
          >
            Contact
          </button>
        </ul>
        <div className="md:hidden">
          <AiOutlineMenu
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>
      {showNav && (
        <div className="absolute top-0 left-0 right-0 z-40 w-full h-screen p-4 bg-black bg-opacity-95">
          <MobileNav setShowNav={setShowNav} />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <li className="flex items-center gap-2 cursor-pointer">
      {icon}
      <span>{label}</span>
    </li>
  );
};

const MobileNav = ({ setShowNav }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <AiOutlineClose
        size={30}
        className="text-white cursor-pointer"
        onClick={() => setShowNav(false)}
      />
      <NavItem label="About" icon={<AiOutlineUser size={24} />} />
      <NavItem label="Discography" icon={<AiOutlineInfoCircle size={24} />} />
      <NavItem label="Merch" icon={<AiOutlineShoppingCart size={24} />} />
      <NavItem label="Upcoming" icon={<AiOutlineCalendar size={24} />} />
      <NavItem label="Contact" icon={<AiOutlineMail size={24} />} />
    </div>
  );
};

export default Navbar;
