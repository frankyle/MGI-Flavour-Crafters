import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="py-20 px-4 container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-serif font-bold text-gray-800 leading-tight">
          Nature's Finest <span className="text-orange-700 block">Powdered Pure</span>
        </h2>

        {/* English Description (Serif) */}
        <p className="text-lg text-gray-700 mt-6 font-serif">
          Discover vibrant flavors and nutrients from premium dehydrated spices
          and fruit powders — ethically sourced and delivered fresh.
        </p>

        {/* Swahili Description (Sans) */}
        <p className="text-md text-gray-600 mt-2 font-sans italic">
          Gundua ladha na virutubisho kutoka kwa viungo bora vya kukaushwa na unga wa matunda —
          vikiokotwa kwa uadilifu na kuletwa vikiwa safi.
        </p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">Shop Now</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImage} alt="Spices" className="rounded-3xl shadow-lg w-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
