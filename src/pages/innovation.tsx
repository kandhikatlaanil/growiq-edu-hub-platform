import React from 'react';
import { Lightbulb, Rocket, Search, Users, Brain, Target, Beaker } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Innovation = () => {
  const innovationAreas = [
    "AI-powered learning models",
    "IoT-enabled smart campuses",
    "Blockchain in student records & credentials",
    "Data analytics & predictive insights for education performance"
  ];

  const rndEcosystem = [
    "Proof of Concept (PoC) creation & validation",
    "User behavior tracking & usability testing",
    "Rapid prototyping & feedback-driven iterations",
    "Integration with emerging platforms like Copilot, Power Platform, and Dataverse"
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
                  🚀 Innovation & R&D
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Pioneering the Future of Smart Learning & Intelligent Solutions
                </p>
                <p className="text-lg opacity-90">
                  At GrowIQ, innovation isn't just a department — it's a mindset that drives everything we do. We believe in pushing boundaries, challenging the norm, and designing solutions that aren't just relevant today but are future-ready.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Innovation & R&D"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Innovation+%26+R%26D';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700">
                Our Research & Development (R&D) team works at the intersection of technology, education, and business to craft intelligent systems that power tomorrow's smart campuses, schools, and institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Driven by Curiosity Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Search className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔍 Driven by Curiosity, Fueled by Purpose</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                From ideation to deployment, our R&D process is rooted in solving real-world problems. Whether it's building intelligent automation in school ERP systems, integrating IoT for smart classrooms, or applying AI to personalize learning — we research deeply, prototype boldly, and iterate fast.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {innovationAreas.map((area, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lab to Launch Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Beaker className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔬 Lab to Launch: Our R&D Ecosystem</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We run dedicated innovation labs and cross-functional sprints where engineers, analysts, UX designers, and product strategists collaborate to bring ideas to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rndEcosystem.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnering Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💡 Partnering with Visionaries</h2>
              </div>
              <p className="text-lg text-gray-700">
                Our Innovation team partners with institutions, EdTech startups, and government bodies to co-create solutions that redefine learning. From predictive models to help with student dropouts, to real-time dashboards for school management — our solutions drive actionable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🧠 Learning Never Stops</h2>
              </div>
              <p className="text-lg text-gray-700">
                We invest in R&D not just for our products, but for our people too. Through continuous learning, certifications, research papers, and tech conferences — our teams stay ahead of the curve.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🌐 Innovate with Impact</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Every innovation at GrowIQ is designed to make an impact — whether it's reducing admin overload, improving classroom experiences, or helping institutions make data-driven decisions.
              </p>
              <div className="text-center">
                <p className="text-xl font-semibold text-accent-600">
                  At GrowIQ, we don't just follow trends — we set them.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Innovation; 