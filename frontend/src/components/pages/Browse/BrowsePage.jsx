// src/components/BrowsePage/BrowsePage.jsx
import React, { useState, useMemo } from "react";
import BrowseProductCard from "./BrowseProductCard";
import {
  getAllProducts,
  getPopularProducts,
  getTopProductsByFootprint,
  getLowestProductsByFootprint,
} from "../../../utils/dataUtils";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const BrowsePage = () => {
  const allProducts = getAllProducts();

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});

  // Filter products by search query (case insensitive, matches title or keywords)
  // Utility: clean text for searching
  const normalize = (str = "") => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove all non-alphanumeric chars
  };

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts;

    const q = normalize(searchQuery);

    return allProducts
      .map((p) => {
        const titleNorm = normalize(p.title);
        const keywordsNorm = (p.keywords || []).map((k) => normalize(k));
        const descNorm = normalize(p.description);

        // Priority-based matching
        if (titleNorm.startsWith(q)) return { ...p, score: 1 };
        if (titleNorm.includes(q)) return { ...p, score: 2 };

        if (keywordsNorm.some((k) => k.startsWith(q)))
          return { ...p, score: 3 };

        if (keywordsNorm.some((k) => k.includes(q))) return { ...p, score: 4 };

        return null;
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score);
  }, [searchQuery, allProducts]);

  // Group filtered products by category for "Browse by Category"
  const groupedProducts = useMemo(() => {
    return filteredProducts.reduce((groups, product) => {
      const category = product.category || "Uncategorized";
      if (!groups[category]) groups[category] = [];
      groups[category].push(product);
      return groups;
    }, {});
  }, [filteredProducts]);

  // Get top/popular/lowest products from filteredProducts or allProducts?
  // For demo, let's use filteredProducts (so search also applies)
  const popularProducts = getPopularProducts(6);

  const topFootprintProducts = getTopProductsByFootprint(6);

  const lowestFootprintProducts = getLowestProductsByFootprint(6);

  // Toggle category expand/collapse
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Card click handler (replace with routing/navigation later)
  const handleCardClick = (title) => navigate(`/product-details/${title}`);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 min-h-screen mt-15">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-mid transition"
          aria-label="Search products"
        />
      </div>

      {/* Search Results */}
      {searchQuery.trim() && filteredProducts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-primary-dark mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
              Search Results
            </span>
          </h2>
          <motion.div
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 overflow-y-hidden"
            style={{ scrollSnapType: "x mandatory" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.title}
                className="flex-shrink-0 w-72"
                style={{ scrollSnapAlign: "start" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(product.title)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <BrowseProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
      {/* Popular Products */}
      {popularProducts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-primary-dark mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
              Popular Products
            </span>
          </h2>
          <motion.div
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-4"
            style={{ scrollSnapType: "x mandatory" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {popularProducts.map((product) => (
              <motion.div
                key={product.title}
                className="flex-shrink-0 w-72"
                style={{ scrollSnapAlign: "start" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(product.title)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <BrowseProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Top Footprint Products */}
      {topFootprintProducts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-primary-dark mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
              Products with Highest Water Footprint
            </span>
          </h2>
          <motion.div
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-4"
            style={{ scrollSnapType: "x mandatory" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {topFootprintProducts.map((product) => (
              <motion.div
                key={product.title}
                className="flex-shrink-0 w-72"
                style={{ scrollSnapAlign: "start" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(product.title)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <BrowseProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Lowest Footprint Products */}
      {lowestFootprintProducts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-primary-dark mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
              Products with Lowest Water Footprint{" "}
            </span>
          </h2>
          <motion.div
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-4"
            style={{ scrollSnapType: "x mandatory" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {lowestFootprintProducts.map((product) => (
              <motion.div
                key={product.title}
                className="flex-shrink-0 w-72"
                style={{ scrollSnapAlign: "start" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(product.title)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <BrowseProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Browse by Category with collapsible menus */}
      <section>
        <h2 className="text-4xl font-semibold text-primary-dark mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold uppercase">
            Browse by Category
          </span>
        </h2>

        <div className="flex flex-col gap-6">
          {Object.entries(groupedProducts).map(([category, products]) => {
            const isExpanded = !!expandedCategories[category];
            return (
              <div
                key={category}
                className="border border-gray-300 rounded-2xl overflow-hidden "
              >
                {/* Header */}
                <button
                  className="w-full flex justify-between items-center px-6 py-6 bg-gradient-to-br from-primary-dark/90 to-primary-mid/80  focus:outline-none cursor-pointer hover:opacity-80 transition-all duration-300"
                  onClick={() => toggleCategory(category)}
                  aria-expanded={isExpanded}
                  aria-controls={`category-panel-${category}`}
                >
                  <span className="text-xl font-medium text-white ">
                    {category} ({products.length})
                  </span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-mid"
                    aria-hidden="true"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      id={`category-panel-${category}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="flex space-x-6 overflow-x-auto no-scrollbar px-6 py-4"
                        style={{ scrollSnapType: "x mandatory" }}
                      >
                        {products.map((product) => (
                          <motion.div
                            key={product.title}
                            className="flex-shrink-0 w-72"
                            style={{ scrollSnapAlign: "start" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCardClick(product.title)}
                          >
                            <BrowseProductCard product={product} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default BrowsePage;
