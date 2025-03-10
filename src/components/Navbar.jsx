import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaRegWindowClose } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/Nazee.PNG"; // Adjust the path based on your file location

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 left-0 w-full text-[#ffffff] bg-[#000300] shadow-md z-[9999]">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={logo} // Use the imported logo
              alt="Nazee Studios Logo" // Add alt text for accessibility
              className="h-10" // Adjust the height as needed
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#ffffff] font-semibold"
                : "hover:text-gray-400  transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#ffffff] font-semibold"
                : "hover:text-gray-400 transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            About
          </NavLink>
          <NavLink
            to="/painting"
            className={({ isActive }) =>
              isActive
                ? "text-[#ffffff] font-semibold"
                : "hover:text-gray-400 transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Paintings
          </NavLink>
         
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#ffffff] font-semibold"
                : "hover:text-gray-400 transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          {showMenu ? (
            <FaRegWindowClose
              onClick={toggleMenu}
              className="cursor-pointer text-[#ffffff] transition-transform transform hover:scale-110"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer text-[#ffffff] transition-transform transform hover:scale-110"
              size={30}
            />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      {showMenu && (
        <div className="md:hidden bg-[#000300] absolute top-full left-0 w-full shadow-md transition-all duration-300">
          <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
