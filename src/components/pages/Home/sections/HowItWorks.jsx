import React from "react";
import { FaSearch, FaLeaf } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-5xl text-cyan-400" />,
      title: "Search or Scan",
      text: "Enter a product name, scan a barcode, or upload a photo to start.",
    },
    {
      icon: <MdOutlineWaterDrop className="text-5xl text-blue-400" />,
      title: "See the Water Footprint",
      text: "Get India-specific data with green, blue, and grey footprint breakdowns.",
    },
    {
      icon: <FaLeaf className="text-5xl text-lime-400" />,
      title: "Act & Save",
      text: "View alternatives, saving tips, and water-conscious brands you can support.",
    },
  ];

  return (
    <section className="mt-20 px-8 sm:px-16 lg:px-28 animate-fade-in-up delay-700">
      <h2 className="text-4xl  text-center text-primary-dark mb-12">
        How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">JALCHECK</span>{" "}
        Works ?
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12 relative max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {/* Step Card */}
            <div className="bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 rounded-2xl shadow-lg text-white p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-mid/40 max-w-[280px]">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-blue-100">{step.text}</p>
            </div>

            {/* DESKTOP Curved Arrows */}
            {index < steps.length - 1 && (
              <svg
                className="hidden sm:block absolute top-[75px] right-[-70px] w-[100px] h-[70px]"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 30 C 50 0, 50 60, 100 30"
                  stroke="url(#grad1)"
                  strokeWidth="4"
                  fill="transparent"
                  className="animate-dash"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style={{
                        stopColor: "--color-primary-dark",
                        stopOpacity: 1,
                      }}
                    />
                    <stop
                      offset="100%"
                      style={{
                        stopColor: "--color-primary-mid",
                        stopOpacity: 1,
                      }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {/* MOBILE Vertical Arrows */}
            {index < steps.length - 1 && (
              <svg
                className="block sm:hidden my-4 w-[40px] h-[60px] absolute top-[81%] right-[45%]"
                viewBox="0 0 40 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0 C 35 15, 5 45, 20 60"
                  stroke="url(#grad2)"
                  strokeWidth="4"
                  fill="transparent"
                  className="animate-dash"
                />
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop
                      offset="0%"
                      style={{
                        stopColor: "--color-primary-dark",
                        stopOpacity: 1,
                      }}
                    />
                    <stop
                      offset="100%"
                      style={{
                        stopColor: "--color-primary-mid",
                        stopOpacity: 1,
                      }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default HowItWorks;
