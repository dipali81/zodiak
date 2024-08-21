import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* Top Header */}
      <div className="bg-black py-2.5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center justify-center md:justify-start space-x-4 text-xs uppercase">
              <a href="tel:1234567890" className="text-white">Call us 123-456-7890</a>
              <div className="h-3 w-px bg-gray-700"></div>
              <a href="mailto:support@zodiakkdesign.com" className="text-white">support@zodiakkdesign.com</a>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-4 text-xs uppercase mt-2 md:mt-0">
              <a href="#" className="text-white">Book Free Consultation Now</a>
              <div className="h-3 w-px bg-gray-700"></div>
              <a href="#" className="text-white">Login</a>
              <span className="text-white px-2 pointer-events-none">or</span>
              <a href="#" className="text-white underline">Register Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-transparent">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div>
              <a href="index.html" className="text-2xl font-bold">
                <img src="/images/logo.png" alt="Zodiakk Design" className="h-8" />
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  Categories
                  <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
                </button>
                {/* Dropdown menu would go here */}
              </div>
              <a href="services.html">Services</a>
              <a href="pricing.html">Pricing</a>
              <a href="how-it-works.html">How it Works</a>
              <a href="contact.html">Contact Us</a>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                Get a Design?
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Categories</a>
            <a href="services.html" className="block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="pricing.html" className="block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="how-it-works.html" className="block px-3 py-2 rounded-md text-base font-medium">How it Works</a>
            <a href="contact.html" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}

      {/* Side menu */}
      <div className="hidden">
        {/* Side menu content would go here */}
      </div>
    </header>
  );
};

export default Header;