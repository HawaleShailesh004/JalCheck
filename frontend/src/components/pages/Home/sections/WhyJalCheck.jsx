import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaLeaf, FaShoppingCart, FaChild } from "react-icons/fa";

const WhyJalCheck = () => {
  const points = [
    {
      icon: <MdOutlineWaterDrop className="text-3xl text-white" />,
      title: "Track Hidden Water Costs",
      text: "Know the real impact of your daily choices — from your cup of tea to your t-shirt.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaShoppingCart className="text-3xl text-white" />,
      title: "Make Smarter Purchases",
      text: "Choose products with lower water footprints and support conscious consumption.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaLeaf className="text-3xl text-white" />,
      title: "Support Sustainable Brands",
      text: "Encourage businesses to adopt water-friendly practices by choosing them.",
      color: "from-lime-400 to-green-500",
    },
    {
      icon: <FaChild className="text-3xl text-white" />,
      title: "Protect Future Generations",
      text: "Every drop saved today secures water for tomorrow’s India.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className=" w-full px-8 sm:px-16 lg:px-28 animate-fade-in-up delay-700">
      {/* Section Title */}
      <h2 className="text-4xl text-center text-primary-dark mb-12">
        Why India Needs{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
          JALCHECK
        </span>{" "}
         ?
      </h2>

      {/* Card Container */}
      <div className="bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 p-8 rounded-2xl shadow-lg text-white max-w-5xl mx-auto">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-6 py-6 border-b border-white/20 last:border-none transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 rounded-lg"
          >
            {/* Icon Wrapper */}
            <div
              className={`p-4 rounded-full bg-gradient-to-br ${point.color} shadow-lg flex items-center justify-center`}
            >
              {point.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">{point.title}</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                {point.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJalCheck;
