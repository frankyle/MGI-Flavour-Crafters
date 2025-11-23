import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";

import { useCart } from "../contexts/CartContext";
import WhatsAppOrderButton from "../components/WhatsAppOrderButton";

const WHATSAPP_NUMBER = "255764998891"; // 🇹🇿 include country code, no '+'

const Checkout = () => {
  const {
    cartItems,
    totalPrice,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    deliveryMethod: "pickup", // 'pickup' or 'delivery'
  });

  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);


  // Helper to build WhatsApp message
  const buildWhatsAppMessage = () => {
    let text = `*NEW ORDER*\n\n`;
    text += `*Customer Details:*\n`;
    text += `Name: ${formData.name}\n`;
    text += `Phone: ${formData.phone}\n`;
    if (formData.deliveryMethod === "delivery") {
      text += `Address: ${formData.address}\n`;
    } else {
      text += `Pickup at Kariakoo\n`;
    }
    if (formData.notes) text += `Notes: ${formData.notes}\n`;
    text += `\n*Order Items:*\n`;
    cartItems.forEach((item) => {
      text += `\n${item.name}\n`;
      text += `- Quantity: ${item.quantity}\n`;
      text += `- Price: Tsh ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    text += `\n*Total: Tsh ${totalPrice.toLocaleString()}*`;
    return text;
  };

  const handleFormValidation = () => {
    if (!formData.name || !formData.phone) {
      setMessage("⚠️ Please fill in all required fields!");
      return false;
    }
    if (formData.deliveryMethod === "delivery" && !formData.address) {
      setMessage("⚠️ Please enter your address for delivery!");
      return false;
    }
    setMessage("");
    return true;
  };

  const handleOrderSent = () => {
    clearCart();
    setShowSuccess(true);
    setMessage("✅ Order sent successfully via WhatsApp!");
    setTimeout(() => navigate("/"), 2500);
  };

  // redirect if empty
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 py-10">
      <div className="container mx-auto px-4">
        <Link
          to="/cart"
          className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Cart
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-800 mb-8"
        >
          Checkout
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 🧾 Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-amber-800">
              Delivery Information
            </h2>

            <form
              onSubmit={e => {
                e.preventDefault();
                if (handleFormValidation()) {
                  // WhatsAppOrderButton will handle sending
                  document.getElementById("wa-order-btn").click();
                }
              }}
              className="space-y-4"
            >

              <div>
                <label className="block mb-2 font-medium">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  placeholder="e.g. 0764 998 891"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">How would you like to get your product?</label>
                <div className="flex items-center gap-6 mb-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === "pickup"}
                      onChange={() => setFormData({ ...formData, deliveryMethod: "pickup" })}
                    />
                    Pick up at Shop (Kariakoo)
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={formData.deliveryMethod === "delivery"}
                      onChange={() => setFormData({ ...formData, deliveryMethod: "delivery" })}
                    />
                    Delivery (cost on you)
                  </label>
                </div>
              </div>

              {formData.deliveryMethod === "delivery" && (
                <div>
                  <label className="block mb-2 font-medium">Address *</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    rows="3"
                    placeholder="Enter your full delivery address"
                    required
                  ></textarea>
                </div>
              )}

              <div>
                <label className="block mb-2 font-medium">
                  Delivery or Pickup Options
                </label>
                <div className="mb-2 text-sm text-gray-700 bg-amber-50 p-3 rounded">
                  You can <b>pick up your product at our shop in Kariakoo</b>, or choose delivery to your location. <b>Delivery cost will be covered by you</b> and depends on your location.
                </div>
                <textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  rows="2"
                  placeholder="Any special instructions or preferences (e.g., 'I will pick up at Kariakoo', or 'Please deliver to my address')..."
                ></textarea>
              </div>

              {message && (
                <p
                  className={`text-center ${
                    showSuccess ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <WhatsAppOrderButton
                id="wa-order-btn"
                style={{ display: "none" }}
                phoneNumber={WHATSAPP_NUMBER}
                message={buildWhatsAppMessage()}
                onSend={handleOrderSent}
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
              >
                Send Order via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* 🛍️ Right: Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-amber-800">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center pb-4 border-b border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4 text-amber-700" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-amber-700" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      Tsh {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm mt-1 inline-flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total:</span>
                <span className="text-amber-700">
                  Tsh {totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                * Final shipping cost will be confirmed via WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
