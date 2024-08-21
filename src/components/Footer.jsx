import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-12 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="text-center sm:text-left">
            <a href="index.html" className="inline-block mb-5">
              <img className="h-8" src="images/logo.png" alt="Logo" />
            </a>
            <p className="text-lg mb-4">
              Since 2010, we've specialized in transforming ideas into captivating visuals, crafting innovative solutions that elevate brands across industries, leaving a lasting impression.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.facebook.com/zodiakkdesign" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/zodiakkdesign" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://pinterest.com/zodiakkdesign" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a href="https://instagram.com/zodiakkdesign" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-700 uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'FAQ', 'How it Works?', 'Pricing', 'Blogs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-700 uppercase mb-4">Design Services</h3>
            <ul className="space-y-2">
              {['Print Design', 'Website and App Design', 'Brand Identity', 'Motion Design', 'Custom Illustration', 'Social Media Design'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get A Design */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-700 uppercase mb-4">Get A Design</h3>
            <ul className="space-y-2">
              {['Logo Design', 'Brochure Design', 'Flyer', 'Business Card', 'Children Book Illustration', 'Social Media Pack'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-2 sm:mb-0">
              Copyright 2024 @ <a href="http://YgZxtRdQftar.com" target="_blank" rel="noopener noreferrer" className="text-gray-800">Zodiakk Design</a>
            </div>
            <div className="text-sm text-gray-600">
              <a href="#terms" className="text-gray-800 hover:text-gray-600">Term and Condition</a>
              <span className="mx-2">|</span>
              <a href="#privacy" className="text-gray-800 hover:text-gray-600">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;