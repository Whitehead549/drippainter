// src/components/Spinner.jsx
import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200  z-[99999]">
      <FaSpinner className="animate-spin text-4xl text-gray-400" />
    </div>
  );
};

export default Spinner;
