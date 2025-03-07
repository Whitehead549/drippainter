import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonials = [
  {
    name: "Emily Chen",
    title: "Interior Designer",
    rating: 5,
    text: "I've enjoyed working with Nazee Creative Studios. Their passionate, talented team consistently delivers exceptional results.",
  },
  {
    name: "David Lee",
    title: "Art Collector",
    rating: 5,
    text: "Stunning artwork, excellent communication, and a seamless process. I highly recommend Nazee Creative Studios.",
  },
  {
    name: "Rachel Patel",
    title: "Architect",
    rating: 5,
    text: "Nazee Creative Studios provides invaluable art consulting and logistics expertise for our architectural projects.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-10">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
              <div className="mt-2 flex justify-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div>
            </div>
            <blockquote className="mt-4 text-gray-600 text-sm">
              {testimonial.text}
            </blockquote>
          </div>
        ))}
      </div>

      {/* Mobile View with Custom Carousel */}
      <div className="md:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full bg-white p-6 shadow-lg rounded-xl"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <div className="mt-2 flex justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-gray-600 text-sm">
                {testimonial.text}
              </blockquote>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        {/* <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#000]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;