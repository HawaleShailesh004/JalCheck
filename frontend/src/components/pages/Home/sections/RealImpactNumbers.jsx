import React, { useEffect, useState } from "react";
import { FaDatabase, FaMapMarkedAlt, FaExclamationTriangle } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";

const RealImpactNumbers = () => {
  const stats = [
    {
      icon: <FaDatabase className="text-5xl text-cyan-300 mb-2" />,
      number: 39,
      suffix: "+",
      title: "Key Products Tracked",
      text: "Growing every week with India-specific water data.",
    },
    {
      icon: <MdOutlineWaterDrop className="text-5xl text-blue-300 mb-2" />,
      number: 100,
      suffix: "M+",
      title: "Litres Potential Savings",
      text: "If consumers switch to low-footprint choices.",
    },
    {
      icon: <FaExclamationTriangle className="text-5xl text-yellow-300 mb-2" />,
      number: 70,
      suffix: "%",
      title: "Water Contaminated",
      text: "India’s urgent call for clean water action.",
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-teal-300 mb-2" />,
      number: 100,
      suffix: "%",
      title: "Nationwide Coverage Goal",
      text: "Footprint data for all states & UTs.",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            let start = 0;
            const end = stats[idx].number;
            const duration = 1500;
            const increment = end / (duration / 16);

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => {
                const updated = [...prev];
                updated[idx] = Math.floor(start);
                return updated;
              });
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".stat-item").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-[95%] rounded-xl mx-auto  bg-gradient-to-r from-primary-dark to-primary-mid py-20 mt-10 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <div className="flex justify-center">{stat.icon}</div>
            <h3 className="text-5xl font-extrabold mt-2">
              {counts[idx]}
              {stat.suffix}
            </h3>
            <p className="text-lg font-semibold mt-2">{stat.title}</p>
            <p className="text-sm text-blue-100 mt-1">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealImpactNumbers;
