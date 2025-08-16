import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar({ currentPercent, current, total }) {
  return (
    <div className="absolute top-0 w-[100%] z-1">
      <div className="w-full h-2  bg-gray-200 rounded-full overflow-hidden relative">
        {/* Wavy water effect */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          animate={{
            width: `${currentPercent}%`,
            backgroundPositionX: [`0%`, "100%"],
          }}
          transition={{
            width: { duration: 0.6, ease: "easeInOut" },
            backgroundPositionX: {
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            },
          }}
        />
      </div>
    </div>
  );
}
