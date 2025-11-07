import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";

// 🖼️ Product images
import turmericImage from "../assets/Turmeric.jpg";
import gingerImage from "../assets/Ginger.jpg";
import cinnamonImage from "../assets/Cinnamon.jpg";
import pilauMasalaImage from "../assets/PilauMasala.jpg";
import beefMasalaImage from "../assets/BeefMasala.jpg";
import fishMasalaImage from "../assets/FishMasala.jpg";

import beetrootImage from "../assets/Beetroot.jpg";
import moringaImage from "../assets/Moringa.jpg";
import bamiaImage from "../assets/spinach-powder.jpg";
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
      description_sw:
        "Unga wa manjano wa ubora wa juu wenye viini asilia vya curcumin, unaofaa kwa ladha, rangi na kuimarisha afya ya mwili.",
      description_en:
        "Premium golden turmeric powder rich in natural curcumin, perfect for seasoning, color, and wellness support.",
      price: 8000,
      image: turmericImage,
    },
    {
      id: "ginger",
      name: "Ginger Powder",
      description_sw:
        "Unga wa tangawizi wenye harufu na joto la asili, unaofaa kwa chai, tiba mbadala na kuongeza ladha kwenye vyakula.",
      description_en:
        "Aromatic ginger powder ideal for tea, natural remedies, and enhancing flavor in meals.",
      price: 7000,
      image: gingerImage,
    },
    {
      id: "cinnamon",
      name: "Ceylon Cinnamon Powder",
      description_sw:
        "Unga wa mdalasini wa Ceylon wenye utamu wa asili na harufu nyororo, mzuri kwa vinywaji na mapishi ya kuoka.",
      description_en:
        "Smooth and naturally sweet Ceylon cinnamon perfect for beverages and baking applications.",
      price: 10000,
      image: cinnamonImage,
    },
    {
      id: "pilau-masala",
      name: "Pilau Masala",
      description_sw:
        "Mchanganyiko wa viungo vya asili vilivyosawazishwa kwa ladha ya pilau yenye harufu ya kuvutia na utamu wa kipekee.",
      description_en:
        "Authentic East African pilau spice blend crafted for deep aroma and rich flavor.",
      price: 6000,
      image: pilauMasalaImage,
    },
    {
      id: "beef-masala",
      name: "Beef Masala",
      description_sw:
        "Kiungo cha nyama chenye ladha ya joto na utamu wa asili, kinachoboreshwa vyema katika mapishi ya kila aina ya nyama ya ng’ombe.",
      description_en:
        "Warm and flavorful beef seasoning perfect for enhancing any beef dish.",
      price: 7500,
      image: beefMasalaImage,
    },
    {
      id: "fish-masala",
      name: "Fish Masala",
      description_sw:
        "Kiungo cha samaki chenye usawa sahihi wa viungo kwa kukaanga, kuchoma au kuandaa supu za kisasa.",
      description_en:
        "Balanced fish seasoning suitable for frying, grilling, or stew preparation.",
      price: 9000,
      image: fishMasalaImage,
    },
  ];

  const herbs = [
    {
      id: "beetroot",
      name: "Beetroot Powder",
      description_sw:
        "Unga wa beetroot wenye rangi na virutubisho vya asili, unaofaa kwa juisi, smoothies, urembo na kuongeza lishe mwilini.",
      description_en:
        "Nutrient-rich beetroot powder with natural color, ideal for smoothies, juices, and nutrition enhancement.",
      price: 12000,
      image: beetrootImage,
    },
    {
      id: "moringa",
      name: "Moringa Powder",
      description_sw:
        "Unga wa moringa wenye manufaa mengi kiafya, unaosaidia kinga ya mwili, damu na kuongeza nguvu.",
      description_en:
        "Superfood moringa powder that supports immunity, blood health, and natural energy.",
      price: 15000,
      image: moringaImage,
    },
    {
      id: "bamia",
      name: "Green Okra Powder",
      description_sw:
        "Unga wa bamia wenye nyuzinyuzi nyingi, husaidia mmeng'enyo wa chakula na hutumika kwenye supu, mchuzi na vinywaji vya afya.",
      description_en:
        "High-fiber okra powder that supports digestion, great for soups, sauces, and healthy beverages.",
      price: 12000,
      image: bamiaImage,
    },
  ];

  const fruits = [
    {
      id: "mango",
      name: "Dehydrated Mango",
      description_sw:
        "Vipande au unga wa embe wenye utamu wa asili usioongezwa sukari.",
      description_en:
        "Naturally sweet dehydrated mango pieces or powder, no sugar added.",
      price: 9500,
      image: mangoImage,
    },
    {
      id: "pineapple",
      name: "Dehydrated Pineapple",
      description_sw:
        "Nanasi kavu lenye chachu nyororo na utamu wa asili, linafaa kama snack au kuongeza ladha.",
      description_en:
        "Tangy-sweet dehydrated pineapple perfect as a snack or flavor booster.",
      price: 8500,
      image: pineappleImage,
    },
    {
      id: "jackfruit",
      name: "Dehydrated Jackfruit",
      description_sw:
        "Fenesi kavu lenye utamu wa asili na uwezo wa kutumiwa kama snack au unga.",
      description_en:
        "Naturally sweet jackfruit snack or powder for versatile use.",
      price: 10000,
      image: jackfruitImage,
    },
    {
      id: "apple",
      name: "Dehydrated Apple",
      description_sw:
        "Vipande vya tufaha vilivyokauka kwa utamu wa asili na ladha nyororo.",
      description_en:
        "Crisp dehydrated apple slices with a naturally gentle sweetness.",
      price: 8000,
      image: appleImage,
    },
    {
      id: "banana",
      name: "Dehydrated Banana",
      description_sw:
        "Ndizi kavu tamu isiyo na viambata vya bandia, safi kama kitafunwa cha afya.",
      description_en:
        "Naturally sweet dehydrated banana, free from artificial additives.",
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
     {/* 🧩 Reuse the same product display system */}
        <ProductsSection categories={categories} />
   
      <Footer />
    </div>
  );
};

export default Products;
