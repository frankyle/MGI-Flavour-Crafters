import React from "react";
import { motion } from "framer-motion";

// Online logo URLs for Airtel, Voda, and Mix Yas Lipa
const airtelLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/7/73/Airtel_logo_2018.svg";
const vodaLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Vodafone_logo_2017.svg";
const mixYasLogoUrl = "https://via.placeholder.com/150"; // Replace with the actual Mix Yas logo URL if available

const ShippingInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Shipping Information
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            We offer quick and reliable shipping services to your doorstep. You can track your order anytime and rest assured, your package will arrive safely and on time.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Payment Methods</h3>

          {/* Payment Logos */}
          <div className="flex justify-center gap-6">
            {/* Airtel Money Lipa */}
            <div className="w-24 h-24 flex items-center justify-center">
              <img src={airtelLogoUrl} alt="Airtel Money Lipa" className="w-full h-full object-contain" />
            </div>
            {/* Voda Lipa */}
            <div className="w-24 h-24 flex items-center justify-center">
              <img src={vodaLogoUrl} alt="Voda Lipa" className="w-full h-full object-contain" />
            </div>
            {/* Mix Yas Lipa */}
            <div className="w-24 h-24 flex items-center justify-center">
              <img src={mixYasLogoUrl} alt="Mix Yas Lipa" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Shipping Information */}
          <p className="text-sm text-gray-600 mt-6">
            For any shipping inquiries or questions, feel free to contact us. We strive to provide the best experience for our customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShippingInfo;
