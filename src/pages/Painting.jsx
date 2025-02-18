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
      bio: "Emily Wilson is a muralist known for her vibrant, large-scale works that celebrate cultural diversity and community spirit.",
    },
    {
      src: image1,
      title: "Abigail Russell",
      bio: "Abigail Russell is a muralist who uses her art to advocate for social change and empower marginalized communities.",
    },
    {
      src: image2,
      title: "Lucas Jensen",
      bio: "Lucas Jensen is a muralist who specializes in creating murals that tell the stories of local communities and their histories.",
    },
    {
      src: image5,
      title: "Evelyn White",
      bio: "Evelyn White is a muralist who uses vibrant colors and playful imagery to create murals that bring joy and wonder to communities.",
    },
    {
      src: image3,
      title: "John Darwin",
      bio: "John Darwin is a muralist known for his minimalist and geometric designs that bring a sense of order and harmony to urban spaces.",
    },
    {
      src: image6,
      title: "Oliver Ross",
      bio: "Oliver Ross is a muralist known for his bold, abstract murals that challenge traditional perspectives and provoke thought.",
    },
    {
      src: image7,
      title: "Cathy Fuksa",
      bio: "Cathy Fuksa is a muralist whose work focuses on creating immersive and interactive experiences for viewers.",
    },
    {
      src: image8,
      title: "Liam Tjosaas",
      bio: "Liam Tjosaas is a skilled muralist who specializes in photorealistic portraits and intricate details.",
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
            PAINTINGS BY OUR ARTISTS
            </h1>
            <div className="h-0.5 w-full bg-black mt-2"></div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
