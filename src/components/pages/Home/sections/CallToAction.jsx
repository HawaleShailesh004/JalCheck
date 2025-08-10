import React from "react";
import { FaWater, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section
      className="w-[95%] rounded-xl mb-10 mx-auto py-16 bg-gradient-to-br from-primary-dark via-primary-mid to-cyan-400 
             text-white relative overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
    >
      {/* Water wave background overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/waves-pattern.svg')] bg-cover bg-center"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaWater className="text-5xl text-cyan-200 drop-shadow-lg" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl leading-tight">
          Start Making{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">Water-Smart Choices</span> Today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-sm font-light text-blue-100 max-w-2xl mx-auto">
          Every drop counts - track, compare, and choose better. For example,
          simple swaps like beef → lentils can save thousands of litres. These
          are just a few samples — imagine the impact at scale.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Explore Footprints
          </button>
          <button className="border border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary-dark transition-all cursor-pointer">
            See Sustainable Swaps
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
