// src/hooks/useImageLoader.js
import { useState, useEffect } from "react";

const useImageLoader = (images) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages)
      .then(() => setIsLoaded(true))
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoaded(true); // Fallback: Consider loading complete even if some images fail
      });
  }, [images]);

  return isLoaded;
};

export default useImageLoader;
