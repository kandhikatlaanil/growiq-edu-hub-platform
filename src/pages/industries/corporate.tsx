import React from 'react';
import { Building2, BarChart, Video, BookOpen, Users, MessageSquare, Shield, Globe, CheckCircle, Lightbulb, Target, Laptop, Wifi, Tv, Award, Smartphone, FileText, Languages, Trophy, Lock, Brain } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Corporate = () => {
  const industries = [
    {
      icon: <Laptop className="w-6 h-6 text-accent-600" />,
      title: "Information Technology (IT) Companies",
      description: "Equip your tech teams with up-to-date certifications, agile methodologies, DevOps, cloud technologies, and more — through smart learning paths and real-time performance tracking."
    },
    {
      icon: <Wifi className="w-6 h-6 text-accent-600" />,
      title: "IoT-Based Companies",
      description: "Train your engineers, solution architects, and technicians on embedded systems, AI integration, edge computing, device security, and scalable IoT architecture via hands-on simulations and custom IoT labs."
    },
    {
      icon: <Users className="w-6 h-6 text-accent-600" />,
      title: "Corporate LMS for Enterprises",
      description: "From onboarding new hires to reskilling senior leadership, our Corporate LMS is tailored to your industry, hierarchy, and workflow. Personalized dashboards, gamified content, and adaptive learning pathways drive performance and engagement."
    },
    {
      icon: <Tv className="w-6 h-6 text-accent-600" />,
      title: "OTT Media & Entertainment Industry",
      description: "Train your editorial, production, content curation, and tech teams on content guidelines, compliance, production tools, platform monetization strategies, and user experience — all through interactive modules and multimedia lessons."
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-accent-600" />,
      title: "AI-Based Learning Recommendations"
    },
    {
      icon: <Trophy className="w-6 h-6 text-accent-600" />,
      title: "Gamified Assessments & Leaderboards"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent-600" />,
      title: "Mobile-First Microlearning"
    },
    {
      icon: <Video className="w-6 h-6 text-accent-600" />,
      title: "SCORM, xAPI, and Video Content Support"
    },
    {
      icon: <BarChart className="w-6 h-6 text-accent-600" />,
      title: "Analytics Dashboards for HR & L&D Teams"
    },
    {
      icon: <Languages className="w-6 h-6 text-accent-600" />,
      title: "Multi-Language Interface"
    },
    {
      icon: <Award className="w-6 h-6 text-accent-600" />,
      title: "Certificate Generation & Badge Systems"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent-600" />,
      title: "Integrations with Teams, Zoom, Slack, and Email"
    },
    {
      icon: <Lock className="w-6 h-6 text-accent-600" />,
      title: "Data-Secure & Compliant with Corporate Standards"
    }
  ];

  const benefits = [
    "Proven expertise across IT, IoT & OTT sectors",
    "Enterprise-grade security & compliance",
    "Deep customization for every department or division",
    "Cloud-native & device-agnostic",
    "Built for engagement, retention, and ROI"
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
                  🚀 Corporate Training – Empowering Digital Workforce Excellence
                </h1>
                <p className="text-lg opacity-90">
                  At GrowIQ, we specialize in building intelligent, scalable, and custom-fit Corporate Training Solutions for today's evolving industries. Whether you're an IT powerhouse, an IoT-driven enterprise, an OTT content leader, or a future-forward organization looking to upskill your team — we provide the digital backbone for your Learning & Development (L&D) strategy.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate Training"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Corporate+Training';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💼 Who We Serve</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((item, index) => (
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

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔧 Features of GrowIQ's Corporate Training Platform</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {feature.icon}
                    <p className="text-gray-700">{feature.title}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate Training Platform"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Corporate+Training+Platform';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scale Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🌍 Corporate Training that Scales</h2>
              </div>
              <p className="text-lg text-gray-700">
                Whether you're training 50 developers or 50,000 employees globally, GrowIQ ensures seamless delivery, tracking, and analysis of all training programs from a single digital platform — accessible anytime, anywhere.
              </p>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Global Training"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Global+Training';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💡 Why Choose GrowIQ for Corporate Training?</h2>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl italic text-gray-700 mb-8">
                "Skill up your workforce. Scale your vision."
              </blockquote>
              <p className="text-lg text-gray-700">
                GrowIQ bridges the gap between knowledge and execution, transforming how businesses learn, grow, and lead.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Corporate; 