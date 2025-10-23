import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const {
    cartItems = [],
    removeFromCart,
    updateQuantity,
    totalPrice = 0,
    clearCart,
  } = useCart() || {}; // ✅ prevents undefined destructuring errors

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty. Add some items first!");
      return;
    }
    navigate("/checkout");
  };

  // 🛒 Empty Cart Screen
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Start adding some of our delicious dehydrated products!
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // 🛍️ Cart with Items
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 py-10">
      <div className="container mx-auto px-4">
        {/* 🔙 Back to Shop */}
        <Link
          to="/"
          className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Shop
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-800 mb-8"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 🧾 Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md p-6 flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {item.name}
                      </h3>
                      {item.category && (
                        <p className="text-sm text-gray-500">{item.category}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 border rounded-lg hover:bg-amber-50 transition disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 border rounded-lg hover:bg-amber-50 transition"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-lg font-bold text-amber-700">
                      Tsh {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 💰 Right: Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 sticky top-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-amber-800">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold text-gray-800">
                  Tsh {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-semibold text-gray-800">
                  Calculated at checkout
                </span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-amber-700">
                    Tsh {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition mb-4"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-amber-600 text-amber-700 hover:bg-amber-50 py-3 rounded-lg font-semibold transition"
            >
              Clear Cart
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
