import React from "react";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ id, name, description, price, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={image} alt={name} className="rounded-xl h-56 w-full object-cover mb-4" />
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 flex-grow mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-orange-700">{price.toLocaleString()} TZS</span>
        <button
          onClick={handleAddToCart}
          className="bg-orange-600 text-white rounded-full px-4 py-2 text-sm hover:bg-orange-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
