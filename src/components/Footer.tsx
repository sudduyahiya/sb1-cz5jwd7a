import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Twitter, MessageSquare, Instagram as Telegram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">AirdropFarm</span>
            </div>
            <p className="text-gray-600">
              Your trusted source for the latest crypto airdrops and opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-indigo-600">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Telegram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} AirdropFarm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;