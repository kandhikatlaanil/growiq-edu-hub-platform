import React from 'react';
import { Check, MapPin, Bell, ChartBar, Shield, Phone } from 'lucide-react';

const SchoolManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-growiq-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose GrowIQ Edu Hub – A Smarter Way to Manage Your School
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              When most people hear "School ERP" or "School Management Software," they usually think of it as a tool for just reporting and maintaining records. But that's an old-school way of thinking. In today's fast-paced world, a school needs much more than just reporting – it needs an efficient, automated, and intelligent system that not only saves time but also boosts productivity and streamlines everyday operations.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              At GrowIQ Edu Tech Solution Pvt. Ltd., we understand that every school has its own set of requirements, and that's exactly why we've built a comprehensive and fully customizable School Management Software – designed to meet the practical needs of modern educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              🏫 From Routine Tasks to Complete School Intelligence
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Gone are the days when school software was used just for managing attendance or exam schedules. Today's schools demand a system that empowers teachers, parents, students, and school management alike. That's where GrowIQ Edu Hub comes in – a next-generation School ERP platform that brings all stakeholders together on a single, real-time, cloud-based platform.
            </p>

            <div className="bg-accent-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">
                🌐 Hosted on AWS – Reliable. Scalable. Secure.
              </h3>
              <p className="text-gray-700">
                Our software is securely hosted on Amazon Web Services (AWS) – one of the world's most trusted cloud platforms. This ensures high performance, real-time data access, top-notch security, and scalability – so your school can grow without limits.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">📱 Smart Features for Smart Schools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Custom Mobile App for your school – personalized for parents, students, and teachers",
                  "Live GPS Tracking – track school buses in real-time for safety",
                  "Automated Attendance & Timetable – less paperwork, more accuracy",
                  "Fees & Finance Management – with complete audit trails and alerts",
                  "MIS Reports & Dashboards – real-time insights for better decision-making",
                  "Communication Tools – send instant alerts, emails, and notifications",
                  "Student & Staff Portals – everything accessible, transparent, and streamlined"
                ].map((feature, index) => (
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
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                🔍 Decision Support System, Not Just a Reporting Tool
              </h3>
              <p className="text-gray-700">
                We believe your school ERP should be more than just a digital register. GrowIQ Edu Hub acts as a Decision Support System (DSS) – giving school leaders a bird's eye view of every critical aspect – right from financial reports, admission data, staff involvement, approvals, to student performance analytics.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                🔒 Complete Transparency & Accountability
              </h3>
              <p className="text-gray-700">
                Every transaction, approval, or update on the system is recorded with time stamps and user access logs. Whether it's fee collection, leave approvals, or exam updates – there's always a clear audit trail to ensure accountability and trust.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                🌟 Constantly Evolving With Your Feedback
              </h3>
              <p className="text-gray-700">
                At GrowIQ Edu Tech, we don't just offer software – we offer a solution that evolves with you. With regular updates, new modules, and improvements based on feedback from schools like yours, we ensure our platform always stays ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">📞 Let's Talk!</h2>
            <p className="text-xl mb-8">
              Ready to take your school's administration to the next level?
            </p>
            <p className="text-lg">
              Get in touch with GrowIQ Edu Tech Solution Private Limited today and experience the future of school management.
            </p>
            <button className="mt-8 bg-white text-accent-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolManagement; 