import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Frequentqes = () => {
  const faqs = [
    // FAQ content remains unchanged
    {
      question: "Can I commission a custom art piece?",
      answer: "Yes, we accept commissioned art projects. Please contact us to discuss your ideas and requirements."
    },
    
    {
      question: "Do you offer art classes or workshops?",
      answer: "Yes, we offer various art education programs, including classes, workshops, and training sessions."
    },
    {
      question: "What types of art do you store?",
      answer: "We store various types of art, including paintings, sculptures, prints, and other valuable items."
    },
    {
      question: "What types of art do you create?",
      answer: "We create original paintings, prints, sculptures, digital paintings, illustrations, and designs."
    },
    {
      question: "Do you offer art transportation services?",
      answer: "Yes, we provide professional art handling, transportation, and installation services."
    },
    {
      question: "What are your payment terms?",
      answer: "We accept various payment methods, including credit cards, bank transfers, bitcoins and checks."
    },
   
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-2 lg:mx-auto my-8 p-4 sm:p-8 bg-[#000300] text-[#fff] rounded-xl shadow-lg">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-4">
            <h3
              className="text-sm sm:text-md font-semibold cursor-pointer flex justify-between items-center gap-4"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span
                className={`text-[#000] bg-[#ffffff] rounded-full w-6 h-6 flex items-center justify-center transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <HiChevronDown className="text-xl" />
              </span>
            </h3>
            {activeIndex === index && (
              <p className="mt-4 text-sm sm:text-base text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequentqes;
