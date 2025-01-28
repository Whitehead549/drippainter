import React from "react";

const ContactUs = () => {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-12 pt-24">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8">
        Get in Touch with Nazee Creative Studios!
      </h1>

      {/* Contact Information */}
      <div className="text-center mb-12">
        <p className="text-[#000000] text-base md:text-lg mb-2">
          <strong>Email:</strong> contact@nazeecreativestudios.com
        </p>
        <p className="text-[#000000] text-base md:text-lg">
          <strong>Address:</strong> 1192 Maud Street, Wilmington, DE 19801
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Use the form below to send us a message:
        </h2>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#000000]">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* House Address */}
          <div>
            <label htmlFor="houseAddress" className="block text-sm font-medium text-[#000000]">
              House Address
            </label>
            <input
              type="text"
              id="houseAddress"
              name="houseAddress"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your house address"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-[#000000]">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your country"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#000000]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium text-[#000000]">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#000000]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#000300] text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Separator */}
      <div className="w-full h-[2px] bg-gray-200 mt-12"></div>
    </section>
  );
};

export default ContactUs;