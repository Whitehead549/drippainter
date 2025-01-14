import React, { useEffect, useState } from "react";
import sampleImage from "../assets/ship.jpg"; // Update with your image path

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = sampleImage;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-100 flex items-center justify-center">
      {/* Show placeholder or loader until image is fully loaded */}
      {isLoaded ? (
        <img
          src={sampleImage}
          alt="Sample"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center text-gray-400">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Home;
