import React from 'react';
import { BookOpen, Users, Brain, Target, CheckCircle, Lightbulb, GraduationCap, BarChart, FileText, Briefcase } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Colleges = () => {
  const offerings = [
    {
      icon: <BookOpen className="w-6 h-6 text-accent-600" />,
      title: "Centralized Academic Management",
      description: "Streamline curriculum planning, timetabling, attendance tracking, grading, and progress monitoring — all on one unified platform."
    },
    {
      icon: <Users className="w-6 h-6 text-accent-600" />,
      title: "Student Lifecycle Management",
      description: "From admissions to alumni — manage the complete student journey using real-time, data-driven insights."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent-600" />,
      title: "Digital Classrooms & E-Learning",
      description: "Seamlessly integrate with LMS tools, host live lectures, share resources, and create an interactive, hybrid learning environment."
    },
    {
      icon: <BarChart className="w-6 h-6 text-accent-600" />,
      title: "Advanced Analytics & Dashboards",
      description: "Enable leadership and faculty to make smarter decisions with performance analytics, placement data, and student insights."
    },
    {
      icon: <Brain className="w-6 h-6 text-accent-600" />,
      title: "Research & Collaboration Tools",
      description: "Support collaborative learning, project submissions, online thesis evaluations, and peer-review processes with smart tools."
    },
    {
      icon: <FileText className="w-6 h-6 text-accent-600" />,
      title: "Campus ERP & Finance Automation",
      description: "Digitize fee collection, budgeting, payroll, procurement, hostel and transport management — all in one place."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent-600" />,
      title: "Career & Placement Management",
      description: "Equip placement cells with portals to manage job postings, student profiles, mock interviews, recruiter dashboards, and analytics."
    }
  ];

  const benefits = [
    "Modern, cloud-based, scalable infrastructure",
    "Personalized student experiences",
    "Improved administrative efficiency",
    "Real-time academic and operational insights",
    "Secure and compliant data management",
    "Integration-ready with third-party platforms (LMS, Tally, biometric, etc.)"
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
                  🎓 Colleges & Universities – Enabling Next-Gen Campus Transformation
                </h1>
                <p className="text-lg opacity-90">
                  At GrowIQ, we understand that the higher education landscape is rapidly evolving. With increasing student expectations, the demand for digital-first infrastructure, and the push toward data-driven decision-making — colleges and universities need robust, intelligent solutions to stay ahead.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="University Campus"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/2563eb/ffffff?text=University+Campus';
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
                <h2 className="text-3xl font-bold">🧩 What We Offer for Colleges & Universities</h2>
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

        {/* Digital Innovation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">🌐 Driving Digital Innovation in Higher Education</h2>
              </div>
              <p className="text-lg text-gray-700">
                With deep expertise in technologies like Microsoft Power Platform, Dynamics 365, AI, IoT, and Data Analytics, GrowIQ empowers colleges and universities to reimagine their campuses. Whether it's through paperless administration, real-time student engagement, or data-backed strategic planning — we help institutions stay future-ready.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-accent-600" />
                <h2 className="text-3xl font-bold">💡 Why Colleges & Universities Partner with GrowIQ?</h2>
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
                "We don't just digitize campuses. We help them evolve into intelligent, student-centric ecosystems."
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700">
                Whether you're a private university, autonomous college, or multi-campus institution — GrowIQ helps you unlock your full potential with technology.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Colleges; 