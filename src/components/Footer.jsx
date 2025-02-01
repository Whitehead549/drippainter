import React from "react";
import { Link} from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000300] text-[#fff] pt-5 pb-0.5">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 gap-6 sm:grid-cols-3  md:grid-cols-3  lg:grid-cols-3 ">
        {/* Column 1: Company Information */}
        <div className="text-center sm:text-left">
          <h2 className="text-sm md:text-base font-bold mb-3 text-[#fff]">
            Your Company Name
          </h2>
          <p className="text-xs md:text-sm leading-relaxed">
            Delivering quality services and exceptional value since [Year].
            Contact us for innovative solutions tailored to your needs.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center sm:text-centre lg:pr-2 ">
          <h3 className="text-sm md:text-base font-semibold mb-2 ">
            Legal
          </h3>
          <ul className="space-y-0">
            <li>
              <Link
                to="/privacypolicy"
                className="text-xs md:text-sm hover:text-gray-600 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/termsofservice"
                className="text-xs md:text-sm hover:text-gray-600 transition"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media & Newsletter */}
        <div className="text-center sm:text-left text-[#fff]">
          <h2 className="text-sm md:text-base font-bold mb-2 text-[#ffffff]">Contact Us</h2>
          <p className="text-xs md:text-sm pb-1 text-[#ffffff]">
            <strong>Email:</strong> contact@yourcompany.com
          </p>
          <p className="text-xs md:text-sm pb-6">
            <strong>Address:</strong> 123 Main Street, City, State, 12345
          </p>
          {/* {social media} */}
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
          &copy; {currentYear} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
