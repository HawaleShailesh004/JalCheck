// /AssessmentTool/StepCard.jsx
import React, { useState, useEffect } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { motion } from "framer-motion";

export default function StepCard({ data, onAnswer, stepNumber, totalSteps }) {
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    // Reset animation when step changes
    setFillPercent(0);
    setTimeout(
      () => setFillPercent(Math.round((stepNumber / totalSteps) * 100)),
      100
    );
  }, [data.id, data.text]);

  // Break step
  if (data.type === "break") {
    return (
      <div className="bg-gradient-to-br from-primary-dark/95 to-primary-mid/90 rounded-2xl shadow-lg p-8 text-white w-[80%] mx-auto flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-extrabold mb-4 text-center"
        >
          {data.text}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-cyan-200 mt-2"
        >
          Take a short pause, stretch your legs, and get ready for the next
          section! 💪
        </motion.p>
      </div>
    );
  }

  // Question step
  return (
    <div
      className="relative rounded-2xl shadow-lg p-8 text-white w-[100%] mx-auto overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(0, 41, 60, 0.95), rgba(0, 115, 150, 0.9))",
      }}
    >
      {/* Water Fill Animation */}
      <div
        className="absolute bottom-0 left-0 w-full bg-cyan-500/30 animate-wave"
        style={{
          height: `${fillPercent}%`,
          transition: "height 1.2s ease-out",
          zIndex: 0,
        }}
      ></div>

      {/* Step counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4 relative z-10"
      >
        <MdOutlineWaterDrop className="text-cyan-300 text-xl" />
        <h2 className="text-sm font-semibold tracking-wide text-cyan-200 uppercase">
          Step {stepNumber} of {totalSteps}
        </h2>
      </motion.div>

      {/* Question */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl sm:text-3xl font-extrabold mb-8 leading-snug relative z-10"
      >
        {data.question}
      </motion.p>

      {/* Options */}
      {/* Options */}
      <div className="space-y-4 relative z-10">
        {data.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(data.question, option)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="w-full py-4 px-6 rounded-xl bg-white/10 border border-white/20 hover:bg-cyan-400/20 text-white font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-300 flex justify-between items-center"
          >
            <span>{option.label}</span>
            {option.points !== undefined && (
              <span className="text-cyan-200 text-sm ml-2">
                +{option.points.toLocaleString()} L
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
