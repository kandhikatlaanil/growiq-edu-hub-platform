import React from 'react';
import { Lightbulb, Target, Users, Rocket, Shield, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  const whyChoosePoints = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Built by Industry Veterans",
      description: "Developed by professionals with real-time institutional experience"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Designed to grow with institutions of all sizes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Backed by companies with a history of digital excellence"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "Continuous improvement through feedback and innovation"
    }
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
                  About GrowIQ
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Revolutionizing Education Management Through Innovation
                </p>
                <p className="text-lg opacity-90">
                  A powerful synergy of technology and education expertise, creating smarter solutions for educational institutions.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="GrowIQ Team"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  GrowIQ was born from the shared vision of two innovative companies — Workist For IT Pvt Ltd, a leading IT recruitment and enterprise solutions provider, and Delta IoT Solutions Pvt Ltd, a pioneer in Internet of Things (IoT) and automation technologies.
                </p>
                <p className="text-lg text-gray-700">
                  Recognizing the gap in digital transformation within the education sector, the leadership teams of both companies came together with a bold idea — to create an intelligent, future-ready, and all-in-one platform that empowers educational institutions to run smarter, leaner, and more efficiently.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Innovation in Education"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Purpose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-3 bg-accent-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Purpose</h2>
              <p className="text-lg text-gray-700">
                To revolutionize education management through seamless automation, intelligent insights, and user-friendly platforms — enabling schools, colleges, and training institutions to focus more on learning outcomes and less on administrative overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Backed by Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Team Collaboration"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Backed by Experience, Driven by Innovation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Workist For IT Pvt Ltd brought its years of experience in enterprise consulting, software development, and industry-specific process automation.
                </p>
                <p className="text-lg text-gray-700">
                  Delta IoT Solutions Pvt Ltd contributed its deep expertise in smart systems, hardware-software integration, and scalable cloud architectures.
                </p>
                <p className="text-lg text-gray-700 mt-6">
                  Together, this synergy helped develop a robust and scalable education management system with a unique blend of ERP intelligence, cloud-native technology, and AI-readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose GrowIQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose GrowIQ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoosePoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="text-accent-600 mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-3 bg-accent-100 rounded-full mb-6">
                <Lightbulb className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700">
                To become the most trusted digital backbone for educational institutions worldwide, offering smart, secure, and integrated solutions that simplify complex academic and operational workflows.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About; 