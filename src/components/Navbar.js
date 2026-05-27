import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiHeart } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-airbnb-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-airbnb-red">airbnb</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-airbnb-darkGray hover:text-airbnb-red transition-colors"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-airbnb-darkGray hover:text-airbnb-red transition-colors"
            >
              Explore
            </Link>
            <Link
              to="/#favorites"
              className="text-airbnb-darkGray hover:text-airbnb-red transition-colors flex items-center gap-2"
            >
              <FiHeart size={20} />
              Favorites
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-airbnb-gray transition-colors">
              <FiUser size={20} className="text-airbnb-darkGray" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-airbnb-gray transition-colors"
            >
              {mobileMenuOpen ? (
                <FiX size={24} className="text-airbnb-darkGray" />
              ) : (
                <FiMenu size={24} className="text-airbnb-darkGray" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-airbnb-lightGray">
            <Link
              to="/"
              className="block py-2 text-airbnb-darkGray hover:text-airbnb-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="block py-2 text-airbnb-darkGray hover:text-airbnb-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/#favorites"
              className="block py-2 text-airbnb-darkGray hover:text-airbnb-red transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiHeart size={20} />
              Favorites
            </Link>
            <button className="block w-full text-left py-2 text-airbnb-darkGray hover:text-airbnb-red transition-colors flex items-center gap-2">
              <FiUser size={20} />
              Profile
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
