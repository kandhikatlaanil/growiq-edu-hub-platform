
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Book, Users, Calendar, Bell, MessageSquare, UserCheck, Clipboard, FileText } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: "Library Management",
    description: "Automate library operations with our comprehensive system for cataloging, circulation, and inventory management.",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600"
  },
  {
    icon: Calendar,
    title: "Timetable Management",
    description: "Create and manage complex timetables effortlessly with our intuitive scheduling system.",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600"
  },
  {
    icon: Bell,
    title: "Alert Management",
    description: "Keep everyone informed with automated notifications for attendance, assignments, and important events.",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Parent-Teacher Interaction",
    description: "Foster seamless communication between parents and teachers with our interactive platform.",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600"
  },
  {
    icon: UserCheck,
    title: "Attendance Management",
    description: "Track attendance in real-time with our automated system supporting multiple marking methods.",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600"
  },
  {
    icon: Clipboard,
    title: "Examination Management",
    description: "Streamline exam creation, scheduling, and result processing with our comprehensive exam module.",
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600"
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-0">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
