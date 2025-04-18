import React from 'react';
import { Check, Clock, Bell, BookOpen, Video, FileText, MessageSquare, Shield, Leaf, Smartphone, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ELearning = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Learn Anytime, Anywhere",
      description: "Break free from time and place restrictions. Access lessons when it's most convenient—supporting both regular schooling and revision."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Live Class Notifications",
      description: "Never miss a class! Automated alerts for upcoming live sessions via Zoom or Google Meet with direct platform access."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Unlimited Digital Resources",
      description: "All study materials stored securely in the cloud. Rewatch lessons, re-read notes, and relearn concepts as needed."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Multi-Format Learning",
      description: "Support for animated videos, recorded lectures, audio guides, PDFs, and interactive presentations for better understanding."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Online Quizzes",
      description: "Create and schedule quizzes easily with instant feedback. Real-time assessment boosts confidence and provides insights."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Interactive Discussion",
      description: "Collaborate, raise doubts, and continue conversations through our in-app Discussion Board—encouraging peer learning."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Centralized",
      description: "Secure and structured space with curated academic resources. Access only verified, relevant materials—reducing distractions."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Cost-Efficient & Eco-Friendly",
      description: "Digital-first model minimizes operational costs and promotes eco-friendly learning—benefitting budgets and environment."
    }
  ];

  const features = [
    "Tailored for Indian school curriculums (CBSE, ICSE, State Boards)",
    "Easy integration with existing school ERP system",
    "Parent and student mobile apps included",
    "Built-in video conferencing support",
    "Automated attendance and performance reports"
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
                  📚 GrowIQ E-Learning System
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Empowering Digital Classrooms, Enhancing Learning Outcomes
                </p>
                <p className="text-lg opacity-90">
                  In today's digital-first world, education is no longer limited to the four walls of a classroom. With the rise of e-learning, GrowIQ Edu Tech Solution Pvt. Ltd. introduces a powerful and intuitive E-Learning Software designed specifically for schools.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="E-Learning Platform"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is E-Learning Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">🌐 What is GrowIQ E-Learning?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  GrowIQ's E-Learning module is a web-based online education solution that simplifies digital learning for schools, teachers, and students. It combines live classes, digital content, performance tracking, and communication—all in one user-friendly platform.
                </p>
                <p className="text-lg text-gray-700">
                  Our platform supports interactive videos, audio lessons, PowerPoint presentations, PDFs, and notes, making learning more effective and engaging than ever before.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Learning"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">💡 Key Benefits of GrowIQ E-Learning Software</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="text-accent-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">🔍 Why Choose GrowIQ for Your School's E-Learning Needs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-accent-600">
                      <Check size={20} />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">🚀 Let's Take Learning to the Next Level</h2>
              <p className="text-lg mb-8">
                GrowIQ E-Learning Software is more than just an online class platform—it's a complete digital learning ecosystem designed to drive academic success, encourage collaboration, and prepare students for a brighter tomorrow.
              </p>
              <button className="bg-white text-accent-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ELearning; 