// src/components/Footer.jsx
import React from "react";

const Footer = () => (
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
);

export default Footer;
