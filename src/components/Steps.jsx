import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faBrush, faChalkboardTeacher, faCertificate } from "@fortawesome/free-solid-svg-icons";

const Steps = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-lg sm:text-md md:text-md lg:text-3xl font-extrabold text-transparent bg-clip-text bg-[#000000] mb-8 leading-tight tracking-wide">
          Join the Art Workshop in 4 Creative Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000300] text-[#00df9a] shadow-md mb-6">
              <FontAwesomeIcon icon={faPalette} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-[#000000] group-hover:text-custom_blue">
              Choose Your Style
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Pick a what matches your interests.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000300] text-[#00df9a] shadow-md mb-6">
              <FontAwesomeIcon icon={faBrush} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-[#000000] group-hover:text-custom_blue">
              Gather Your Materials
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Prepare your canvas for the session.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000300] text-[#00df9a] shadow-md mb-6">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-[#000000] group-hover:text-custom_blue">
              Learn from Experts
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Follow instructions from experienced artists.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000300] text-[#00df9a] shadow-md mb-6">
              <FontAwesomeIcon icon={faCertificate} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-[#000000] group-hover:text-custom_blue">
              Showcase Your Art
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Display your masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
