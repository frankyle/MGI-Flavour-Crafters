// src/pages/Products.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

// Images
import turmericImage from "../assets/Turmeric.jpg";
import gingerImage from "../assets/Ginger.jpg";
import cinnamonImage from "../assets/Cinnamon.jpg";
import pilauMasalaImage from "../assets/PilauMasala.jpg";
import beefMasalaImage from "../assets/BeefMasala.jpg";
import fishMasalaImage from "../assets/FishMasala.jpg";

import beetrootImage from "../assets/Beetroot.jpg";
import moringaImage from "../assets/Moringa.jpg";
import spinachImage from "../assets/spinach-powder.jpg";
import kaleImage from "../assets/kale-powder.jpg";
import parsleyImage from "../assets/parsley-powder.jpg";

import mangoImage from "../assets/mango-product.jpg";
import pineappleImage from "../assets/pineapple-product.jpg";
import jackfruitImage from "../assets/jackfruit-product.jpg";
import appleImage from "../assets/apple-product.jpg";
import bananaImage from "../assets/banana-product.jpg";

const Products = () => {
  const spices = [
    {
      id: "turmeric",
      name: "Turmeric Powder",
      description:
        "Rich golden turmeric powder with high curcumin content, perfect for cooking and wellness. / Unga wa manjano wenye virutubisho vingi, mzuri kwa mapishi na afya ya mwili. 100g package.",
      price: 8000,
      image: turmericImage,
    },
    {
      id: "ginger",
      name: "Ginger Powder",
      description:
        "Strong aromatic ginger powder ideal for tea, cooking, and herbal remedies. / Unga wa tangawizi wenye harufu nzuri na ladha kali, unaofaa kwa chai, mapishi na tiba asili. 100g package.",
      price: 7000,
      image: gingerImage,
    },
    {
      id: "cinnamon",
      name: "Ceylon Cinnamon Powder",
      description:
        "Sweet and smooth Ceylon cinnamon for beverages and baking. / Unga wa mdalasini wa Ceylon wenye ladha laini na tamu, unaofaa kwa vinywaji na mapishi ya kuoka. 100g package.",
      price: 10000,
      image: cinnamonImage,
    },
    {
      id: "pilau-masala",
      name: "Pilau Masala",
      description:
        "Authentic East African pilau seasoning blend. / Kiungo halisi cha pilau chenye harufu nzuri na ladha ya kipekee. 100g package.",
      price: 6000,
      image: pilauMasalaImage,
    },
    {
      id: "beef-masala",
      name: "Beef Masala",
      description:
        "Warm and flavorful spice blend ideal for beef dishes. / Mchanganyiko wa viungo wenye ladha tamu unaofaa kwa mapishi ya nyama ya ng'ombe. 100g package.",
      price: 7500,
      image: beefMasalaImage,
    },
    {
      id: "fish-masala",
      name: "Fish Masala",
      description:
        "Balanced seasoning for fried, grilled, or stewed fish. / Kiungo cha samaki chenye uwiano mzuri wa ladha kwa kukaanga, kuchoma au kuchemsha. 100g package.",
      price: 9000,
      image: fishMasalaImage,
    },
  ];

  const herbs = [
    {
      id: "beetroot",
      name: "Beetroot Powder",
      description:
        "Nutrient-rich beetroot powder with natural vibrant color. / Unga wa beetroot wenye rangi asili na virutubisho vingi. 100g package.",
      price: 12000,
      image: beetrootImage,
    },
    {
      id: "moringa",
      name: "Moringa Powder",
      description:
        "Superfood moringa leaf powder for energy and immunity. / Unga wa moringa wenye manufaa kwa kinga ya mwili na kuongeza nguvu. 100g package.",
      price: 15000,
      image: moringaImage,
    },
    {
      id: "spinach",
      name: "Spinach Powder",
      description:
        "Iron-rich spinach powder great for smoothies, sauces, and soups. / Unga wa mchicha wenye madini ya chuma, mzuri kwa juisi, supu, na mchuzi. 100g package.",
      price: 11000,
      image: spinachImage,
    },
    {
      id: "kale",
      name: "Kale Powder",
      description:
        "High-vitamin kale powder for daily nutrition. / Unga wa sukuma wiki uliojaa vitamini kwa lishe ya kila siku. 100g package.",
      price: 13000,
      image: kaleImage,
    },
    {
      id: "parsley",
      name: "Parsley Powder",
      description:
        "Fresh aromatic parsley powder for seasoning and garnishing. / Unga wa parsley wenye harufu nzuri kwa kuongeza ladha na kupamba chakula. 100g package.",
      price: 9500,
      image: parsleyImage,
    },
  ];

  const fruits = [
    {
      id: "mango",
      name: "Dehydrated Mango",
      description:
        "Naturally sweet mango pieces or powder. / Vipande au unga wa embe wenye utamu wa asili. 200g package.",
      price: 9500,
      image: mangoImage,
    },
    {
      id: "pineapple",
      name: "Dehydrated Pineapple",
      description:
        "Tangy and sweet pineapple snack or powder. / Vipande au unga wa nanasi wenye chachu na utamu wa asili. 200g package.",
      price: 8500,
      image: pineappleImage,
    },
    {
      id: "jackfruit",
      name: "Dehydrated Jackfruit",
      description:
        "Naturally sweet jackfruit chips or powder. / Vipande au unga wa fenesi wenye utamu wa asili. 200g package.",
      price: 10000,
      image: jackfruitImage,
    },
    {
      id: "apple",
      name: "Dehydrated Apple",
      description:
        "Crisp apple chips or powder. / Vipande vya tufaha vyenye ukolea wa ladha, au unga kwa matumizi mbalimbali. 200g package.",
      price: 8000,
      image: appleImage,
    },
    {
      id: "banana",
      name: "Dehydrated Banana",
      description:
        "Naturally sweet banana chips or powder. / Vipande au unga wa ndizi wenye utamu wa asili. 200g package.",
      price: 7500,
      image: bananaImage,
    },
  ];

  const categories = [
    { title: "Premium Spices & Seasonings", items: spices },
    { title: "Nutrient-Rich Herbal Powders", items: herbs },
    { title: "Tropical Dehydrated Fruits", items: fruits },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold font-serif text-center mb-12">Our Products / Bidhaa Zetu</h1>

        {categories.map((cat, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-3xl font-serif text-orange-700 mb-6">{cat.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((product, j) => (
                <ProductCard key={j} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
