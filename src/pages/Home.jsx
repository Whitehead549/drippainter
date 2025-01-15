import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import Font Awesome spinner
import sampleImage from "../assets/ship.jpg"; // Update with your image path

const Home = ({ setIsHomeLoading }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = sampleImage;
    img.onload = () => {
      setIsLoaded(true);
      setIsHomeLoading(false); // Notify App that loading is complete
    };
  }, [setIsHomeLoading]);

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
          <FaSpinner className="animate-spin text-4xl" /> {/* Spinner animation */}
        </div>
      )}
    </div>
  );
};

export default Home;
