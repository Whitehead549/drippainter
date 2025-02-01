// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import heroBanner from "../assets/2150170352.jpg";
import image1 from "../assets/Digital_art.jpg";
import image2 from "../assets/Education.jpg";
import image3 from "../assets/consultant.jpg";
import image4 from "../assets/fine_art.jpg";
import image5 from "../assets/room.jpg";
import image6 from "../assets/logissss.jpg";
import Testimonial from "../components/Essentials/Testimonial";
import Frequentqes from "../components/Frequentqes";
import AboutSection from "../components/AboutSection";
import Spinner from "../components/Spinner";
import About from "../assets/AboutIImage (1).svg";
import { Link} from "react-router-dom";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imagesToLoad = [About, heroBanner, image1, image2, image3, image4];

  useEffect(() => {
    // Preload all images
    const preloadImages = imagesToLoad.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages)
      .then(() => {
        setIsLoaded(true); // All images are loaded
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoaded(true); // Fallback: Consider loading complete even if some images fail
      });
  }, []);

  // Image Grid Data
  const images = [
    { src: image4, title: "FINE ART" },
    { src: image1, title: "DIGITAL ART" },
    { src: image2, title: "ART EDUCATION" },
    { src: image5, title: "ART STORAGE" },
    { src: image3, title: "ART CONSULTING" },
    { src: image6, title: "ART LOGISTICS" },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {!isLoaded && <Spinner />}
      {isLoaded && (
        <>
          {/* Hero Section */}
          <div
            id="hero-section"
            className="relative w-full h-[50vh] sm:h-[80vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-[#000300]"
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl tracking-wide">
              NAZEE CREATIVE <br />STUDIOS
              </h1>

              <div className="flex flex-col sm:flex-row space-y-0 sm:space-y-0 sm:space-x-6 justify-center pt-0">
                 <Link
                  to="/contact"
                  className="bg-white border-2 border-white rounded-sm text-[#000000] py-2 px-4 sm:px-6 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div id="other-sections">
            <div className="flex justify-center py-8">
              <img
                src={About}
                alt="About Us"
                className="w-48 h-16"
              />
            </div>
            <AboutSection />
            <section className="text-[#ffffff] text-center py-4 md:py-6 lg:py-6 bg-[#000300]">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Our Creative Collection
              </h1>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 px-12 max-w-6xl mx-auto">
              {images.map((image, index) => (
                <div key={index} className="text-center">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-contain mb-2"
                  />
                  <h2 className="text-md font-semibold text-[#000000]">
                    {image.title}
                  </h2>
                </div>
              ))}
            </section>

            <Frequentqes />
            <Testimonial />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
