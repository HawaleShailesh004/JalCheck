import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaSearch,
  FaChartPie,
  FaClipboardCheck,
  FaRegChartBar,
  FaTachometerAlt,
  FaChartLine,
} from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import FAQData from "../../../assets/data/faqData.js";

export default function AboutPage() {
  const features = [
    {
      icon: <FaSearch className="text-5xl text-cyan-400" />,
      title: "Search Product Footprint",
      text: "Look up any product to see its green, blue, and grey water footprint instantly.",
    },
    {
      icon: <MdOutlineWaterDrop className="text-5xl text-blue-400" />,
      title: "Track Water Footprint",
      text: "Monitor your green, blue, and grey water usage for all daily activities.",
    },
    {
      icon: <FaLeaf className="text-5xl text-lime-400" />,
      title: "Sustainable Choices",
      text: "Discover eco-friendly alternatives & swaps to reduce water consumption.",
    },
    {
      icon: <FaChartPie className="text-5xl text-purple-400" />,
      title: "Data-Driven Insights",
      text: "Understand the water impact of products and lifestyle choices with clear metrics.",
    },
    {
      icon: <FaClipboardCheck className="text-5xl text-green-300" />,
      title: "Easy Assessment",
      text: "Answer a few simple questions to calculate your total water footprint.",
    },
    {
      icon: <FaRegChartBar className="text-5xl text-teal-400" />,
      title: "Track Savings",
      text: "Monitor liters saved over time as you implement recommended swaps and habits.",
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-28 py-20 max-w-7xl mx-auto flex flex-col gap-16 mt-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          About JALCHECK
        </h1>
        <p className="text-lg sm:text-xl text-gray-800">
          Understand your water usage, take action, and save water every day.
        </p>
      </div>

      <div className="relative w-full h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"></div>

      {/* Features Section */}
      <div>
        <h2 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 ">
          Why Use JalCheck?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 p-6 rounded-2xl shadow-lg text-white text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <section className="w-full py-24 px-6 sm:px-16 lg:px-28 bg-gray-50 relative overflow-hidden">
        {/* Background subtle waves or pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-cyan-100/20 via-blue-100/20 to-purple-100/20 -rotate-45 top-[-50%] left-[-50%]"></div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500  mb-16 animate-fade-in-up">
          Our Mission
        </h2>

        <p className="text-lg sm:text-xl max-w-4xl mx-auto text-center mb-12 leading-relaxed text-gray-700">
          Water is India’s most precious resource. Yet, our daily choices often
          consume far more than we realize.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
            JalCheck
          </span>{" "}
          empowers individuals to understand their water footprint, take
          informed actions, and make conservation a natural part of everyday
          life.
        </p>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto my-16 rounded-full"></div>

        {/* Why It Matters */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h3 className="text-3xl font-semibold text-gray-900">
            Why It Matters
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            India faces water challenges like groundwater depletion, seasonal
            shortages, and rising demand. Every individual's choices count. By
            understanding and reducing your personal water footprint, you
            contribute to a sustainable future for communities across the
            country.
          </p>

          <h3 className="text-3xl font-semibold text-gray-900 mt-12">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a future where every Indian is aware of their water
            consumption, makes informed choices, and actively participates in
            conserving this essential resource.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              JalCheck
            </span>{" "}
            is our step toward empowering sustainable habits and celebrating
            collective impact.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {FAQData.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 rounded-xl p-6 shadow-lg text-white"
            >
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="flex flex-col gap-2">
                {category.questions.map((q, qIdx) => (
                  <details
                    key={qIdx}
                    className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition"
                  >
                    <summary className="font-semibold">{q.question}</summary>
                    <p className="mt-2 text-white/80">{q.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"></div>
      {/* CTA */}
      <div className="text-center">
        <button
          className="px-8 py-4 bg-gradient-to-r from-primary-dark to-primary-mid  rounded-2xl text-white font-bold text-lg hover:scale-102 transition-all duration-300 cursor-pointer hover:opacity-70 "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Start Assessment
        </button>
      </div>
    </div>
  );
}
