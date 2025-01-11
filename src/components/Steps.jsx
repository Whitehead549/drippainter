import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faFileInvoice, faShippingFast, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const Steps = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-lg sm:text-md md:text-md lg:text-3xl font-extrabold text-transparent bg-clip-text bg-[#000000] mb-8 leading-tight tracking-wide">
          Ship your package in just 4 super simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-[#000] shadow-md mb-6">
              <FontAwesomeIcon icon={faCalculator} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Request Quote
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Get an instant price estimate for your shipment.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-[#000] shadow-md mb-6">
              <FontAwesomeIcon icon={faFileInvoice} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Documentation & Payment
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Submit the required documents and complete payment securely.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-[#000] shadow-md mb-6">
              <FontAwesomeIcon icon={faShippingFast} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-[#000000] group-hover:text-custom_blue">
              Track Package
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Monitor your shipment status in real time.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-[#000] shadow-md mb-6">
              <FontAwesomeIcon icon={faBoxOpen} className="text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Package Safely Delivered
            </h3>
            <p className="text-sm text-[#000000] mt-2 text-center">
              Receive your package securely and on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
