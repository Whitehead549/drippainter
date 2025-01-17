import React from "react";
import About from "../assets/AboutIImage (1).svg"

const AboutSection = () => {
  return (
    <section className="relative">
     
      <div className="flex justify-center py-8">
          <img
            src={About}
            alt="About Us"
            className="w-48 h-16"
            loading="lazy"
          />
        </div>

      {/* Content Section */}
      <div className="relative px-6 md:px-12 lg:px-20 pb-10">
        {/* Decorative Image Positioned Behind */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img
            src="https://cdn.prod.website-files.com/637b8553d2b3433e9297cdb4/63bfdb147093626ba9d65cfa_S.svg"
            alt="Decorative S"
            className="w-72 h-72 opacity-10"
            loading="lazy"
          />
        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-5xl font-semibold text-center mb-6 relative z-10">
        SERVING DISCERNING MUSEUMS, COLLECTORS, DESIGNERS & GALLERIES{" "}
        <span className="text-[#000300] font-extrabold">FOR 60+ YEARS.</span>
        </h1>
        {/* Paragraph */}
        <p className="text-[#0000000] text-base md:text-lg leading-relaxed text-center mb-8 relative z-10 max-w-3xl mx-auto">
          Art Services was founded in 1964, in the heart of Los Angeles. The
          company is widely recognized as Southern California’s premier art
          presentation specialist and creates custom, archival-level frames,
          and the highest quality mounts, cradles, and pedestals.
          <br />
          <br />
          We are dedicated to treating your artwork and your trust with the
          utmost care. That is why we use the most sophisticated technology
          available and have established decades-long relationships with the
          most judicious clientele.
        </p>

        {/* Call to Action */}
        <div className="text-center mt-12 relative z-10">
          <a
            href="/mission"
            className="px-8 py-3 bg-[#000300] text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
      
    {/* Separator */}
    <div className="w-full h-[2px] bg-gray-200 mt-8"></div>
    </section>
  );
};

export default AboutSection;
