import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Nazee.PNG"; // Adjust the path based on your file location

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    {/* Footer for Large Devices Only */}
    <footer className="hidden md:block bg-[#000300] text-[#fff] pt-5 pb-0.5">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {/* Column 1: Company Information */}
        <div className="flex flex-col items-center sm:items-start">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Nazee Studios Logo" className="h-7" />
          </Link>
          <p className="text-xs md:text-sm leading-relaxed pt-2 text-center sm:text-left">
            Inspiring creativity, beauty, and imagination through art. Elevating spaces, enhancing lives.
          </p>
        </div>
  
        {/* Column 2: Quick Links */}
        <div className="text-center sm:text-center lg:pr-2">
          <h3 className="text-sm md:text-base font-semibold mb-2">Legal</h3>
          <ul className="space-y-0">
            <li>
              <Link to="/privacypolicy" className="text-xs md:text-sm hover:text-gray-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termsofservice" className="text-xs md:text-sm hover:text-gray-600 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Column 3: Social Media & Newsletter */}
        <div className="text-center sm:text-left text-[#fff]">
          <h2 className="text-sm md:text-base font-bold mb-2">Contact Information</h2>
          <p className="text-xs md:text-xs pb-1">
            <strong>Email:</strong> contact@nazeecreativestudios.com
          </p>
          <p className="text-xs md:text-sm pb-6">
            <strong>Address:</strong> 1192 Maud Street Wilmington, DE 19801
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 mb-0">
            <a href="#" className="hover:text-gray-600 transition" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-600 transition" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-600 transition" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-600 transition" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
  
      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 my-1 py-4 text-center">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Nazee Creative Studios. All Rights Reserved.
        </p>
      </div>
    </footer>
  
    {/* Footer for Small and Medium Devices Only */}
    <footer className="block md:hidden bg-[#000300] text-[#fff] pt-5 pb-0.5">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 gap-6 text-center">
        {/* Column 1: Company Information */}
        <div className="flex flex-col items-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Nazee Studios Logo" className="h-7" />
          </Link>
          <p className="text-xs md:text-xs leading-relaxed pt-2">
            Inspiring creativity, beauty, and imagination through art. Elevating spaces, enhancing lives.
          </p>
        </div>
  
        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/privacypolicy" className="text-xs md:text-sm hover:text-gray-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termsofservice" className="text-xs md:text-sm hover:text-gray-600 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Column 3: Social Media & Contact */}
        <div>
          <h2 className="text-sm md:text-base font-bold mb-2">Contact Information</h2>
          <p className="text-xs md:text-sm pb-1">
            <strong>Email:</strong> contact@nazeecreativestudios.com
          </p>
          <p className="text-xs md:text-sm pb-3">
            <strong>Address:</strong> 1192 Maud Street Wilmington, DE 19801
          </p>
  
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-600 transition" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-600 transition" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-600 transition" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-600 transition" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
  
      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 my-1 py-4 text-center">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Nazee Creative Studios. All Rights Reserved.
        </p>
      </div>
    </footer>
  </>
  
  );
};

export default Footer;