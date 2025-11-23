// src/components/Button.jsx
import React from "react";

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

export default Button;
