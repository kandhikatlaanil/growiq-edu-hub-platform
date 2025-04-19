import React from 'react';
import { BookOpen, Users, Brain, Target, CheckCircle, Lightbulb, GraduationCap, BarChart, FileText, Briefcase, Clock, MessageSquare, CreditCard } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Coaching = () => {
  const offerings = [
    {
      icon: <BarChart className="w-6 h-6 text-accent-600" />,
      title: "Student Progress & Performance Tracking",
      description: "Monitor individual student progress through integrated dashboards, performance reports, and adaptive learning insights."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent-600" />,
      title: "Online & Hybrid Class Management",
      description: "Seamlessly conduct live or recorded classes via integration with Zoom, Google Meet, or any LMS. Share study materials, assignments, and video lectures in just a few clicks."
    },
    {
      icon: <Clock className="w-6 h-6 text-accent-600" />,
      title: "Smart Scheduling & Batch Management",
      description: "Create and manage multiple batches, subjects, and faculty assignments with drag-and-drop simplicity."
    },
    {
      icon: <Brain className="w-6 h-6 text-accent-600" />,
      title: "Real-Time Reports & Analytics",
      description: "Analyze student attendance, quiz scores, test performances, and faculty efficiency using real-time analytics."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent-600" />,
      title: "Communication & Engagement Tools",
      description: "Send announcements, homework reminders, test notifications, and performance updates via mobile app, SMS, or email."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-accent-600" />,
      title: "Fees & Payment Automation",
      description: "Automate fee collection, send reminders, generate receipts, and track payments – all in one secure platform."
    }
  ];

  const benefits = [
    "End-to-end student and center management",
    "Robust parent-student-teacher communication",
    "Scalable from single-branch to multi-city coaching networks",
    "Data-driven insights to improve learning outcomes",
    "Integrated learning, testing, and analytics tools",
    "White-label mobile apps & portals for your brand"
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
                  🏫 Coaching Institutions – Empowering Smart Learning & Operational Excellence
                </h1>
                <p className="text-lg opacity-90">
                  In today's fast-paced, competitive academic world, coaching institutions play a crucial role in shaping students' futures. At GrowIQ, we enable coaching centers to deliver personalized, tech-enabled, and performance-driven learning experiences, while also streamlining day-to-day operations with ease.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Coaching Center"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Coaching+Center';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🧠 What We Offer for Coaching Institutions</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((item, index) => (
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

        {/* Types of Coaching Centers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🌐 Tailored for Every Type of Coaching Center</h2>
              </div>
              <p className="text-lg text-gray-700">
                Whether you're running an IIT-JEE/NEET coaching center, CA/CPT classes, UPSC/SSC training, language school, skill development institute, or any competitive exam prep institute — GrowIQ provides flexible, scalable, and easy-to-use tech solutions designed specifically for your needs.
              </p>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Coaching Center Types"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Coaching+Center+Types';
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
                <h2 className="text-3xl font-bold">💡 Why Leading Coaching Institutions Choose GrowIQ</h2>
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
                "GrowIQ is your digital backbone – helping you focus more on teaching, while we take care of the technology."
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700">
                Empower your coaching institute with our smart digital solutions and redefine success for your students and your business.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Coaching; 