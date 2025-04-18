import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Layers, Phone, ChevronDown, Users, Code, Lightbulb, Heart, School, GraduationCap, Book, Building2, FileText, Video, Briefcase } from 'lucide-react';
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
              <DropdownMenuItem>
                <Link to="/features" className="w-full">Features</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-growiq-600 font-medium">
              Know us <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/about" className="flex items-center gap-2 w-full">
                  <Users size={16} />
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/inside-growiq" className="flex items-center gap-2 w-full">
                  <BookOpen size={16} />
                  Inside GrowIQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/technology-stack" className="flex items-center gap-2 w-full">
                  <Code size={16} />
                  Our Technology Stack
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/innovation" className="flex items-center gap-2 w-full">
                  <Lightbulb size={16} />
                  Innovation & R&D
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/life-at-growiq" className="flex items-center gap-2 w-full">
                  <Heart size={16} />
                  Life as a Developer at GrowIQ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-growiq-600 font-medium">
              Industries We Serve <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/industries/schools" className="flex items-center gap-2 w-full">
                  <School size={16} />
                  Schools (K-12)
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/colleges" className="flex items-center gap-2 w-full">
                  <GraduationCap size={16} />
                  Colleges & Universities
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/coaching" className="flex items-center gap-2 w-full">
                  <Book size={16} />
                  Coaching Institutes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/government" className="flex items-center gap-2 w-full">
                  <Building2 size={16} />
                  Government Educational Bodies
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/corporate" className="flex items-center gap-2 w-full">
                  <Briefcase size={16} />
                  Corporate Training
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-growiq-600 font-medium">
              Resources <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/resources/blog" className="flex items-center gap-2 w-full">
                  <FileText size={16} />
                  Blog & Insights
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/resources/help" className="flex items-center gap-2 w-full">
                  <BookOpen size={16} />
                  Help Center / FAQs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/resources/docs" className="flex items-center gap-2 w-full">
                  <FileText size={16} />
                  Documentation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/resources/videos" className="flex items-center gap-2 w-full">
                  <Video size={16} />
                  Product Videos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/resources/whitepapers" className="flex items-center gap-2 w-full">
                  <FileText size={16} />
                  Whitepapers / eBooks
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/careers" className="text-gray-700 hover:text-growiq-600 font-medium">
            Careers
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
            <Link 
              to="/features" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <div className="text-gray-700 font-medium py-2">Know us</div>
            <Link 
              to="/about" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Users size={16} />
              About
            </Link>
            <Link 
              to="/inside-growiq" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <BookOpen size={16} />
              Inside GrowIQ
            </Link>
            <Link 
              to="/technology-stack" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Code size={16} />
              Our Technology Stack
            </Link>
            <Link 
              to="/innovation" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Lightbulb size={16} />
              Innovation & R&D
            </Link>
            <Link 
              to="/life-at-growiq" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Heart size={16} />
              Life as a Developer at GrowIQ
            </Link>
            <div className="text-gray-700 font-medium py-2">Industries We Serve</div>
            <Link 
              to="/industries/schools" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <School size={16} />
              Schools (K-12)
            </Link>
            <Link 
              to="/industries/colleges" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <GraduationCap size={16} />
              Colleges & Universities
            </Link>
            <Link 
              to="/industries/coaching" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Book size={16} />
              Coaching Institutes
            </Link>
            <Link 
              to="/industries/government" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Building2 size={16} />
              Government Educational Bodies
            </Link>
            <Link 
              to="/industries/corporate" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Briefcase size={16} />
              Corporate Training
            </Link>
            <div className="text-gray-700 font-medium py-2">Resources</div>
            <Link 
              to="/resources/blog" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <FileText size={16} />
              Blog & Insights
            </Link>
            <Link 
              to="/resources/help" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <BookOpen size={16} />
              Help Center / FAQs
            </Link>
            <Link 
              to="/resources/docs" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <FileText size={16} />
              Documentation
            </Link>
            <Link 
              to="/resources/videos" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Video size={16} />
              Product Videos
            </Link>
            <Link 
              to="/resources/whitepapers" 
              className="text-gray-600 font-medium py-2 pl-4 border-l-2 border-gray-100 flex items-center gap-2"
              onClick={toggleMenu}
            >
              <FileText size={16} />
              Whitepapers / eBooks
            </Link>
            <Link to="/careers" className="text-gray-700 font-medium py-2" onClick={toggleMenu}>
              Careers
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
