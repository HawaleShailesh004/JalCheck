import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";

const ImpactStatsCards = () => {
  return (
    <>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full animate-fade-in-up delay-600 px-35 h-auto">
        {/* Card 1: Groundwater Depletion */}
        <div className="bg-gradient-to-br from-primary-dark from-20% to-primary-mid backdrop-blur-lg p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105 hover:opacity-80">
          <div className="flex items-center space-x-3 mb-2">
            <IoWarningOutline className="text-3xl text-blue-400" />
            <h3 className="text-2xl font-bold">600M+</h3>
          </div>
          <p className="text-sm text-blue-100">
            People face extreme water stress in India
          </p>
        </div>

        {/* Card 2: Water Pollution */}
        <div className="bg-gradient-to-br from-primary-dark from-20% to-primary-mid backdrop-blur-lg p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105 hover:opacity-80">
          <div className="flex items-center space-x-3 mb-2">
            <MdOutlineWaterDrop className="text-3xl text-cyan-400" />
            <h3 className="text-2xl font-bold">70%</h3>
          </div>
          <p className="text-sm text-blue-100">
            Of India's water is severely contaminated
          </p>
        </div>

        {/* Card 3: Economic Impact */}
        <div className="bg-gradient-to-br from-primary-dark from-20% to-primary-mid backdrop-blur-lg p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105 hover:opacity-80">
          <div className="flex items-center space-x-3 mb-2">
            <FaMoneyBillWave className="text-3xl text-green-400" />
            <h3 className="text-2xl font-bold">$40B+</h3>
          </div>
          <p className="text-sm text-blue-100">
            Annual cost of the water crisis in India
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto border-2 border-primary-dark shadow-[0px_3px_3px_rgba(30,58,138,0.8)] rounded-lg"></div>
    </>
  );
};

export default ImpactStatsCards;
