import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Frequentqes = () => {
  const faqs = [
    // FAQ content remains unchanged
    {
      question: "What is the primary goal of your training program?",
      answer: "Our training program aims to empower individuals by providing tailored training that bridges the gap between skill development and employment. We focus on equipping our trainees with the skills they need to thrive in their chosen careers."
    },
    {
      question: "How does your program ensure job placement for trainees?",
      answer: "We offer guaranteed job placements as part of our program. Our approach involves personalized training and strong partnerships with employers to facilitate successful career transitions for our trainees."
    },
    {
      question: "What kind of training do you provide?",
      answer: "Our training is customized to meet the specific needs of each individual and the demands of the job market. We offer a range of programs designed to develop both technical and soft skills relevant to various career paths."
    },
    {
      question: "Who can benefit from your training program?",
      answer: "Our program is designed for individuals looking to enhance their skills and secure employment in their chosen field. Whether you’re a recent graduate, a career changer, or someone seeking professional development, our training is tailored to meet your needs."
    },
    {
      question: "How do I join the training program?",
      answer: "To join, you can apply through our website or contact our admissions team directly. We will guide you through the application process and help you select the training program that best fits your career goals."
    },
    {
      question: "What support is available during the training?",
      answer: "We provide ongoing support throughout the training program, including mentorship, career counseling, and access to resources that help you succeed. Our goal is to ensure you are fully prepared for your future career."
    },
    {
      question: "Are there any prerequisites for joining the program?",
      answer: "Prerequisites vary depending on the specific training program you choose. Generally, we look for a commitment to learning and a desire to advance your career. Specific requirements will be outlined during the application process."
    },
    {
      question: "What industries or job roles do you cover?",
      answer: "Our training programs cover a wide range of industries and job roles. We tailor our offerings based on current market demands and the interests of our trainees. For detailed information on available programs, please refer to our website or contact us directly."
    },
    {
      question: "Is there any cost associated with the training program?",
      answer: "Program costs vary depending on the training you choose. We offer various payment options and financial assistance to ensure our programs are accessible. Detailed information about costs and financial support is available upon request."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-2 lg:mx-auto my-8 p-4 sm:p-8 bg-[#000300] text-[#fff] rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <h3
              className="text-lg sm:text-xl font-semibold cursor-pointer flex justify-between items-center gap-4"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span
                className={`text-[#fff] bg-[#00df9a] rounded-full w-8 h-8 flex items-center justify-center transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <HiChevronDown className="text-xl" />
              </span>
            </h3>
            {activeIndex === index && (
              <p className="mt-4 text-sm sm:text-base text-gray-400">
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
