
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Layers, Phone, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-growiq-600 to-accent-600 p-2 rounded-md text-white">
            <Layers size={24} />
          </div>
          <span className="font-bold text-xl text-gray-900">GrowIQ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-growiq-600 font-medium">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-growiq-600 font-medium">
              Products <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/school-management" className="w-full">School Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/college-management" className="w-full">College Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/e-learning" className="w-full">E-Learning Platform</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/features" className="text-gray-700 hover:text-growiq-600 font-medium">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-growiq-600 font-medium">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-growiq-600 font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Log In</Button>
          <Button>
            <Link to="/demo" className="flex items-center">
              Get Free Demo
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white border-t border-gray-100">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-gray-700 font-medium py-2" onClick={toggleMenu}>
              Home
            </Link>
            <div className="text-gray-700 font-medium py-2">Products</div>
            <Link 
              to="/school-management" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100"
              onClick={toggleMenu}
            >
              School Management
            </Link>
            <Link 
              to="/college-management" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100"
              onClick={toggleMenu}
            >
              College Management
            </Link>
            <Link 
              to="/e-learning" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100"
              onClick={toggleMenu}
            >
              E-Learning Platform
            </Link>
            <Link to="/features" className="text-gray-700 font-medium py-2" onClick={toggleMenu}>
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 font-medium py-2" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 font-medium py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">
                <Link to="/demo" className="w-full" onClick={toggleMenu}>
                  Get Free Demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
