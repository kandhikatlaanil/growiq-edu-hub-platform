
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';

const TrialSection = () => {
  return (
    <section className="py-20 cta-gradient">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm mb-6">
              <span className="bg-white/30 p-1 rounded-full">
                <CalendarCheck size={16} className="text-white" />
              </span>
              <span>Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Start Your 30-Day Free Trial Today and Transform Your Institution
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Experience the full power of GrowIQ's comprehensive management solutions with no commitment. 
              Our team will help you set up and customize the platform to your specific needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-white" />
                <span>Full Feature Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-white" />
                <span>Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-white" />
                <span>Data Migration Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-white" />
                <span>Customized Onboarding</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-growiq-600 hover:bg-white/90">
                <Link to="/demo" className="flex items-center gap-2">
                  Get Started For Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/pricing" className="flex items-center gap-2">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Request Your Free Demo</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                  placeholder="Your institution name"
                />
              </div>
              
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                <input 
                  type="text" 
                  id="contact" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                <select 
                  id="type" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                >
                  <option value="">Select institution type</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="university">University</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-growiq-600 to-accent-600 hover:from-growiq-700 hover:to-accent-700">
                Schedule Free Demo
              </Button>
              <p className="text-center text-sm text-gray-500">
                No credit card required. Cancel anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
