import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";

// 🖼️ Product images
import turmericImage from "../assets/turmeric-powder.jpg";
import gingerImage from "../assets/ginger-powder.jpg";
import cinnamonImage from "../assets/cinnamon-powder.jpg";
import paprikaImage from "../assets/paprika-powder.jpg";
import cuminImage from "../assets/cumin-powder.jpg";
import blackPepperImage from "../assets/black-pepper-powder.jpg";
import beetrootImage from "../assets/beetroot-powder.jpg";
import moringaImage from "../assets/moringa-powder.jpg";
import spinachImage from "../assets/spinach-powder.jpg";
import kaleImage from "../assets/kale-powder.jpg";
import parsleyImage from "../assets/parsley-powder.jpg";
import mangoImage from "../assets/mango-product.jpg";
import pineappleImage from "../assets/pineapple-product.jpg";
import jackfruitImage from "../assets/jackfruit-product.jpg";
import appleImage from "../assets/apple-product.jpg";
import bananaImage from "../assets/banana-product.jpg";

export default function Products() {
  const { addToCart } = useCart();

  const spices = [
    { id: "turmeric", name: "Organic Turmeric Powder", description: "Dehydrated golden turmeric powder with curcumin. 100g package.", price: 8000, image: turmericImage },
    { id: "ginger", name: "Pure Ginger Powder", description: "Aromatic dehydrated ginger powder. 100g package.", price: 7000, image: gingerImage },
    { id: "cinnamon", name: "Ceylon Cinnamon Powder", description: "True cinnamon with sweet flavor. 100g package.", price: 10000, image: cinnamonImage },
    { id: "paprika", name: "Sweet Paprika Powder", description: "Vibrant mild paprika for flavor and color. 100g package.", price: 6000, image: paprikaImage },
    { id: "cumin", name: "Cumin Powder", description: "Earthy and aromatic dehydrated cumin. 100g package.", price: 7500, image: cuminImage },
    { id: "black-pepper", name: "Black Pepper Powder", description: "Pungent dehydrated black pepper. 100g package.", price: 9000, image: blackPepperImage },
  ];

  const herbs = [
    { id: "beetroot", name: "Beetroot Powder", description: "Vibrant and earthy dehydrated beetroot. 100g package.", price: 12000, image: beetrootImage },
    { id: "moringa", name: "Moringa Powder", description: "Superfood moringa leaf powder. 100g package.", price: 15000, image: moringaImage },
    { id: "spinach", name: "Spinach Powder", description: "Iron-rich dehydrated spinach. 100g package.", price: 11000, image: spinachImage },
    { id: "kale", name: "Kale Powder", description: "Nutrient-dense kale powder. 100g package.", price: 13000, image: kaleImage },
    { id: "parsley", name: "Parsley Powder", description: "Fresh aromatic parsley powder. 100g package.", price: 9500, image: parsleyImage },
  ];

  const fruits = [
    { id: "mango", name: "Dehydrated Mango", description: "Sweet mango pieces or powder. 200g package.", price: 9500, image: mangoImage },
    { id: "pineapple", name: "Dehydrated Pineapple", description: "Tangy pineapple pieces or powder. 200g package.", price: 8500, image: pineappleImage },
    { id: "jackfruit", name: "Dehydrated Jackfruit", description: "Exotic jackfruit chips or powder. 200g package.", price: 10000, image: jackfruitImage },
    { id: "apple", name: "Dehydrated Apple", description: "Crisp apple chips or powder. 200g package.", price: 8000, image: appleImage },
    { id: "banana", name: "Dehydrated Banana", description: "Sweet banana chips or powder. 200g package.", price: 7500, image: bananaImage },
  ];

  const categories = [
    { title: "Premium Spices", items: spices },
    { title: "Nutrient-Rich Herbs", items: herbs },
    { title: "Tropical Fruits", items: fruits },
  ];

  return (
    <div className="pt-20 pb-24 px-4 bg-gradient-to-b from-orange-50 to-amber-100 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-800 mb-6 text-center">
        Our Natural Products
      </h1>
      <p className="text-gray-700 max-w-2xl mx-auto text-center mb-10">
        Explore our range of naturally dehydrated spices, herbs, and fruits — 
        crafted to preserve nutrients, color, and authentic flavor using 
        eco-friendly dehydration methods.
      </p>

      {categories.map((category) => (
        <div key={category.title} className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4 border-l-4 border-orange-500 pl-3">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.items.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-orange-700 font-bold">
                      {product.price.toLocaleString()} TZS
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full hover:bg-orange-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
