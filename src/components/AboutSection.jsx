import React from "react";
import { Link} from "react-router-dom";



const AboutSection = () => {
  return (
    <section className="relative">
     
      
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
        {/* <h1 className="text-xl md:text-5xl font-semibold text-center mb-6 relative z-10">
        SERVING DISCERNING MUSEUMS, COLLECTORS, DESIGNERS & GALLERIES{" "}
        <span className="text-[#000300] font-extrabold">FOR 60+ YEARS.</span>
        </h1> */}
        {/* Paragraph */}
        <p className="text-[#0000000] text-base md:text-lg lg:text-xl leading-relaxed text-center mb-8 relative z-10 max-w-3xl mx-auto">
          At Nazee Creative Studios, we're passionate about fostering creativity, innovation,
          and artistic excellence. As a multifaceted art company, we specialize in Fine Art, Digital Art,
          Art Education, Art Storage, Art Consulting, and Art Logistics. Our mission is to provide a platform for artists to thrive,
          while delivering exceptional services that cater to the diverse needs of the art community.

          {/* <br />
          <br />
          We are dedicated to treating your artwork and your trust with the
          utmost care. That is why we use the most sophisticated technology
          available and have established decades-long relationships with the
          most judicious clientele. */}
        </p>

        {/* Call to Action */}
        <div className="text-center mt-12 relative z-10">
          <Link
            to="/about"
            className="px-8 py-3 bg-[#000300] text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
      
    {/* Separator */}
    <div className="w-full h-[2px] bg-gray-200 mt-8"></div>
    </section>
  );
};

export default AboutSection;

