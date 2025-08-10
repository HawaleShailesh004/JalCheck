import React, { useEffect, useState } from "react";
import { getAllProductsByTitle } from "../../../../utils/dataUtils";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    document
      .getElementById("search-results-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (searchQuery) {
      setProducts(getAllProductsByTitle(searchQuery) || []);
      setShowResults(true);
    } else {
      setProducts([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#search-results-dropdown") &&
        !event.target.closest("#search-input")
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
      <div className="relative z-20 px-6 sm:px-12 w-full flex flex-col items-center justify-center pt-20 pb-40">
        <h3 className="text-lg sm:text-lg mb-4 text-gray-200 font-inter animate-wave animate-ripple inline-block">
          <span className="inline-block animate-pulse-fast">💧</span> "Every
          Drop Counts"
        </h3>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up delay-200 w-full">
          KNOW INDIA’S <br />
          WATER IMPACT
        </h1>

        {/* Subheading */}
        <p className="text-lg px-8 sm:px-0 sm:text-xl lg:text-2xl mb-4 sm:mb-8 animate-fade-in-up delay-300 font-extralight">
          From farm to factory, see how much water your choices consume - and
          learn how to save it.
        </p>

        {/* Search Bar & CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 w-full max-w-xl animate-fade-in-up delay-400 relative">
          <div className="relative w-full">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="e.g., Rice, Cotton, Smartphone..."
              className="w-full bg-[rgba(0,4,51,0.5)] px-6 py-4 pr-16 rounded-full text-white font-medium placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.6),0_4px_6px_-2px_rgba(0,0,0,0.5)]"
              autoComplete="off"
              onFocus={() => {
                if (products.length > 0) setShowResults(true);
              }}
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full px-6 rounded-full bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 text-white font-bold transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer"
            >
              Search
            </button>

            {/* Search Results Dropdown */}
            <div
              id="search-results-dropdown"
              className={`
                absolute top-full left-0 mt-2 w-full max-w-2xl bg-white rounded-lg shadow-xl text-primary-dark
                overflow-hidden
                transition-all duration-300 ease-in-out
                
                ${
                  showResults
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }
              `}
              style={{ transformOrigin: "top", zIndex: 20 }}
            >
              {products.length > 0 ? (
                <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                  {products.map((product) => (
                    <li
                      key={product.id}
                      className="px-6 py-4 cursor-pointer hover:bg-primary-light/10 transition-colors duration-200 flex flex-col"
                      onClick={() => {
                        setSearchQuery(product.title);
                        setShowResults(false);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">
                          {product.title}
                        </h4>
                        {product.category && (
                          <span className="text-xs font-medium text-primary-mid bg-primary-light/20 px-2 py-0.5 rounded-full">
                            {product.category}
                          </span>
                        )}
                      </div>
                      {product.description && (
                        <p className="mt-1 text-sm text-gray-600 text-left">
                          {product.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-center text-gray-500">
                  No results found.
                </p>      
              )}
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-8 animate-fade-in-up delay-500">
          <button
            disabled={showResults}
            className={`
    px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 relative
    ${
      showResults
        ? "bg-gray-400 border-gray-400 text-gray-700 cursor-not-allowed pointer-events-none hover:none shadow-none z-0 hidden"
        : "text-white border-white hover:scale-105 hover:bg-white hover:text-blue-900 hover:shadow-xl cursor-pointer z-1 block"
    }
  `}
          >
            Calculate My Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
