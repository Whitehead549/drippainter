import React from "react";
import AboutImage from "../assets/AboutIImage (1).svg"; // Replace with the correct path to your image

const About = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
    <section className="relative pt-16">
      {/* Image Section */}
      <div className="flex justify-center py-8">
        <img
          src={AboutImage}
          alt="About Us"
          className="w-48 h-16"
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
        {/* <h1 className="text-xl md:text-5xl font-semibold text-center mb-6 relative z-10">
          SERVING DISCERNING MUSEUMS, COLLECTORS, DESIGNERS & GALLERIES{" "}
          <span className="text-[#000300] font-extrabold">FOR 60+ YEARS.</span>
        </h1> */}

        {/* Paragraph */}
        <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 relative z-10 max-w-3xl mx-auto">
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

        {/* Our History Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Our Story
          </h2>
          <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
          Founded on the principles of creativity, innovation, and excellence,
          Nazee Creative Studios was established to bridge the gap between artists, art enthusiasts, and the art market.
          Our team of experienced artists, educators, and art professionals is dedicated to providing top-notch services that exceed our clients'
          expectations.

          </p>
        </div>

        {/* Our mission Section */}
        <div className="mt-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Our Mission
        </h2>
        <div className="lg:text-center md:text-center">
          <h3 className="text-xl md:text-2xl font-medium mb-3 text-center">
            At Nazee Creative Studios, our mission is to:
          </h3>
          <ul className="list-disc list-outside pl-5 text-[#000000] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            <li className="mb-2">Foster creativity and artistic excellence through education, training, and mentorship</li>
            <li className="mb-2 md:pl-3">Provide a platform for artists to showcase their work, connect with audiences, and access new markets</li>
            <li className="mb-2 lg:pl-4 md:pl-1">Deliver exceptional art services, including storage, consulting, and logistics, that cater to the unique needs of artists, collectors, and institutions</li>
            <li>Promote art appreciation, education, and community engagement through outreach programs, exhibitions, and events</li>
          </ul>
        </div>
        </div>

        {/* Our Goals Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Our Goals
          </h2>
          <div className="lg:text-center md:text-center">
            <h3 className="text-xl md:text-2xl font-medium mb-3 text-center">
              Our goals at Nazee Creative Studios are to:
            </h3>
            <ul className="list-disc list-outside pl-5 text-[#000000] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              <li className="mb-2">
                Establish ourselves as a leading art company, renowned for our commitment to artistic excellence, innovation, and customer satisfaction
              </li>
              <li className="mb-2 md:pl-1">
                Build a vibrant community of artists, art enthusiasts, and professionals who share our passion for art and creativity
              </li>
              <li className="mb-2 lg:pl-0 md:pl-2">
                Provide opportunities for artists to grow, learn, and succeed through our education, training, and mentorship programs
              </li>
              <li className="lg:pl-1 md:pl-1">
                Expand our services to meet the evolving needs of the art market, while maintaining our commitment to quality, integrity, and excellence
              </li>
            </ul>
          </div>
       </div>

       {/* Our Services Section */}
      <div className="mt-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Our Services
        </h2>
        <div className="lg:text-center md:text-center">
          <h3 className="text-xl md:text-xl font-medium mb-3 text-center">
            At Nazee Creative Studios, we offer a wide range of services designed to meet the diverse needs of artists, collectors, and institutions. These include:
          </h3>
          <ul className="list-disc list-outside pl-5 text-[#000000] text-base md:text-lg leading-relaxed max-w-3xl mx-auto lg:break-words lg:w-[50rem]">
            <li className="mb-2">
              Fine Art: Original paintings, prints, and sculptures created by our talented artists
            </li>
            <li className="mb-2">
              Digital Art: Digital paintings, illustrations, and designs created using cutting-edge technology
            </li>
            <li className="mb-2">
              Art Education: Workshops, classes, and training programs for artists, educators, and enthusiasts
            </li>
            <li className="mb-2">
              Art Storage: Secure, climate-controlled storage facilities for art collections and valuable items
            </li>
            <li className="mb-2">
              Art Consulting: Expert advice on art investment, collection management, and art market trends
            </li>
            <li>
              Art Logistics: Professional art handling, transportation, and installation services
            </li>
          </ul>
        </div>
      </div>

        {/* Partnerships Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Join Our Community
          </h2>
          <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
          At Nazee Creative Studios, we're passionate about building a vibrant community of artists, art enthusiasts,
           and professionals who share our passion for art and creativity. If you're interested in joining our community, learning more about our services,
            or exploring opportunities for collaboration, please don't hesitate to contact us:<br/>
            <span className="font-medium"> Email:</span> <span className="text-blue-900"> contact@nazeecreativestudios.com </span> <br/>

              We look forward to connecting with you and exploring the world of art together!
          </p>
        </div>

        
        
      </div>

      {/* Separator */}
      <div className="w-full h-[2px] bg-gray-200 mt-8"></div>
    </section>
    </div>
  );
};

export default About;