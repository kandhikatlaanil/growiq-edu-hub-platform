
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions or need assistance? Our team is here to help you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="p-4 bg-growiq-100 rounded-full w-fit mx-auto mb-4">
                <MapPin size={24} className="text-growiq-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Location</h3>
              <p className="text-gray-600">
                123 Tech Park, Education Street<br />
                Bangalore, Karnataka 560001<br />
                India
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="p-4 bg-growiq-100 rounded-full w-fit mx-auto mb-4">
                <Phone size={24} className="text-growiq-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h3>
              <p className="text-gray-600">
                Sales: +91 98765 43210<br />
                Support: +91 98765 43211<br />
                Office: +91 80 1234 5678
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="p-4 bg-growiq-100 rounded-full w-fit mx-auto mb-4">
                <Mail size={24} className="text-growiq-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Email Us</h3>
              <p className="text-gray-600">
                Sales: sales@growiq.tech<br />
                Support: support@growiq.tech<br />
                Info: info@growiq.tech
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growiq-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-growiq-600 to-accent-600 hover:from-growiq-700 hover:to-accent-700">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-growiq-100 rounded-lg text-growiq-600">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Sales Inquiries</h3>
                    <p className="text-gray-600 mb-4">
                      Interested in our solutions? Our sales team will help you find the right plan for your institution.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Phone size={16} className="text-growiq-600" />
                        <span className="text-gray-700">+91 98765 43210</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail size={16} className="text-growiq-600" />
                        <span className="text-gray-700">sales@growiq.tech</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-growiq-100 rounded-lg text-growiq-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Support Hours</h3>
                    <p className="text-gray-600 mb-4">
                      Our technical support team is available to assist you with any issues or questions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1">
                          <Clock size={16} className="text-growiq-600" />
                        </div>
                        <div>
                          <span className="text-gray-700 font-medium">Weekdays:</span>
                          <span className="text-gray-600 ml-2">9:00 AM - 8:00 PM IST</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1">
                          <Clock size={16} className="text-growiq-600" />
                        </div>
                        <div>
                          <span className="text-gray-700 font-medium">Weekends:</span>
                          <span className="text-gray-600 ml-2">10:00 AM - 6:00 PM IST</span>
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone size={16} className="text-growiq-600" />
                        <span className="text-gray-700">+91 98765 43211</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail size={16} className="text-growiq-600" />
                        <span className="text-gray-700">support@growiq.tech</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="h-72 bg-gray-200 rounded-xl overflow-hidden">
                {/* This would be replaced with an actual map component in a real implementation */}
                <div className="h-full flex items-center justify-center text-gray-500">
                  <MapPin size={24} className="mr-2" />
                  <span>Google Map would be integrated here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
