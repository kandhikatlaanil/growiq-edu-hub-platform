import React from 'react';
import { Building2, BarChart, Video, BookOpen, Users, MessageSquare, Shield, Globe, CheckCircle, Lightbulb, Target } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Government = () => {
  const solutions = [
    {
      icon: <Building2 className="w-6 h-6 text-accent-600" />,
      title: "Centralized School/College Management Systems",
      description: "Digitize the management of hundreds or thousands of government-run schools and colleges through a unified, cloud-based platform."
    },
    {
      icon: <BarChart className="w-6 h-6 text-accent-600" />,
      title: "Data-Driven Decision Making",
      description: "Real-time analytics and reporting dashboards that provide visibility into student enrollment, academic performance, teacher efficiency, and infrastructure utilization."
    },
    {
      icon: <Video className="w-6 h-6 text-accent-600" />,
      title: "Hybrid & Remote Learning Enablement",
      description: "Facilitate online, blended, and in-classroom learning models through LMS integration, live classes, video libraries, and e-resource portals — even in rural or low-bandwidth areas."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-accent-600" />,
      title: "Curriculum & Exam Management",
      description: "Standardize academic planning, curriculum delivery, and examination procedures across schools and regions with automation and content management tools."
    },
    {
      icon: <Users className="w-6 h-6 text-accent-600" />,
      title: "Teacher & Staff Portals",
      description: "Empower teachers with digital tools for attendance tracking, lesson planning, assessments, and professional development."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent-600" />,
      title: "Citizen & Parent Engagement",
      description: "Engage parents and the public through mobile apps, SMS alerts, performance reports, and education progress dashboards — increasing transparency and trust."
    },
    {
      icon: <Shield className="w-6 h-6 text-accent-600" />,
      title: "Compliance & Data Security",
      description: "Ensure adherence to government regulations, data protection laws, and educational quality standards with secure and auditable systems."
    }
  ];

  const benefits = [
    "Made in India – tailored for Indian public education challenges",
    "Scalable architecture for 100s to 1000s of institutions",
    "Multi-language & inclusive user interfaces",
    "Offline support and data sync for rural areas",
    "Secure, compliant, and cloud-hosted",
    "Seamless integration with government databases (e.g., Aadhaar, EMIS)"
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
                  🏛️ Government Educational Bodies – Driving Digital Transformation in Public Education
                </h1>
                <p className="text-lg opacity-90">
                  At GrowIQ, we are proud to support Government Educational Bodies in their mission to provide inclusive, equitable, and quality education to all. Our robust, scalable, and secure digital solutions are purpose-built to meet the unique challenges of public education systems — from primary education boards to higher education councils and state/national-level authorities.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Government Education"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Government+Education';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔧 Our Solutions for Government Educational Institutions</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scale Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🌐 Serving at Scale – From District to National Level</h2>
              </div>
              <p className="text-lg text-gray-700">
                Whether you're a District Education Office, State Education Board, National Council for Education, Open Schooling Body, or a Government-Run University, GrowIQ helps digitize operations while ensuring accessibility, affordability, and transparency.
              </p>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Government Education Scale"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Government+Education+Scale';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💡 Why Government Bodies Choose GrowIQ</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-600" />
                    <p className="text-gray-700">{benefit}</p>
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
                "Our mission is to support the digital transformation of India's public education system – from classrooms to campuses, from records to results."
              </blockquote>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Transformation"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Digital+Transformation';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700">
                GrowIQ is proud to partner with Government Educational Bodies in building a smarter, more connected future for every learner.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Government; 