import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import Font Awesome spinner
import heroBanner from "../assets/2150170352.jpg";
import Testimonial from "../components/Essentials/Testimonial";
import ImageGrid from "../components/Essentials/ImageGrid";
import Frequentqes from "../components/Frequentqes";

const Home = ({ setIsHomeLoading }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBanner;
    img.onload = () => {
      setIsLoaded(true);
      setIsHomeLoading(false); // Notify App that loading is complete
    };
  }, [setIsHomeLoading]);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      {/* Show placeholder or loader until image is fully loaded */}
      {isLoaded ? (
        <>
          {/* Hero Section */}
          <div
            id="hero-section"
            className="relative w-full h-[50vh] sm:h-[80vh] md:h-[70vh] lg:h-[80vh] overflow-hidden  bg-[#000300]"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black bg-opacity-55"></div>
              <img
                src={heroBanner}
                alt="Hero Banner"
                className="w-full h-full object-cover opacity-100 transition-opacity duration-200 pt-8 md:pt-4 lg:pt-16"
              />
            </div>

            {/* Content Wrapper */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-12 px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl tracking-wide">
              Creative<br/>Art Work
              </h1>

              <div className="flex flex-col sm:flex-row space-y-0 sm:space-y-0 sm:space-x-6 justify-center pt-0">
                <a
                  href="https://freightswiftlogistics.com/about/"
                  className="bg-white border-2 border-white rounded-sm text-[#000000] py-2 px-4 sm:px-6 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div id="other-sections">
            <ImageGrid />
            <Frequentqes />
            <Testimonial />
          </div>
        </>
      ) : (
        // Loading Spinner
        <div className="flex items-center justify-center h-screen text-gray-400">
          <FaSpinner className="animate-spin text-4xl" />
        </div>
      )}
    </div>
  );
};

export default Home;
