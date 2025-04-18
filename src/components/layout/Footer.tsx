
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-growiq-600 to-accent-600 p-2 rounded-md text-white">
                <Layers size={24} />
              </div>
              <span className="font-bold text-xl text-gray-900">GrowIQ</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering educational institutions with innovative technology solutions for better management and learning experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-growiq-600 hover:text-growiq-700" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-growiq-600 hover:text-growiq-700" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-growiq-600 hover:text-growiq-700" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-growiq-600 hover:text-growiq-700" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/school-management" className="text-gray-600 hover:text-growiq-600">School Management</Link></li>
              <li><Link to="/college-management" className="text-gray-600 hover:text-growiq-600">College Management</Link></li>
              <li><Link to="/e-learning" className="text-gray-600 hover:text-growiq-600">E-Learning Platform</Link></li>
              <li><Link to="/transport-management" className="text-gray-600 hover:text-growiq-600">Transport Management</Link></li>
              <li><Link to="/library-management" className="text-gray-600 hover:text-growiq-600">Library Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-growiq-600">About Us</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-growiq-600">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-growiq-600">Pricing</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-growiq-600">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-growiq-600">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-growiq-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Tech Park, Education Street, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-growiq-600 flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-growiq-600 flex-shrink-0" />
                <span className="text-gray-600">info@growiq.tech</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GrowIQ Edu Tech Solutions Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-gray-500 text-sm hover:text-growiq-600">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-growiq-600">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-500 text-sm hover:text-growiq-600">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
