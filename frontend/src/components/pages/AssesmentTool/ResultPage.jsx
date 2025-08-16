import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProductById } from "../../../utils/dataUtils";
import {
  FaTint,
  FaLeaf,
  FaRecycle,
  FaRedo,
  FaChartPie,
  FaExchangeAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";

const AVG_INDIAN_ANNUAL = 1200000; // L/year (per capita availability)
const DRINKING_WATER_PER_PERSON_PER_YEAR = 1000; // ~2.7L/day * 365

const unitToYearMultiplier = {
  "per day": 365,
  "per week": 52,
  "per month": 12,
  "per year": 1,
};

export default function ResultPage() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [totals, setTotals] = useState({
    total: 0,
    green: 0,
    blue: 0,
    grey: 0,
  });
  const [breakdown, setBreakdown] = useState({});
  const [topItems, setTopItems] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const parseAnswerCount = (ans) => {
    const clean = ans.replace(/[<>]/g, "").split(" ")[0];
    if (clean.includes("-")) {
      const [low, high] = clean.split("-").map(Number);
      return (low + high) / 2;
    }
    return parseFloat(clean) || 0;
  };

  const normalizeToYear = (count, unit, litersPerUnit) => {
    const multiplier = unitToYearMultiplier[unit?.toLowerCase()] || 1;
    return count * litersPerUnit * multiplier;
  };

  const calculateTotals = (questions) => {
    let totals = { total: 0, green: 0, blue: 0, grey: 0 };
    let items = [];
    let allRecs = [];

    questions.forEach((q) => {
      const product = getProductById(q.id);
      if (!product) return;

      const count = parseAnswerCount(q.ans);

      const annualGreen = normalizeToYear(
        count,
        product.unitFrequency || "per year",
        product.footprints.green
      );
      const annualBlue = normalizeToYear(
        count,
        product.unitFrequency || "per year",
        product.footprints.blue
      );
      const annualGrey = normalizeToYear(
        count,
        product.unitFrequency || "per year",
        product.footprints.grey
      );
      const annualTotal = normalizeToYear(
        count,
        product.unitFrequency || "per year",
        product.totalFootprint
      );

      totals.green += annualGreen;
      totals.blue += annualBlue;
      totals.grey += annualGrey;
      totals.total += annualTotal;

      items.push({ ...product, annualLitres: annualTotal });

      // Pull alternatives from DB
      if (Array.isArray(product.alternatives)) {
        product.alternatives.forEach((alt) => {
          let savings = alt.savings;
          if (!savings && alt.totalFootprint) {
            savings = product.totalFootprint - alt.totalFootprint;
          }
          if (savings > 0) {
            allRecs.push({
              from: product.title,
              fromImage: product.imageUrl || "/images/default.png",
              to: alt.name,
              toImage: alt.imageUrl || "/images/default.png",
              savings,
            });
          }
        });
      }
    });

    // Top 3 high-impact items
    const top3 = [...items]
      .sort((a, b) => b.annualLitres - a.annualLitres)
      .slice(0, 3);

    // Remove duplicate recommendations
    const uniqueRecs = [];
    const seen = new Set();
    allRecs
      .sort((a, b) => b.savings - a.savings)
      .forEach((rec) => {
        const key = `${rec.from}-${rec.to}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueRecs.push(rec);
        }
      });

    return { totals, top3, recs: uniqueRecs.slice(0, 6) };
  };

  useEffect(() => {
    const quesLC = JSON.parse(localStorage.getItem("questions")) || [];
    setQuizQuestions(quesLC);

    const { totals, top3, recs } = calculateTotals(quesLC);
    setTotals(totals);
    setTopItems(top3);
    setRecommendations(recs);

    setBreakdown({
      year: totals.total,
      month: totals.total / 12,
      week: totals.total / 52,
      day: totals.total / 365,
    });
  }, []);

  const usagePercent = ((totals.total / AVG_INDIAN_ANNUAL) * 100).toFixed(1);
  const equivalentPeople = Math.round(
    totals.total / DRINKING_WATER_PER_PERSON_PER_YEAR
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto flex flex-col gap-10 w-full">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-primary-dark flex justify-center items-center gap-2">
          <FaChartPie className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
          Assessment Complete 🎉
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Your estimated water footprint is:
        </p>
      </div>

      {/* Total Water Usage */}
      <motion.div
        className="text-5xl font-extrabold bg-gradient-to-r from-primary-dark to-primary-mid bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {totals.total.toLocaleString()} L/year
      </motion.div>
      <p className="text-center text-gray-500">
        {usagePercent}% of the average Indian's annual per capita water
        availability
      </p>
      <p className="text-center text-sm text-gray-600 italic">
        Equal to the annual drinking water needs of{" "}
        <strong>{equivalentPeople}</strong> people in India
      </p>

      {/* Comparison Bar */}
      <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="bg-gradient-to-r from-primary-dark to-primary-mid h-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(usagePercent, 100)}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Info Context */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
        <FaInfoCircle /> Average urban Indian uses ~135L/day for domestic needs;
        food & products can exceed this many times.
      </div>

      {/* Water Type Breakdown */}
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          {
            label: "Green Water",
            icon: <FaLeaf />,
            color: "text-green-700",
            bg: "bg-green-50",
            value: totals.green,
          },
          {
            label: "Blue Water",
            icon: <MdOutlineWaterDrop />,
            color: "text-blue-700",
            bg: "bg-blue-50",
            value: totals.blue,
          },
          {
            label: "Grey Water",
            icon: <FaTint />,
            color: "text-gray-700",
            bg: "bg-gray-50",
            value: totals.grey,
          },
        ].map((item) => (
          <motion.div
            key={item.label}
            className={`${item.bg} p-5 rounded-xl shadow-md`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className={`flex items-center gap-3 font-semibold ${item.color}`}
            >
              {item.icon} {item.label}
            </div>
            <p className="mt-1 font-bold text-lg">
              {item.value.toLocaleString()} L/year
            </p>
          </motion.div>
        ))}
      </div>

      {/* Usage Over Time */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-primary-dark to-primary-mid shadow-lg text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaChartPie /> Your Usage Over Time
        </h3>
        <div className="space-y-2">
          {Object.entries(breakdown).map(([period, value]) => (
            <p
              key={period}
              className="flex justify-between bg-white/10 px-4 py-2 rounded-lg"
            >
              <span className="capitalize">{period}</span>
              <span className="font-semibold">{value.toLocaleString()} L</span>
            </p>
          ))}
        </div>
      </div>

      {/* Top Items */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 shadow-lg text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-4">
          <FaRecycle /> Top 3 High-Impact Items
        </h3>
        {topItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-white/10 px-4 py-2 rounded-lg my-2"
          >
            <span>{item.title}</span>
            <span>{item.annualLitres.toLocaleString()} L/year</span>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaExchangeAlt /> Recommended Swaps
        </h3>
        {recommendations.length > 0 ? (
          recommendations.map((rec, idx) => (
            <div
              key={idx}
              className="flex justify-between bg-white/10 px-4 py-2 rounded-lg my-2"
            >
              <span>
                {rec.from} → {rec.to}
              </span>
              <span className="text-sm">
                Save {rec.savings.toLocaleString()} L/year
              </span>
            </div>
          ))
        ) : (
          <p className="italic">No recommendations available.</p>
        )}
      </div>

      {/* Restart */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            localStorage.removeItem("questions");
            window.location.reload();
          }}
          className="px-6 py-3 bg-gradient-to-r from-primary-dark to-primary-mid text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 cursor-pointer"
        >
          <FaRedo /> Restart Assessment
        </button>
      </div>
    </div>
  );
}
