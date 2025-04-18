
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Book, Users, Calendar, Bell, MessageSquare, UserCheck, Clipboard, FileText, Video, Stethoscope, Award, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: "E-Learning System",
    description: "Conduct real-time virtual classrooms with interactive features, screen sharing, and recording capabilities for remote learning.",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600"
  },
  {
    icon: Book,
    title: "Library Management",
    description: "Comprehensive library automation system for cataloging, circulation, and inventory management with digital access to resources.",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600"
  },
  {
    icon: Calendar,
    title: "Academic Planning",
    description: "Smart timetable generation, exam scheduling, and academic calendar management with conflict resolution.",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600"
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Streamlined fee collection, online payments, and automated reminders with detailed financial reporting.",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600"
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Integrated messaging system for parent-teacher interaction, announcements, and real-time updates.",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600"
  },
  {
    icon: UserCheck,
    title: "Attendance System",
    description: "Advanced biometric integration for automated attendance tracking with detailed reports and analytics.",
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600"
  },
  {
    icon: Clipboard,
    title: "Examination Management",
    description: "Complete exam lifecycle management from question paper generation to result analysis and report cards.",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-600"
  },
  {
    icon: Stethoscope,
    title: "Health Management",
    description: "Digital health records, medical room management, and emergency contact system for student healthcare.",
    gradientFrom: "from-rose-500",
    gradientTo: "to-rose-600"
  },
  {
    icon: Award,
    title: "Student Achievement",
    description: "Track and showcase student accomplishments, certificates, and extracurricular activities.",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600"
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Comprehensive Features for Modern Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-0 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
