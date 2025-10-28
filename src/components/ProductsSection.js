// src/components/ProductsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductsSection = ({ categories }) => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Dehydrated Products</h2>
        <div className="space-y-20">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-serif text-orange-700 mb-6">{cat.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((p, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <ProductCard {...p} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
