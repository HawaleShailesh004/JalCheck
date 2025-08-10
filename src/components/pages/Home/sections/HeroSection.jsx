import React from "react";
import { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // This is where you would handle the search logic
    console.log("Searching for:", searchQuery);
    // For the hackathon MVP, you could simply scroll to a results section
    document
      .getElementById("search-results-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 z-[-10] bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero.webp')` }}
      ></div>
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-dark/30 via-blue-900/60 to-primary-light/80 animate-gradient-flow"></div>

      {/* Wave bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V100H1200V0C1131.7,47.2,1063.4,72.5,995,72.5S858.3,47.2,790,25,653.4-12.5,585,2.5,450.1,47.2,382,47.2,245.3,2.5,177,2.5,40.3,47.2,0,0Z"
            fill="#FFFFFF"
            className="opacity-100"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 px-6 sm:px-12  w-full flex flex-col items-center justify-center pt-20 pb-40">
        <h3 className="text-lg sm:text-lg mb-4 text-gray-200 font-inter animate-wave animate-ripple inline-block">
          <span className="inline-block animate-pulse-fast">💧</span> "Every
          Drop Counts"
        </h3>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up delay-200 w-full">
          KNOW INDIA’S <br></br>
          WATER IMPACT
        </h1>

        {/* Subheading */}
        <p className="text-lg px-8 sm:px-0 sm:text-xl lg:text-2xl mb-4 sm:mb-8 animate-fade-in-up delay-300 font-extralight">
          From farm to factory, see how much water your choices consume - and
          learn how to save it.
        </p>

        {/* Search Bar & CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 w-full max-w-xl animate-fade-in-up delay-400">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="e.g., Rice, Cotton, Smartphone..."
              className="w-full bg-[rgba(0, 4, 51, 0.5)] px-6 py-4 pr-16 rounded-full text-white font-medium placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.6),0_4px_6px_-2px_rgba(0,0,0,0.5)]"
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full px-6 rounded-full bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 text-white font-bold transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-8 animate-fade-in-up delay-500">
          {/* Secondary CTA */}
          <button className="px-8 py-4 rounded-full font-bold text-lg text-white border-2 border-white transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-900 hover:shadow-xl cursor-pointer">
            Calculate My Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
