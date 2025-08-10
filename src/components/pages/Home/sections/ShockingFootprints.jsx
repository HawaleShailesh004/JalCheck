import React, { useEffect, useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const AnimatedCounter = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ""));
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count.toLocaleString()}L</>;
};

const ShockingFootprints = () => {
  const [showMore, setShowMore] = useState(false);

  const highImpact = [
    {
      label: "1 kg Beef",
      value: "15400L",
      sub: "The most water-intensive food in our database.",
      imageUrl: "/images/beef.png",
    },
    {
      label: "Smartphone",
      value: "12000L",
      sub: "Water hidden in electronics manufacturing.",
      imageUrl: "/images/phone.png",
    },
    {
      label: "Cotton T-shirt",
      value: "2700L",
      sub: "≈ 3 years of drinking water for 1 person.",
      imageUrl: "/images/shirt.png",
    },
  ];

  const commonItems = [
    {
      title: "1 Kg Rice",
      footprint: "2500L",
      description: "Enough water for a person to drink for ~3 years.",
      imageUrl: "/images/rice.png",
    },
    {
      title: "1 Kg Sugar",
      footprint: "1500L",
      description: "From cane growth to processing.",
      imageUrl: "/images/sugar.png",
    },
    {
      title: "1 Cup of Coffee",
      footprint: "140L",
      description: "Growing, washing & processing the beans.",
      imageUrl: "/images/coffee.png",
    },
    {
      title: "1 Pair of Jeans",
      footprint: "7600L",
      description: "From cotton farming to final product.",
      imageUrl: "/images/jeans.png",
    },
    {
      title: "1 Egg",
      footprint: "200L",
      description: "Feed production & poultry water needs.",
      imageUrl: "/images/egg.png",
    },
    {
      title: "1 Litre of Milk",
      footprint: "1020L",
      description: "Includes feed, drinking water & maintenance.",
      imageUrl: "/images/milk.png",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-24 py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-4xl  text-primary-dark">
          Everyday Items Using More Water Than <br></br>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
            You’ll Ever Drink
          </span>
        </h2>
        <p className="mt-1 text-sm text-slate-600  mx-auto">
          Common products in Indian homes hiding water costs that will leave you
          stunned.
        </p>
      </div>

      {/* High Impact Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {highImpact.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-primary-dark/95 to-primary-mid/85 text-white"
          >
            {/* Background Image */}
            <img
              src={item.imageUrl}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 p-6 flex flex-col justify-center items-start min-h-[220px]">
              <div className="text-3xl sm:text-4xl font-extrabold">
                <AnimatedCounter value={item.value} />
              </div>
              <div className="mt-1 text-lg font-semibold">{item.label}</div>
              <p className="text-sm text-blue-100 mt-2">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary-mid text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
        >
          {showMore ? "See Less" : "See More"}
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Common Items Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-hidden transition-all duration-700 ease-in-out ${
          showMore ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {commonItems.map((p, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 flex flex-col justify-end min-h-[220px]">
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-2xl font-extrabold text-white">
                {p.footprint}
              </p>
              <p className="text-sm text-blue-100">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShockingFootprints;
