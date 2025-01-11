import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTrophy, faTruck, faUsers } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon, title, value, inView, isThousandFormat }) => (
  <div className="flex flex-col justify-center items-center text-center bg-custom_blue hover:bg-[#0C1650] transition-all duration-300 ease-in-out shadow-full rounded-lg p-4 sm:p-6 m-2">
    <div className="text-gray-900 text-2xl sm:text-3xl mb-3">{icon}</div>
    <h3 className="text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">{title}</h3>
    <p className="text-3xl sm:text-4xl font-bold text-gray-600">
      {inView && (
        <>
          <CountUp
            end={isThousandFormat ? value / 1000 : value}
            duration={2}
            separator="," 
            decimals={isThousandFormat && value % 1000 !== 0 ? 1 : 0}
          />
          {isThousandFormat && "K"}
        </>
      )}
    </p>
  </div>
);

const DailyStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    {
      title: "Offices Worldwide",
      value: 85,
      icon: <FontAwesomeIcon icon={faGlobe} />,
      isThousandFormat: false,
    },
    {
      title: "Awards Won",
      value: 25,
      icon: <FontAwesomeIcon icon={faTrophy} />,
      isThousandFormat: false,
    },
    {
      title: "Delivered Packages",
      value: 112000,
      icon: <FontAwesomeIcon icon={faTruck} />,
      isThousandFormat: true,
    },
    {
      title: "Satisfied Clients",
      value: 92000,
      icon: <FontAwesomeIcon icon={faUsers} />,
      isThousandFormat: true,
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 sm:w-8/12  w-8/12 md:w-10/12 lg:w-9/12 max-w-screen-xl mx-auto"
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            inView={inView}
            isThousandFormat={stat.isThousandFormat}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyStats;
