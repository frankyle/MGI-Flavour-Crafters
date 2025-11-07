import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-900 pb-24">
      {/* Header */}
      <div className="text-center pt-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-amber-800 mb-3"
        >
          Get in Touch
        </motion.h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          We’d love to hear from you! Whether you have a question about our
          naturally dehydrated products, need assistance with your order, or
          just want to say hello — reach out anytime.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 sm:p-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Contact Info Section */}
      <div className="text-center mt-12 px-6">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">
          Contact Details
        </h2>
        <div className="flex flex-col items-center gap-3 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="text-amber-600" />
            <span>info@mgifravourcrafters.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-amber-600" />
            <span>+255 764 998891</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-amber-600" />
            <span>Dar es Salaam, Tanzania</span>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 max-w-lg mx-auto">
          We are proud to produce naturally dehydrated products using renewable
          solar energy and eco-friendly drying methods — ensuring every product
          remains nutrient-rich, flavorful, and kind to the environment.
        </p>
      </div>
    <Footer/>
    </div>
  );
}
