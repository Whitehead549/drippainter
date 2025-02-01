import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import image1 from "../assets/art/Camino College Art.jpg";
import image2 from "../assets/art/Oil.jpg";
import image3 from "../assets/art/Soul Awakening.jpg";
import image4 from "../assets/art/Sunflower.jpg";
import image5 from "../assets/art/Windswept_Tree.jpg";
import image6 from "../assets/art/kioshi.jpg";
import image7 from "../assets/art/progress.jpg";
import image8 from "../assets/art/soft.jpg";

const Painting = () => {
  const [visibleBio, setVisibleBio] = useState(null);

  // Image Grid Data
  const images = [
    {
      src: image4,
      title: "Emily Wilson",
      bio: "Fine art encompasses the visual arts, including painting, sculpture, and drawing. It focuses on creativity, aesthetics, and mastery of materials to express unique ideas and emotions.",
    },
    {
      src: image1,
      title: "Abigail Russell",
      bio: "Digital art leverages technology to create stunning visuals, combining traditional techniques with modern tools. It is used for animation, graphic design, and multimedia projects.",
    },
    {
      src: image2,
      title: "Lucas Jensen",
      bio: "Art education promotes creativity and self-expression. It encourages learning through drawing, painting, and exploring the history and techniques of visual arts.",
    },
    {
      src: image5,
      title: "Evelyn White",
      bio: "Art storage involves the safe preservation of artworks, using specialized environments to protect them from damage caused by light, humidity, or temperature changes.",
    },
    {
      src: image3,
      title: "John Brooks",
      bio: "Art consulting provides guidance for selecting and curating art collections. It involves expertise in market trends and client preferences to create inspiring spaces.",
    },
    {
      src: image6,
      title: "Oliver Ross",
      bio: "Art logistics handles the transportation and handling of artworks. It ensures safe delivery and installation, often requiring customized packaging and expertise.",
    },
    {
      src: image7,
      title: "Cathy Fuksa",
      bio: "Sculpture involves creating three-dimensional artworks by shaping materials like stone, metal, or clay. It is an ancient art form that continues to evolve.",
    },
    {
      src: image8,
      title: "Liam Fuksa",
      bio: "Crafts emphasize handmade artistry, combining skill and creativity to produce unique items such as pottery, textiles, and jewelry.",
    },
  ];

  const toggleBio = (index) => {
    setVisibleBio(visibleBio === index ? null : index);
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <div className="mx-10 lg:mx-[18rem] pt-12 lg:pt-16">
        <section className="py-10 px-6 max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-black text-lg md:text-xl lg:text-2xl uppercase tracking-wide font-light">
              Artist Paintings
            </h1>
            <div className="h-0.5 w-full bg-black mt-2"></div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="text-left p-4 bg-gray-50">
               <img
              src={image.src}
              alt={image.title}
              className="w-full h-48 object-cover mb-4"
            />

                <div className="flex items-center gap-2">
                  <h2 className="text-md font-semibold text-black">{image.title}</h2>
                  <HiChevronDown
                    className={`cursor-pointer text-gray-500 transition-transform ${
                      visibleBio === index ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => toggleBio(index)}
                  />
                </div>
                {visibleBio === index && (
                  <p className="text-gray-700 mt-2 text-sm">{image.bio}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Painting;
