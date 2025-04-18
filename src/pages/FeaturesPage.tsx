
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  BookOpen, Users, Clock, Bell, MessageSquare, UserCheck, Clipboard, FileText, BookMarked, CreditCard, Calendar, Activity,
  Bus, Library, BarChart, User, UserPlus, FileCheck, LucideIcon, Briefcase, School, BookOpen as Book, Landmark, Settings
} from 'lucide-react';

interface FeatureModule {
  icon: LucideIcon;
  title: string;
  description: string;
  category: 'school' | 'college' | 'common';
}

const modules: FeatureModule[] = [
  {
    icon: Bus,
    title: 'Transport Management System',
    description: 'Track and manage transportation for students, staff, and resources with route planning and scheduling.',
    category: 'common'
  },
  {
    icon: Library,
    title: 'Library Management System',
    description: 'Automate library operations including cataloging, circulation, and inventory management.',
    category: 'common'
  },
  {
    icon: Clock,
    title: 'Timetable Management',
    description: 'Create and manage timetables for classes, teachers, and resources with conflict detection.',
    category: 'common'
  },
  {
    icon: BarChart,
    title: 'Accounting: Fee Management',
    description: 'Streamline fee collection, payment tracking, and receipt generation for better financial management.',
    category: 'common'
  },
  {
    icon: Bell,
    title: 'Alert Management System',
    description: 'Send automated notifications for attendance, assignments, exams, and other important events.',
    category: 'common'
  },
  {
    icon: MessageSquare,
    title: 'Parent-Teacher Interaction',
    description: 'Facilitate communication between parents and teachers for better student development.',
    category: 'school'
  },
  {
    icon: User,
    title: 'Visitor Management System',
    description: 'Track and manage visitors to your institution for enhanced security and record-keeping.',
    category: 'common'
  },
  {
    icon: UserCheck,
    title: 'Attendance Management System',
    description: 'Record and track attendance for students and staff with real-time reporting and analytics.',
    category: 'common'
  },
  {
    icon: UserPlus,
    title: 'Discipline Management System',
    description: 'Monitor and maintain student discipline with incident reporting and intervention tracking.',
    category: 'school'
  },
  {
    icon: Calendar,
    title: 'Leave Management System',
    description: 'Streamline leave requests, approvals, and tracking for students and staff members.',
    category: 'common'
  },
  {
    icon: BookMarked,
    title: 'E-learning System: Virtual Classroom',
    description: 'Conduct live online classes with video, audio, and interactive learning tools.',
    category: 'common'
  },
  {
    icon: FileCheck,
    title: 'Transfer Certificate Generation',
    description: 'Generate and manage transfer certificates and other documents with digital signatures.',
    category: 'school'
  },
  {
    icon: Activity,
    title: 'Healthcare Management System',
    description: 'Record and track student health records, medical history, and clinic visits.',
    category: 'common'
  },
  {
    icon: Users,
    title: 'Co-curricular Activities Management',
    description: 'Organize and track extracurricular activities, clubs, and events for holistic development.',
    category: 'school'
  },
  {
    icon: MessageSquare,
    title: 'Enquiry Management System',
    description: 'Track and manage admission inquiries, follow-ups, and conversion metrics.',
    category: 'common'
  },
  {
    icon: UserPlus,
    title: 'Online Admission Management',
    description: 'Streamline the admission process with online applications, document uploads, and fee payments.',
    category: 'common'
  },
  {
    icon: Briefcase,
    title: 'Work Allocation Management',
    description: 'Assign and track tasks for faculty and staff members with deadlines and progress tracking.',
    category: 'common'
  },
  {
    icon: FileText,
    title: 'Document Management System',
    description: 'Generate, store, and manage certificates, ID cards, and other important documents securely.',
    category: 'common'
  },
  {
    icon: Clipboard,
    title: 'Homework/Assignment Management',
    description: 'Create, distribute, and track homework and assignments with submission tracking and grading.',
    category: 'school'
  },
  {
    icon: Clipboard,
    title: 'Examination Management System',
    description: 'Plan and manage examinations, including scheduling, seating arrangements, and result processing.',
    category: 'common'
  },
  {
    icon: CreditCard,
    title: 'Fees & Fine Management',
    description: 'Manage fee structures, collection, and fine calculations with flexible payment options.',
    category: 'common'
  },
  {
    icon: CreditCard,
    title: 'Online Payment Gateway',
    description: 'Integrate secure payment gateways for online fee payments and other transactions.',
    category: 'common'
  },
  {
    icon: Book,
    title: 'Daily Lecture Topic & Details',
    description: 'Record and track daily lecture topics, attendance, and learning outcomes.',
    category: 'common'
  },
  {
    icon: School,
    title: 'Academic Management',
    description: 'Manage academic programs, courses, curricula, and learning objectives effectively.',
    category: 'common'
  },
  {
    icon: Calendar,
    title: 'Holidays & School Planner',
    description: 'Plan and manage academic calendars, holidays, and events throughout the year.',
    category: 'common'
  },
  {
    icon: Activity,
    title: 'Achievement & Talent',
    description: 'Track and showcase student achievements, talents, and awards for recognition.',
    category: 'common'
  },
  {
    icon: User,
    title: 'Student ID Card Generation',
    description: 'Design and print student ID cards with personal and institutional information.',
    category: 'common'
  },
  {
    icon: FileCheck,
    title: 'Certificate Management System',
    description: 'Generate and manage various certificates and documents for students and staff.',
    category: 'common'
  },
  {
    icon: Clipboard,
    title: 'Online Exam/Quiz Management',
    description: 'Create, conduct, and evaluate online examinations and quizzes with auto-grading.',
    category: 'common'
  },
  {
    icon: Settings,
    title: 'Web Design & Maintenance',
    description: 'Manage your institution\'s website with content updates and design customizations.',
    category: 'common'
  },
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Manage employee records, payroll, attendance, and performance evaluations.',
    category: 'common'
  },
  {
    icon: FileText,
    title: 'Report Cards & Result Analysis',
    description: 'Generate report cards and analyze student performance with visual insights.',
    category: 'common'
  },
  {
    icon: MessageSquare,
    title: 'Online PTM Feedback',
    description: 'Collect and analyze feedback from parent-teacher meetings for continuous improvement.',
    category: 'school'
  },
  {
    icon: Activity,
    title: 'Medical Room Management',
    description: 'Manage campus medical facilities, record health incidents, and track treatments.',
    category: 'common'
  },
  {
    icon: MessageSquare,
    title: 'Online Teacher Feedback',
    description: 'Collect feedback on teaching methods and teacher performance for quality improvement.',
    category: 'common'
  },
  {
    icon: User,
    title: 'Student Dossier',
    description: 'Maintain comprehensive student profiles with academic, behavioral, and personal information.',
    category: 'common'
  },
  {
    icon: FileText,
    title: 'U-Dise Reports',
    description: 'Generate and submit data for the Unified District Information System for Education.',
    category: 'school'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Plan, organize, and track events, seminars, and workshops at your institution.',
    category: 'common'
  },
  {
    icon: Users,
    title: 'HR Management',
    description: 'Manage recruitment, employee records, training, and performance appraisal processes.',
    category: 'common'
  },
  {
    icon: UserCheck,
    title: 'Biometric Integration',
    description: 'Integrate biometric authentication for attendance tracking and access control.',
    category: 'common'
  },
  {
    icon: Briefcase,
    title: 'Inventory Management',
    description: 'Track inventory, manage purchases, and automate stock alerts for efficient resource management.',
    category: 'common'
  },
  {
    icon: Settings,
    title: 'Access Management System',
    description: 'Control user access rights and permissions for different modules and features.',
    category: 'common'
  },
  {
    icon: Calendar,
    title: 'Scheduled Services',
    description: 'Schedule maintenance, transportation, and other services with reminders and tracking.',
    category: 'common'
  },
  {
    icon: MessageSquare,
    title: 'Service Requests - Parents & Staff',
    description: 'Manage service requests from parents and staff with tracking and resolution workflows.',
    category: 'common'
  },
  {
    icon: Image,
    title: 'Photo Gallery & School Videos',
    description: 'Organize and share photos and videos of events, activities, and achievements.',
    category: 'common'
  },
  {
    icon: Bell,
    title: 'News & Events',
    description: 'Publish and manage news, announcements, and upcoming events for your community.',
    category: 'common'
  },
  {
    icon: Users,
    title: 'Invitees Management',
    description: 'Manage guest lists, invitations, and RSVPs for events and functions.',
    category: 'common'
  },
  {
    icon: UserCheck,
    title: 'Student Behavior Management',
    description: 'Track student behavior, incidents, and interventions for better discipline management.',
    category: 'school'
  },
  {
    icon: Clipboard,
    title: 'Duty/Activity Allocation & Monitoring',
    description: 'Assign duties and activities to staff members with tracking and reporting.',
    category: 'common'
  },
  {
    icon: BarChart,
    title: 'Graphical Presentation Of Data & Reports',
    description: 'Visualize data and generate insights through interactive charts and reports.',
    category: 'common'
  },
  {
    icon: Landmark,
    title: 'Campus Management',
    description: 'Manage campus facilities, resources, and maintenance schedules efficiently.',
    category: 'college'
  },
  {
    icon: Book,
    title: 'Research & Publication Management',
    description: 'Track research projects, publications, and academic achievements for faculty and students.',
    category: 'college'
  }
];

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'school' | 'college' | 'common'>('all');
  
  const filteredModules = React.useMemo(() => {
    if (activeTab === 'all') {
      return modules;
    }
    return modules.filter(module => module.category === activeTab);
  }, [activeTab]);

  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Comprehensive Management Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Explore our extensive range of modules designed to streamline operations and enhance the educational experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeTab === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-gradient-to-r from-growiq-600 to-accent-600' : ''}
            >
              All Modules
            </Button>
            <Button 
              variant={activeTab === 'school' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('school')}
              className={activeTab === 'school' ? 'bg-gradient-to-r from-growiq-600 to-accent-600' : ''}
            >
              School Specific
            </Button>
            <Button 
              variant={activeTab === 'college' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('college')}
              className={activeTab === 'college' ? 'bg-gradient-to-r from-growiq-600 to-accent-600' : ''}
            >
              College Specific
            </Button>
            <Button 
              variant={activeTab === 'common' ? 'default' : 'outline'} 
              onClick={() => setActiveTab('common')}
              className={activeTab === 'common' ? 'bg-gradient-to-r from-growiq-600 to-accent-600' : ''}
            >
              Common Modules
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="feature-card bg-white p-6 rounded-xl border border-gray-100">
                  <div className="p-3 bg-gradient-to-br from-growiq-50 to-accent-50 rounded-lg w-fit mb-4">
                    <div className="text-growiq-600">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      module.category === 'school' ? 'bg-blue-100 text-blue-800' :
                      module.category === 'college' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {module.category === 'school' ? 'School' : 
                       module.category === 'college' ? 'College' : 'Common'}
                    </span>
                    <Button variant="ghost" size="sm" className="text-growiq-600 hover:text-growiq-700 p-0">
                      <Link to={`/features/${module.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-3xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                We can tailor our software to meet your institution's specific requirements.
                Contact our team to discuss your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-growiq-600 to-accent-600 hover:from-growiq-700 hover:to-accent-700">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Sales
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link to="/demo" className="flex items-center gap-2">
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Import the Image icon to fix the build error
import { Image } from 'lucide-react';

export default FeaturesPage;
