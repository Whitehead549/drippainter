import React from "react";
import image1 from "../../resource/staue.png";
import image2 from "../../resource/art.png";
import image3 from "../../resource/connect.jpg";
import image4 from "../../resource/storage.png";
import image5 from "../../resource/package.png";
import image6 from "../../resource/delivery.jpg";

const ImageGrid = () => {
  const images = [
    { src: image1, title: "Statue Art" },
    { src: image2, title: "Abstract Art" },
    { src: image3, title: "Connection" },
    { src: image4, title: "Storage Solutions" },
    { src: image5, title: "Package Handling" },
    { src: image6, title: "Fast Delivery" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="text-[#000000] text-center py-4 md:py-8 lg:py-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Our Creative Collection
        </h1>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-2 px-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-md p-1 sm:p-1 md:p-4 lg:p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-full h-32 mb-2">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
            <h2 className="text-md font-semibold text-[#000000] text-center">
              {image.title}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;
