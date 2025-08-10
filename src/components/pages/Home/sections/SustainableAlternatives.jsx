import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AnimatedCounter = ({ value, suffix = "L Saved", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="text-lg font-semibold text-green-300">
      {count.toLocaleString()} {suffix}
    </span>
  );
};

const SustainableAlternatives = () => {
  const swaps = [
    {
      before: "1 Kg Beef",
      beforeFP: "15,400L",
      after: "1 Kg Lentils",
      afterFP: "4,300L",
      saved: 11100,
    },
    {
      before: "Cotton T-shirt",
      beforeFP: "2,700L",
      after: "Hemp T-shirt",
      afterFP: "1,200L",
      saved: 1500,
    },
    {
      before: "1 Kg Sugar",
      beforeFP: "1,500L",
      after: "1 Kg Jaggery",
      afterFP: "1,000L",
      saved: 500,
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-24 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-primary-dark">
          Sustainable{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
            Alternatives
          </span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          For example, here’s how a simple swap can save thousands of litres of
          water.
        </p>
      </div>

      {/* Swap Rows */}
      <div className="space-y-3 w-[95%] sm:space-y-4 max-w-3xl mx-auto">
        {swaps.map((swap, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 px-3 sm:px-5 py-4 sm:py-5 rounded-xl text-white shadow-lg text-xs sm:text-sm md:text-base gap-2 sm:gap-4"
          >
            {/* Before */}
            <div className="flex flex-col items-center text-center w-[30%]">
              <span className="font-bold leading-tight">{swap.before}</span>
              <span className="text-blue-200 text-[10px] sm:text-xs">
                {swap.beforeFP}
              </span>
            </div>

            {/* Arrow */}
            <FaArrowRightLong className="text-cyan-300 text-lg sm:text-xl md:text-2xl" />

            {/* After */}
            <div className="flex flex-col items-center text-center w-[30%]">
              <span className="font-bold leading-tight">{swap.after}</span>
              <span className="text-blue-200 text-[10px] sm:text-xs">
                {swap.afterFP}
              </span>
            </div>

            {/* Savings */}
            <div className="text-right w-[30%] text-[6px]">
              <AnimatedCounter value={swap.saved} />
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default SustainableAlternatives;
