
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, School, GraduationCap, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DemoPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted",
      description: "Thank you! Our team will contact you shortly to schedule your free demo.",
    });
  };

  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get Your Free 30-Day Trial
            </h1>
            <p className="text-xl text-gray-600">
              Experience the full power of GrowIQ's comprehensive management solutions with no commitment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Request Your Free Demo</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="Your institution name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                    <input 
                      type="text" 
                      id="contact" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                    <select 
                      id="type" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select institution type</option>
                      <option value="school">School</option>
                      <option value="college">College</option>
                      <option value="university">University</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Specific Requirements</label>
                    <textarea 
                      id="requirements" 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="Tell us about your specific needs and challenges"
                    ></textarea>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-growiq-600 to-accent-600 hover:from-growiq-700 hover:to-accent-700">
                  Schedule Free Demo
                </Button>
                <p className="text-center text-sm text-gray-500">
                  No credit card required. Cancel anytime.
                </p>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-growiq-100 rounded-lg text-growiq-600">
                    <School size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">School Management System</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive solution for K-12 schools to manage students, staff, resources, and communications.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Attendance & Leave Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Fee Collection & Accounting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Examination & Results Management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-growiq-100 rounded-lg text-growiq-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">College Management System</h3>
                    <p className="text-gray-600 mb-4">
                      Tailored solution for colleges and universities with advanced academic and administrative features.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Course & Curriculum Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Faculty Evaluation System</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Research & Project Tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-growiq-100 rounded-lg text-growiq-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">E-Learning Platform</h3>
                    <p className="text-gray-600 mb-4">
                      State-of-the-art online learning platform to conduct virtual classes and facilitate digital education.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Virtual Classrooms & Webinars</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Content Management & Sharing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-growiq-600" />
                        <span className="text-gray-700">Online Assessments & Quizzes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemoPage;
