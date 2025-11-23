// src/components/Navbar.jsx
import React from "react";
import { ShoppingCart, Package, Info, Phone, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <>
      {/* 🟠 Header (Logo + Nav + Cart) */}
      <header className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md border-b border-orange-200 flex items-center justify-between px-6 py-3 z-50 shadow-sm">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-serif font-bold text-orange-700">
          MGI Flavour Crafters
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          
          <NavItem
            to="/"
            icon={<Home className="h-5 w-5" />}
            label="Home"
            active={location.pathname === "/"}
            inline
          />

          <NavItem
            to="/products"
            icon={<Package className="h-5 w-5" />}
            label="Products"
            active={location.pathname === "/products"}
            inline
          />
          <NavItem
            to="/about"
            icon={<Info className="h-5 w-5" />}
            label="About"
            active={location.pathname === "/about"}
            inline
          />
          <NavItem
            to="/contact"
            icon={<Phone className="h-5 w-5" />}
            label="Contact"
            active={location.pathname === "/contact"}
            inline
          />

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-orange-700 hover:text-orange-800 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Cart */}
        <div className="md:hidden flex justify-end flex-1">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-orange-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* ⚪ Mobile Navigation (Bottom Nav) */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-orange-200 shadow-lg flex justify-around items-center py-2 z-50 md:hidden">

        <NavItem
          to="/"
          icon={<Home className="h-5 w-5" />}
          label="Home"
          active={location.pathname === "/"}
        />

        <NavItem
          to="/products"
          icon={<Package className="h-5 w-5" />}
          label="Products"
          active={location.pathname === "/products"}
        />
        <NavItem
         to="/about"
          icon={<Info className="h-5 w-5" />}
          label="About"
          active={location.pathname === "/about"}
        />
        <NavItem
          to="/contact"
          icon={<Phone className="h-5 w-5" />}
          label="Contact"
          active={location.pathname === "/contact"}
        />
      </nav>
    </>
  );
};

function NavItem({ to, icon, label, active, inline }) {
  const baseClasses = `flex items-center transition-colors ${
    inline ? "space-x-2" : "flex-col justify-center text-sm"
  }`;

  return (
    <Link
      to={to}
      className={`${baseClasses} ${
        active
          ? "text-orange-700 font-semibold"
          : "text-gray-600 hover:text-orange-600"
      }`}
    >
      {icon}
      <span className={inline ? "text-sm" : "text-xs mt-1"}>{label}</span>
    </Link>
  );
}

export default Navbar;
