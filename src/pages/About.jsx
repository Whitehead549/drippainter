import React from "react";
import AboutImage from "../assets/AboutIImage (1).svg"; // Replace with the correct path to your image

const About = () => {
  return (
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
        <h1 className="text-xl md:text-5xl font-semibold text-center mb-6 relative z-10">
          SERVING DISCERNING MUSEUMS, COLLECTORS, DESIGNERS & GALLERIES{" "}
          <span className="text-[#000300] font-extrabold">FOR 60+ YEARS.</span>
        </h1>

        {/* Paragraph */}
        <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 relative z-10 max-w-3xl mx-auto">
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

        {/* Our History Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Our History
          </h2>
          <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Since our inception in 1964, Art Services has been at the forefront 
            of art preservation and presentation. Over the decades, we have 
            collaborated with renowned museums, private collectors, and leading 
            galleries to deliver exceptional craftsmanship and innovative solutions. 
            Our legacy is built on a foundation of trust, expertise, and an unwavering 
            commitment to excellence.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Our Team
          </h2>
          <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Our team comprises some of the most skilled artisans, conservators, 
            and technicians in the industry. Each member brings a wealth of 
            experience and a passion for art, ensuring that every project is 
            handled with the highest level of care and professionalism. From 
            framing to installation, our team works collaboratively to bring 
            your vision to life.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Unmatched Expertise</h3>
              <p className="text-[#000000] text-base leading-relaxed">
                With over 60 years of experience, we have the knowledge and 
                skills to handle even the most complex projects.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">State-of-the-Art Technology</h3>
              <p className="text-[#000000] text-base leading-relaxed">
                We utilize cutting-edge tools and techniques to ensure the 
                highest quality results for your artwork.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-[#000000] text-base leading-relaxed">
                Every project is tailored to meet your specific needs, ensuring 
                a seamless and satisfying experience.
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Our Partnerships
          </h2>
          <p className="text-[#000000] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Over the years, we have built strong relationships with some of the 
            most prestigious institutions and individuals in the art world. 
            Our partners include the Los Angeles County Museum of Art (LACMA), 
            The Getty Museum, and numerous private collectors and galleries. 
            These collaborations are a testament to our reputation for excellence 
            and reliability.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-[#000000] text-base leading-relaxed italic mb-4">
                "Spring Co Logistics has been a trusted, reliable partner for Bailiwick since the 
                first shipment they picked up. They give me peace of mind knowing that my US shipments will get to their destinations safely."
              </p>
              <p className="text-[#000000] text-base font-semibold">
               - Scott Hannah
              </p>
            </div>
            <div className="text-center">
              <p className="text-[#000000] text-base leading-relaxed italic mb-4">
                "I was really impressed with Spring Co Logistics' consultative approach to our distribution needs.
                 They simply have the best execution and customer service of all my supply chain providers."
              </p>
              <p className="text-[#000000] text-base font-semibold">
               - Avic Gonzalez
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-[2px] bg-gray-200 mt-8"></div>
    </section>
  );
};

export default About;