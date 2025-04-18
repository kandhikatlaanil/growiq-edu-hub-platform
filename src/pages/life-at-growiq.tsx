import React from 'react';
import { Code, Users, Brain, Heart, Rocket, BookOpen, Lightbulb } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const LifeAtGrowIQ = () => {
  const techStack = [
    "Microsoft Power Platform, Dynamics 365, and Dataverse",
    ".NET, JavaScript, TypeScript",
    "Azure, AWS, Docker, Kubernetes",
    "AI & ML for smart automation",
    "Power BI & Data Visualization tools",
    "IoT integrations for smart campuses"
  ];

  const benefits = [
    "Flexible work hours & hybrid culture",
    "Tech Time reserved for upskilling and R&D",
    "Fun Fridays, open mic nights & game zones",
    "Recognition programs that highlight your impact"
  ];

  const learningOpportunities = [
    "Certification sponsorships (Microsoft, Azure, etc.)",
    "Access to premium learning platforms",
    "Leadership training for senior engineers",
    "Internal tech mentoring from architects & CTOs"
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
                  👨‍💻 Life as a Developer at GrowIQ
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  A Culture Built for Techies, by Techies
                </p>
                <p className="text-lg opacity-90">
                  At GrowIQ, developers don't just write code — they build the future. We're more than just a tech company — we're a community of thinkers, builders, problem-solvers, and lifelong learners.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Developer Team"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=Life+at+GrowIQ';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Playground Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🧠 A Playground for Curious Minds</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We encourage our developers to ask questions, challenge assumptions, and experiment freely. Whether you're working on ERP automation, AI-enhanced education platforms, or scalable microservices, you're empowered to explore new tools, languages, and frameworks without limitations.
              </p>
              <p className="text-lg font-semibold text-accent-600">
                You bring the curiosity — we provide the freedom to explore.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🛠️ Cutting-Edge Stack, Real-World Problems</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Our tech stack is modern, robust, and constantly evolving. We build using:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techStack.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🤝 Collaboration {'>'} Competition</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                At GrowIQ, we believe the best tech is built together. You'll work in agile teams with Product Owners, UX Designers, QA Engineers, and fellow developers who believe in knowledge-sharing, pair programming, and whiteboard brainstorming.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Daily stand-ups that matter</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Tech huddles & lightning talks</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Internal hackathons & side project Fridays</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Code reviews that teach, not judge</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Balance Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🧘‍♂️ Balance, Well-being & Belonging</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We know passionate developers need more than just great projects — they need mental space, ownership, and a sense of belonging.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🎓 Learning Is In Our DNA</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We invest heavily in developer growth:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningOpportunities.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{item}</p>
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
                "At GrowIQ, I don't feel like I just have a job. I feel like I'm part of a mission to change how the world learns through technology."
              </blockquote>
              <p className="text-lg font-semibold text-accent-600">
                — A real GrowIQ Developer
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🔍 Are You a Builder at Heart?</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                If you love solving complex problems, experimenting with bleeding-edge tech, and being surrounded by smart and passionate minds — GrowIQ is your tribe.
              </p>
              <p className="text-xl font-semibold text-accent-600">
                Come build with us. Let's redefine what's possible, together.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LifeAtGrowIQ; 