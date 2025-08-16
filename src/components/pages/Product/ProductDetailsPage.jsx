// src/components/ProductPage/ProductDetailsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowLeft, Droplet } from "lucide-react";
import { getProductByTitle } from "../../../utils/dataUtils";

const COLORS = [
  "#34D399", // Emerald Green - Green Water
  "#60A5FA", // Sky Blue - Blue Water
  "#9CA3AF", // Neutral Gray - Grey Water
];

const ProductDetailsPage = () => {
  const { title } = useParams();
  const product = getProductByTitle(title);

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-red-500 text-lg font-semibold">Product not found</p>
        <Link to="/browse" className="text-primary-dark underline">
          Back to Browse
        </Link>
      </div>
    );
  }

  const footprintData = [
    { name: "Green Water (Rain)", value: product.footprints.green },
    { name: "Blue Water (Irrigation)", value: product.footprints.blue },
    { name: "Grey Water (Pollution)", value: product.footprints.grey },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 mt-10">
      {/* Back Button */}
      <Link
        to="/browse"
        className="flex items-center gap-2 text-primary-dark mb-8 hover:underline"
      >
        <ArrowLeft size={18} /> Back to Browse
      </Link>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary-mid/40">
          <img
            src={`/${product.imageUrl}`}
            alt={product.title}
            className="w-full h-[400px] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-primary-mid/30"></div>
        </div>

        {/* Title & Info */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            {product.title}
          </h1>
          <span className="inline-block bg-gradient-to-br from-primary-dark/90 to-primary-mid/80 text-white text-sm font-semibold px-4 py-1 rounded-full select-none shadow-sm">
            {product.category}
          </span>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <motion.div className="bg-gradient-to-br from-primary-light/30 to-primary-mid/30 p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-extrabold text-primary-dark">
                {product.totalFootprint.toFixed(1)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Liters of water per {product.unit.split("/")[1]}
              </p>
            </motion.div>

            <motion.div className="bg-gradient-to-br from-blue-200/60 to-blue-400/30 p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-extrabold text-blue-700">
                {product.avgIndianConsumption} kg
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Avg. yearly consumption per person in India
              </p>
            </motion.div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Confidence level in data: <strong>{product.confidence}</strong>
          </p>
        </div>
      </motion.div>

      {/* Footprint Breakdown */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5">
          Water Footprint Breakdown
        </h2>
        <div className="max-w-5xl mx-auto mt-8">
    <div className="flex flex-col md:flex-row justify-between gap-6">
      {/* Green Water Card */}
      <div className="flex flex-col items-center bg-green-50 rounded-xl p-6 shadow-md flex-1 text-green-700">
        <Droplet size={40} className="mb-3" fill="#34D399" stroke="#34D399" />
        <h3 className="text-xl font-semibold mb-2">Green Water</h3>
        <p className="text-center text-green-600 text-sm leading-relaxed">
          Rainwater stored in soil
        </p>
      </div>

      {/* Blue Water Card */}
      <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow-md flex-1 text-blue-700">
        <Droplet size={40} className="mb-3" fill="#60A5FA" stroke="#60A5FA" />
        <h3 className="text-xl font-semibold mb-2">Blue Water</h3>
        <p className="text-center text-blue-600 text-sm leading-relaxed">
          Surface & groundwater for irrigation
        </p>
      </div>

      {/* Grey Water Card */}
      <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-md flex-1 text-gray-600">
        <Droplet size={40} className="mb-3" fill="#9CA3AF" stroke="#9CA3AF" />
        <h3 className="text-xl font-semibold mb-2">Grey Water</h3>
        <p className="text-center text-gray-500 text-sm leading-relaxed">
          Water needed to dilute pollutants
        </p>
      </div>
    </div>
  </div>

        <div className="mx-auto h-80 mt-15">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={footprintData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                 
                   
                   `${  window.innerWidth > 500 ? name + ": " : " "}${(percent * 100).toFixed(0)}%`
                }
                labelLine={false}
              >
                {footprintData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value.toFixed(2)} ${product.unit}`}
              />
              <Legend
                wrapperStyle={{ fontSize: 14, fontWeight: "600" }}
                verticalAlign="bottom"
                height={36}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      {/* Tips */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-10 mx-w-5xl mx-auto "
      >
        <h2 className="uppercase text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          How to Reduce Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg leading-relaxed">
          {product.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </motion.section>

      {/* Alternatives */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-16 mx-auto"
      >
        <h2 className="text-3xl uppercase font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Better Alternatives
        </h2>
        <p className="text-gray-700 max-w-3xl mb-6 text-lg leading-relaxed">
          Switching to these options can save significant amounts of water:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.alternatives.map((alt, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-6 shadow-md cursor-pointer transition"
              title={`Saves about ${alt.savings} ${product.unit}`}
            >
              <p className="text-xl font-semibold text-primary-dark">
                {alt.name}
              </p>
              <p className="text-primary-mid mt-1">
                Saves about <strong>{alt.savings}</strong> {product.unit}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Note */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-16 mx-auto bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 shadow-inner"
      >
        <p className="text-yellow-900 font-medium text-lg text-center">
          {product.impactNote}
        </p>
      </motion.section>

      {/* Source */}
      <section className="mt-5 text-left text-sm text-gray-500">
        <p>
          <strong>Data Source:</strong> {product.source.join(", ")}
        </p>
        {product.countrySpecific && <p>⚑ Data specific to India</p>}
      </section>
    </div>
  );
};

export default ProductDetailsPage;
