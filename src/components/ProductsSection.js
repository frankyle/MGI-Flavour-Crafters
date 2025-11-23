import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductsSection = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Combine all items for the "All" category
  const allProducts = categories.flatMap((cat) => cat.items);

  // Determine which products to show
  const displayedProducts =
    activeCategory === "All"
      ? allProducts
      : categories.find((cat) => cat.title === activeCategory)?.items || [];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          Our Dehydrated Products
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full border transition ${
              activeCategory === "All"
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            }`}
          >
            All
          </button>

          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-6 py-2 rounded-full border transition ${
                activeCategory === cat.title
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProducts.map((p, j) => (
            <motion.div
              key={p.id || j}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: j * 0.05 }}
            >
              <ProductCard
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                description_sw={p.description_sw}
                description_en={p.description_en}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
