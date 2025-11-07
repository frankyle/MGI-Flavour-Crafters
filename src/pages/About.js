import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, Heart, Recycle, Award } from "lucide-react";
import aboutImage from "../assets/hero.jpg";
import Footer from "../components/Footer";

const About = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description:
        "We source only fresh fruits, herbs, and spices directly from trusted local farmers. Every batch is handled with care to ensure natural taste and full nutrition — no chemicals, no artificial colors, no preservatives.",
    },
    {
      icon: Sun,
      title: "Naturally Dehydrated",
      description:
        "Our gentle dehydration process uses warm air and sunlight — not harsh industrial drying. This preserves vital nutrients, color, aroma, and natural sweetness.",
    },
    {
      icon: Droplet,
      title: "Nutrient Preservation",
      description:
        "Unlike heat-intensive methods, natural dehydration locks in up to 95% of vitamins, minerals, and antioxidants — keeping your body nourished and energized.",
    },
    {
      icon: Heart,
      title: "Health & Wellness Focused",
      description:
        "Our powders and dried fruits support digestion, immunity, and vitality. Perfect for smoothies, teas, seasoning, or wellness blends — boosting your daily nutrition.",
    },
    {
      icon: Recycle,
      title: "Eco-Friendly & Sustainable",
      description:
        "We use reusable and biodegradable packaging and support small-scale farmers, promoting sustainable agriculture and zero waste in food processing.",
    },
    {
      icon: Award,
      title: "Premium Quality Guaranteed",
      description:
        "Each product goes through a strict selection process and is quality-tested for purity, freshness, and consistency before it reaches your table.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-amber-100 min-h-screen py-16">
      {/* Header Section */}
      <motion.section
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-serif font-bold text-orange-700 mb-6">
          About MGI Flavour Crafters
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-orange-600">MGI Flavour Crafters</span>, 
          we are passionate about transforming nature’s finest harvest into pure, 
          nutrient-rich powders and dehydrated delicacies. Every spice, herb, and 
          fruit we offer is **naturally dehydrated** — never fried, smoked, or 
          chemically treated — preserving authentic flavor, vibrant color, and 
          essential nutrients just as nature intended.
        </p>
      </motion.section>

      {/* Image / Mission Section */}
      <section className="container mx-auto mt-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={aboutImage}
          alt="Natural spices and powders"
          className="rounded-3xl shadow-lg w-full object-cover"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif text-orange-700 font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is simple: to bring **pure, natural nourishment** to 
            every home through carefully crafted, naturally dried ingredients 
            that support both wellness and sustainability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe in empowering communities — from the local farmers who 
            cultivate our ingredients to the families who enjoy our products. 
            Every pouch and jar carries a promise of **quality, authenticity, 
            and care**.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mt-20 px-4">
        <h2 className="text-4xl font-serif text-center text-gray-800 font-bold mb-12">
          Why Choose Our Dehydrated Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                {/* Correct icon rendering */}
                <b.icon className="text-orange-600 w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="text-center mt-20 px-4">
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Every spoonful of our powders, every bite of our dehydrated fruits,
          and every pinch of spice carries the taste of **authentic nature** — 
          pure, safe, and crafted to support your daily health and flavor 
          journey.
        </motion.p>
        <motion.h3
          className="text-2xl font-serif text-orange-700 font-bold mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          MGI Flavour Crafters — Nature’s Finest, Naturally Preserved.
        </motion.h3>
      </section>
    <Footer/>

    </div>
  );
};

export default About;
