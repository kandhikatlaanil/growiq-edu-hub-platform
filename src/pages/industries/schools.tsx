import React from 'react';
import { BookOpen, Users, Brain, Target, CheckCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Schools = () => {
  const features = [
    "End-to-End Digital Transformation",
    "Smart Classroom Integration",
    "Student Information System (SIS)",
    "Parent-Teacher Collaboration Tools",
    "Fee & Finance Management",
    "Exam & Results Automation",
    "Transport & Hostel Management"
  ];

  const impacts = [
    "Improved operational transparency",
    "Increased parental engagement",
    "Higher student performance tracking",
    "Reduced manual errors and paperwork",
    "Enhanced digital literacy among staff and students"
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-accent-600 to-growiq-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  🏫 Schools – Empowering the Future of Education
                </h1>
                <p className="text-lg opacity-90">
                  At GrowIQ, we're on a mission to transform how schools teach, manage, and evolve through cutting-edge technology. From primary institutions to higher secondary schools, we deliver smart, scalable, and intuitive digital solutions that simplify operations, enhance student engagement, and empower educators.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Smart School"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Smart+School';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Schools Choose GrowIQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">📘 Why Schools Choose GrowIQ</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Education today demands more than chalkboards and attendance registers. Schools are evolving, and so are their needs. With GrowIQ, schools gain access to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Building Smart Schools Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🧠 Building Smart Schools with Tech</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Our solutions go beyond administration — we help create future-ready, tech-enabled learning environments where students thrive, teachers feel supported, and school leadership gains real-time visibility.
              </p>
              <p className="text-lg text-gray-700">
                With a focus on AI, IoT, Power Platform, and Data Analytics, we empower schools to make informed decisions that improve learning outcomes, reduce operational costs, and increase overall efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🌍 The GrowIQ Impact in Schools</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {impacts.map((impact, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600" />
                    <p className="text-gray-700">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl italic text-gray-700 mb-8">
                "We don't just build tools for schools — we build the future of learning."
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">Ready to Transform Your School?</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're a school in a metro city or a rural institution looking to digitize, GrowIQ has the expertise and technology to support your journey.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Schools; 