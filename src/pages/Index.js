// src/pages/Index.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";

// 🖼️ Product images
import turmericImage from "../assets/Turmeric.jpg";
import gingerImage from "../assets/Ginger.jpg";
import cinnamonImage from "../assets/Cinnamon.jpg";
import pilauMasalaImage from "../assets/PilauMasala.jpg";
import beefMasalaImage from "../assets/BeefMasala.jpg";
import fishMasalaImage from "../assets/FishMasala.jpg";

import beetrootImage from "../assets/Beetroot.jpg";
import moringaImage from "../assets/Moringa.jpg";
import bamiaImage from "../assets/bamia.jpg";

import UngawaLishe from "../assets/Lishe.jpg";
import UngawaViazi from "../assets/viazi.jpg";
import UngawaMagimbi from "../assets/magimbi.jpg";


import mangoImage from "../assets/mangos.jpg";
import pineappleImage from "../assets/pineapple.jpg";
import jackfruitImage from "../assets/jackfruit.jpg";
import bananaImage from "../assets/banana.jpg";

const Index = () => {
  const spices = [
    {
      id: "turmeric",
      name: "Turmeric Powder ( 100 g)",
      description_sw:
        "Unga wa manjano wa ubora wa juu wenye viini asilia vya curcumin, unaofaa kwa ladha, rangi na kuimarisha afya ya mwili.",
      description_en:
        "Premium golden turmeric powder rich in natural curcumin, perfect for seasoning, color, and wellness support.",
      price: 6000,
      image: turmericImage,
    },
    {
      id: "ginger",
      name: "Ginger Powder ( 100 g)",
      description_sw:
        "Unga wa tangawizi wenye harufu na joto la asili, unaofaa kwa chai, tiba mbadala na kuongeza ladha kwenye vyakula.",
      description_en:
        "Aromatic ginger powder ideal for tea, natural remedies, and enhancing flavor in meals.",
      price: 6500,
      image: gingerImage,
    },
    {
      id: "cinnamon",
      name: "Cinnamon Powder ( 100 g)",
      description_sw:
        "Unga wa mdalasini wa Ceylon wenye utamu wa asili na harufu nyororo, mzuri kwa vinywaji na mapishi ya kuoka.",
      description_en:
        "Smooth and naturally sweet Ceylon cinnamon perfect for beverages and baking applications.",
      price: 7000,
      image: cinnamonImage,
    },
    {
      id: "pilau-masala",
      name: "Pilau Masala ( 100 g)",
      description_sw:
        "Mchanganyiko wa viungo vya asili vilivyosawazishwa kwa ladha ya pilau yenye harufu ya kuvutia na utamu wa kipekee.",
      description_en:
        "Authentic East African pilau spice blend crafted for deep aroma and rich flavor.",
      price: 6000,
      image: pilauMasalaImage,
    },
    {
      id: "beef-masala",
      name: "Beef Masala ( 100 g)",
      description_sw:
        "Kiungo cha nyama chenye ladha ya joto na utamu wa asili, kinachoboreshwa vyema katika mapishi ya kila aina ya nyama ya ng’ombe.",
      description_en:
        "Warm and flavorful beef seasoning perfect for enhancing any beef dish.",
      price: 6000,
      image: beefMasalaImage,
    },
    {
      id: "fish-masala",
      name: "Fish Masala ( 100 g)",
      description_sw:
        "Kiungo cha samaki chenye usawa sahihi wa viungo kwa kukaanga, kuchoma au kuandaa supu za kisasa.",
      description_en:
        "Balanced fish seasoning suitable for frying, grilling, or stew preparation.",
      price: 6500,
      image: fishMasalaImage,
    },
  ];
  const herbs = [
    {
      id: "beetroot",
      name: "Beetroot Powder ( 100 g)",
      description_sw:
        "Unga wa beetroot wenye rangi na virutubisho vya asili, unaofaa kwa juisi, smoothies, urembo na kuongeza lishe mwilini.",
      description_en:
        "Nutrient-rich beetroot powder with natural color, ideal for smoothies, juices, and nutrition enhancement.",
      price: 9000,
      image: beetrootImage,
    },
    {
      id: "moringa",
      name: "Moringa Powder ( 100 g)",
      description_sw:
        "Unga wa moringa wenye manufaa mengi kiafya, unaosaidia kinga ya mwili, damu na kuongeza nguvu.",
      description_en:
        "Superfood moringa powder that supports immunity, blood health, and natural energy.",
      price: 7000,
      image: moringaImage,
    },
    {
      id: "bamia",
      name: "Green Okra Powder ( 100 g)",
      description_sw:
        "Unga wa bamia wenye nyuzinyuzi nyingi, husaidia mmeng'enyo wa chakula na hutumika kwenye supu, mchuzi na vinywaji vya afya.",
      description_en:
        "High-fiber okra powder that supports digestion, great for soups, sauces, and healthy beverages.",
      price: 7000,
      image: bamiaImage,
    }

    
  ];
    const flours = [
    {
      id: "unga-lishe-watoto",
      name: "Unga wa Lishe wa Watoto (1 Kg)",
      description_sw:
        "Unga wa lishe wa watoto wenye virutubisho kamili kwa ukuaji bora, nguvu, na afya ya mwili.",
      description_en:
        "Nutritious baby porridge flour made from a balanced blend of grains and legumes, ideal for healthy growth and energy.",
      price: 12000,
      image: UngawaLishe,
    },
    {
      id: "sweet-potato-flour",
      name: "Unga wa Sweet Potato (1 Kg)",
      description_sw:
        "Unga wa viazi vitamu wenye ladha nzuri, unaofaa kwa uji, mikate, na kuongezea lishe katika vyakula mbalimbali.",
      description_en:
        "Naturally sweet and fiber-rich sweet potato flour, perfect for porridge, baking, and nutritious meals.",
      price: 11000,
      image: UngawaMagimbi,
    },
    {
      id: "magimbi-flour",
      name: "Unga wa Magimbi (1 Kg)",
      description_sw:
        "Unga wa magimbi wenye wanga na virutubisho asilia, bora kwa uji, keki, au chakula cha lishe.",
      description_en:
        "Wholesome yam flour rich in natural starch and nutrients, great for porridge, cakes, or healthy cooking.",
      price: 11500,
      image: UngawaViazi,
    },
  ];
  const fruits = [
    {
      id: "mango",
      name: "Dehydrated Mango ( 200 g)",
      description_sw:
        "Vipande au unga wa embe wenye utamu wa asili usioongezwa sukari.",
      description_en:
        "Naturally sweet dehydrated mango pieces or powder, no sugar added.",
      price: 8000,
      image: mangoImage,
    },
    {
      id: "pineapple",
      name: "Dehydrated Pineapple ( 200 g)",
      description_sw:
        "Nanasi kavu lenye chachu nyororo na utamu wa asili, linafaa kama snack au kuongeza ladha.",
      description_en:
        "Tangy-sweet dehydrated pineapple perfect as a snack or flavor booster.",
      price: 8500,
      image: pineappleImage,
    },
    {
      id: "jackfruit",
      name: "Dehydrated Jackfruit ( 200 g)",
      description_sw:
        "Fenesi kavu lenye utamu wa asili na uwezo wa kutumiwa kama snack au unga.",
      description_en:
        "Naturally sweet jackfruit snack or powder for versatile use.",
      price: 7000,
      image: jackfruitImage,
    },
   
    {
      id: "banana",
      name: "Dehydrated Banana ( 200 g)",
      description_sw:
        "Ndizi kavu tamu isiyo na viambata vya bandia, safi kama kitafunwa cha afya.",
      description_en:
        "Naturally sweet dehydrated banana, free from artificial additives.",
      price: 5500,
      image: bananaImage,
    },
  ];

  const categories = [
    { title: "Premium Spices & Seasonings", items: spices },
    { title: "Nutrient-Rich Herbal Powders", items: herbs },
    { title: "Nutritious Flours / Unga wa Lishe", items: flours },
    { title: "Tropical Dehydrated Fruits", items: fruits },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <Navbar />
      <Hero />
      <Benefits />
      <ProductsSection categories={categories} />
      <Footer />
    </div>
  );
};

export default Index;
