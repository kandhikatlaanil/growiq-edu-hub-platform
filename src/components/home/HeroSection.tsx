
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-24 hero-gradient">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-growiq-800 font-medium text-sm">
              <span className="bg-growiq-100 p-1 rounded-full">
                <BookOpen size={16} className="text-growiq-700" />
              </span>
              <span>Trusted by 1000+ Educational Institutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transform Your Institution with Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-growiq-600 to-accent-600">Management Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-600">
              GrowIQ provides comprehensive software solutions for schools and colleges 
              that streamline administrative tasks, enhance teaching, and improve the 
              overall educational experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-growiq-600 to-accent-600 hover:from-growiq-700 hover:to-accent-700">
                <Link to="/demo" className="flex items-center gap-2">
                  Get 30-Day Free Trial
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Sales
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-accent-600" />
                <span className="text-gray-700">Easy Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-accent-600" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-accent-600" />
                <span className="text-gray-700">Secure & Reliable</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white p-3 rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/42c61cfb-9712-4151-b891-111a232e217f.png" 
                alt="GrowIQ Student Management Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="absolute top-[-30px] right-[-30px] z-0 w-full h-full bg-gradient-to-br from-growiq-500 to-accent-500 rounded-xl opacity-50 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
