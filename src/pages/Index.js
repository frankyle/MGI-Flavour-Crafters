// Index.jsx
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, TruckIcon, Shield, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";

// 🖼️ Product images
import heroImage from "../assets/hero-spices.jpg";
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

// 🧡 Simple Tailwind Button
const Button = ({ children, onClick, variant = "primary", size = "md", className = "" }) => {
  const base = "rounded-full font-medium transition-all duration-300";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700",
    outline: "border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
    secondary: "bg-white text-orange-600 hover:bg-orange-100",
  };
  return (
    <button onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Index = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // 🧂 Product Data
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

  const benefits = [
    { icon: Leaf, title: "100% Natural", description: "No additives or preservatives — just nature." },
    { icon: Award, title: "Premium Quality", description: "Processed gently to retain nutrients and flavor." },
    { icon: TruckIcon, title: "Fast Delivery", description: "Quick, safe shipping right to your door." },
    { icon: Shield, title: "Quality Assured", description: "Tested for purity and satisfaction guaranteed." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      {/* ✅ Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-orange-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-orange-700">MGI Flavour Crafters</h1>
          <div className="flex gap-6 items-center">
            <a href="#products" className="text-gray-700 hover:text-orange-700">Products</a>
            <a href="#about" className="text-gray-700 hover:text-orange-700">About</a>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-orange-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button size="sm">Contact Us</Button>
          </div>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section className="py-20 px-4 container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl font-serif font-bold text-gray-800 leading-tight">
            Nature's Finest <span className="text-orange-700 block">Powdered Pure</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            Discover vibrant flavors and nutrients from premium dehydrated spices and fruit powders — ethically sourced and delivered fresh.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg">Shop Now</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
          <img src={heroImage} alt="Spices" className="rounded-3xl shadow-lg w-full" />
        </motion.div>
      </section>

      {/* ✅ Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="p-6 rounded-xl hover:bg-orange-50 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
                <b.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{b.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Dehydrated Products</h2>
          <div className="space-y-20">
            {[{ title: "Premium Spices", items: spices }, { title: "Nutrient-Rich Herbs", items: herbs }, { title: "Tropical Fruits", items: fruits }].map((cat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-serif text-orange-700 mb-6">{cat.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((p, j) => (
                    <motion.div key={j} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: j * 0.1 }}>
                      <ProductCard {...p} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">MGI Flavour Crafters</h3>
            <p className="text-sm opacity-80">Premium dehydrated spices and natural powders for your wellness.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm opacity-60 mt-10">&copy; 2025 MGI Flavour Crafters. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Index;
