import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Building, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Router link for navigation

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Building size={24} className="text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gokulam Sanctuary</h3>
                <p className="text-sm text-gray-400">by Joginder Properties</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Luxury 3BHK floors in the heart of Sohna, designed for modern living 
              with premium amenities and world-class infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#floor-plans" className="text-gray-400 hover:text-white transition-colors">Floor Plans</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Loans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interior Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Advisory</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+919818223938" className="text-gray-400 hover:text-white transition-colors">
                  +91 9818223938
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400" />
                <a href="mailto:joginderpropertiesncr@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  joginderpropertiesncr@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Building size={16} className="text-yellow-400 mt-1" />
                <div className="text-gray-400">
                  <p>Sales Office:</p>
                  <p>Sector 14, Gurugram</p>
                  <p>Haryana - 122001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Joginder Properties. All rights reserved.</p>
              <p className="mt-1">RERA Registration No: HR/RERA/GGM/XXX/XXXX/2024</p>
            </div>

            {/* ✅ Privacy Policy Link */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="./privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
