import React from "react";
import image1 from "../../assets/Digital_art.jpg";
import image2 from "../../assets/Education.jpg";
import image3 from "../../assets/consultant.jpg";
import image4 from "../../assets/fine_art.jpg";
import image5 from "../../assets/room.jpg";
import image6 from "../../assets/logissss.jpg";


const ImageGrid = () => {
  const images = [
    { src: image4, title: "FINE ART" },
    { src: image1, title: "DIGITAL ART" },
    { src: image2, title: "ART EDUCATION" },
    { src: image5, title: "ART STORAGE" },
    { src: image3, title: "ART CONSULTING" },
    { src: image6, title: "ART LOGISTICS" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="text-[#ffffff] text-center py-4 md:py-6 lg:py-6 bg-[#000300]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Our Creative Collection
        </h1>
      </section>

      {/* Image Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 px-12 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto object-contain mb-2"
            />
            <h2 className="text-md font-semibold text-[#000000]">
              {image.title}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;
