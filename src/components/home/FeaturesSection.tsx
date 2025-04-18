
import React from 'react';
import { BookOpen, Users, Clock, Bell, MessageSquare, UserCheck, Clipboard, FileText, BookMarked, CreditCard, Calendar, Activity } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="feature-card bg-white p-6 rounded-xl border border-gray-100">
      <div className="p-3 bg-gradient-to-br from-growiq-50 to-accent-50 rounded-lg w-fit mb-4">
        <div className="text-growiq-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: <BookOpen size={24} />,
    title: 'Library Management',
    description: 'Streamline library operations with automated book tracking, lending, and returns process.'
  },
  {
    icon: <Users size={24} />,
    title: 'Student Management',
    description: 'Track student information, attendance, performance, and communication with parents.'
  },
  {
    icon: <Clock size={24} />,
    title: 'Timetable Management',
    description: 'Create and manage timetables for classes, teachers, and resources with conflict detection.'
  },
  {
    icon: <Bell size={24} />,
    title: 'Alert Management',
    description: 'Automated notifications for attendance, assignments, exams, and other important events.'
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Parent-Teacher Interaction',
    description: 'Facilitate communication between parents and teachers for better student development.'
  },
  {
    icon: <UserCheck size={24} />,
    title: 'Attendance Management',
    description: 'Record and track attendance for students and staff with real-time reporting.'
  },
  {
    icon: <Clipboard size={24} />,
    title: 'Examination Management',
    description: 'Manage exam scheduling, results analysis, and report card generation.'
  },
  {
    icon: <FileText size={24} />,
    title: 'Document Management',
    description: 'Generate and store certificates, ID cards, and other important documents securely.'
  },
  {
    icon: <BookMarked size={24} />,
    title: 'E-Learning Platform',
    description: 'Conduct virtual classes, share study materials, and enable online assessments.'
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Fee Management',
    description: 'Streamline fee collection, payment tracking, and receipt generation.'
  },
  {
    icon: <Calendar size={24} />,
    title: 'Event Management',
    description: 'Plan, organize, and manage school events, holidays, and special activities.'
  },
  {
    icon: <Activity size={24} />,
    title: 'Analytics & Reporting',
    description: 'Generate comprehensive reports and insights for data-driven decision making.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h6 className="text-growiq-600 font-semibold mb-3">FEATURES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive Management Solutions for Educational Institutions</h2>
          <p className="text-gray-600 text-lg">
            Our suite of software modules helps schools and colleges manage everything from academics to administration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
