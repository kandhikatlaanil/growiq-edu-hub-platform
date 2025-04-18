import React from 'react';
import { Check, Users, BookOpen, Calendar, CreditCard, MapPin, Bell, Smartphone, FileText, Shield, BarChart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const CollegeManagement = () => {
  const features = [
    {
      title: "Student Lifecycle",
      icon: <Users className="w-8 h-8" />,
      items: [
        "End-to-end digital admission process",
        "Academic records, student profile, ID card generation",
        "Real-time performance tracking & report cards"
      ]
    },
    {
      title: "Faculty Management",
      icon: <BookOpen className="w-8 h-8" />,
      items: [
        "Timetable scheduling",
        "Leave & attendance tracking",
        "Workload allocation and performance analytics"
      ]
    },
    {
      title: "Admin & Academic",
      icon: <Calendar className="w-8 h-8" />,
      items: [
        "Course & department setup",
        "Class & batch management",
        "Semester-wise subject allocation"
      ]
    },
    {
      title: "Finance & Fees",
      icon: <CreditCard className="w-8 h-8" />,
      items: [
        "Multi-mode fee collection",
        "Auto-generated fee receipts & dues tracking",
        "Income, expenditure & scholarship tracking"
      ]
    }
  ];

  const benefits = [
    "Save Time & Costs with Automation",
    "Improve Transparency Across Departments",
    "Boost Academic Outcomes",
    "Strengthen Communication with Students & Parents",
    "Meet Regulatory Compliance Easily (AICTE, UGC, NAAC)"
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
                  🎓 GrowIQ College Management System
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Empowering Campuses, Enabling Excellence
                </p>
                <p className="text-lg opacity-90">
                  In today's competitive and fast-paced education environment, managing a college is no longer limited to attendance sheets and exam schedules.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://xrkfliefyekwqujcvdtb.supabase.co/storage/v1/object/sign/growiqstorage/1716377cd614f7b416d16c5d8c264a97.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2IyZDhlZjJmLTI3OTktNDMxZC05NzUzLWM3YjZkM2E5Y2FjZCJ9.eyJ1cmwiOiJncm93aXFzdG9yYWdlLzE3MTYzNzdjZDYxNGY3YjQxNmQxNmM1ZDhjMjY0YTk3LmpwZyIsImlhdCI6MTc0NDk5NTY1MywiZXhwIjoyMDYwMzU1NjUzfQ.mSBHN3QcLQeiVRlipYy32_dlfvRGp2Vwmy-dATc8BuA"
                  alt="College Management System"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">💡 Why GrowIQ College Management System?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We understand that every institution is unique. That's why GrowIQ offers a fully customizable, cloud-based ERP for colleges – covering everything from admissions to alumni.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you're running an engineering college, a degree college, or a professional institution, GrowIQ provides the tools you need to make smarter decisions, streamline operations, and deliver a seamless experience to students, faculty, and administrators alike.
                </p>
              </div>
              <div>
                <img 
                  src="https://xrkfliefyekwqujcvdtb.supabase.co/storage/v1/object/sign/growiqstorage/college.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2IyZDhlZjJmLTI3OTktNDMxZC05NzUzLWM3YjZkM2E5Y2FjZCJ9.eyJ1cmwiOiJncm93aXFzdG9yYWdlL2NvbGxlZ2UuanBnIiwiaWF0IjoxNzQ0OTk1NjgxLCJleHAiOjE3NzY1MzE2ODF9.y_yxXE1Oc_uvlcma9Yb5I-ypykLk3zi8WyzurE-ImFo"
                  alt="College Features"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">🚀 Key Features That Power Your Institution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-accent-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent-600 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-accent-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-accent-600" />
                  📱 Mobile App Access
                </h3>
                <ul className="space-y-2">
                  <li>Instant access to schedule & marks</li>
                  <li>Notifications & announcements</li>
                  <li>Digital library access</li>
                </ul>
              </div>
              <div className="bg-accent-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-accent-600" />
                  🔒 Security & Reliability
                </h3>
                <ul className="space-y-2">
                  <li>99.9% uptime guarantee</li>
                  <li>Bank-level encryption</li>
                  <li>Auto backup & recovery</li>
                </ul>
              </div>
              <div className="bg-accent-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-accent-600" />
                  🧠 Decision Support
                </h3>
                <ul className="space-y-2">
                  <li>360° performance view</li>
                  <li>Real-time analytics</li>
                  <li>Actionable insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & CTA */}
        <section className="py-16 bg-accent-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">📈 Benefits of GrowIQ College ERP</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-6 h-6 text-white" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-white text-accent-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                  Schedule a Demo
                </button>
              </div>
              <div>
                <img 
                  src="https://xrkfliefyekwqujcvdtb.supabase.co/storage/v1/object/sign/growiqstorage/college.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2IyZDhlZjJmLTI3OTktNDMxZC05NzUzLWM3YjZkM2E5Y2FjZCJ9.eyJ1cmwiOiJncm93aXFzdG9yYWdlL2NvbGxlZ2UuanBnIiwiaWF0IjoxNzQ0OTk1Njg5LCJleHAiOjE3NzY1MzE2ODl9.mLjzWVROu_yY891OMW8m4T3bnO2VuMMI7shk74othA4"
                  alt="College Benefits"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CollegeManagement; 