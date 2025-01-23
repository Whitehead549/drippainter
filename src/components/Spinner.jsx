// src/components/Spinner.jsx
import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <FaSpinner className="animate-spin text-4xl text-gray-400" />
    </div>
  );
};

export default Spinner;
