import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Emily Chen",
    title: "Interior Designer",
    rating: 5,
    text: "I've had the pleasure of working with Nazee Creative Studios on several projects, and I'm always impressed by their professionalism and creativity. Their team is passionate, talented, and dedicated to delivering exceptional results.",
  },
  {
    name: "David Lee",
    title: "Art Collector",
    rating: 5,
    text: "Nazee Creative Studios brought my vision to life with their stunning artwork. Their attention to detail, innovative approach, and excellent communication made the entire process seamless and enjoyable. I highly recommend them to anyone seeking unique and captivating art solutions.",
  },
  {
    name: "Rachel Patel",
    title: "Architect",
    rating: 5,
    text: "As an architect, I've collaborated with Nazee Creative Studios on various projects, and their expertise in art consulting and logistics has been invaluable. Their team is knowledgeable, responsive, and committed to finding the perfect art solutions for our clients. I look forward to continuing our partnership.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full px-4 py-10">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[fff] p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#000000]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-[#000000]">{testimonial.title}</p>
              <div className="mt-2 flex justify-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={i < testimonial.rating ? "#F59E0B" : "#000000"} // Yellow or Black
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.572 8.332 1.191-6.001 5.858 1.418 8.269L12 18.896 5.583 23.477 7 15.208 1 9.35l8.332-1.191z" />
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="mt-4 text-[#000000] italic text-sm">
              {testimonial.text}
            </blockquote>
          </div>
        ))}
      </div>

      {/* Mobile View with Swiper and Autoslide */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          touchRatio={1}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 shadow-lg rounded-xl">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#000000]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#000000]">{testimonial.title}</p>
                  <div className="mt-2 flex justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill={i < testimonial.rating ? "#F59E0B" : "#000000"} // Yellow or Black
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.572 8.332 1.191-6.001 5.858 1.418 8.269L12 18.896 5.583 23.477 7 15.208 1 9.35l8.332-1.191z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-[#000000] italic text-sm">
                  {testimonial.text}
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
