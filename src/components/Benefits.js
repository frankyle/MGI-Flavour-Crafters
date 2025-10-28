// src/components/Benefits.jsx
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, TruckIcon, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { icon: Leaf, title: "100% Natural", description: "No additives or preservatives — just nature." },
    { icon: Award, title: "Premium Quality", description: "Processed gently to retain nutrients and flavor." },
    { icon: TruckIcon, title: "Fast Delivery", description: "Quick, safe shipping right to your door." },
    { icon: Shield, title: "Quality Assured", description: "Tested for purity and satisfaction guaranteed." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-xl hover:bg-orange-50 shadow-sm"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
              <b.icon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{b.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
