import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Video, BookOpen, CheckCircle2, Monitor, Star } from 'lucide-react';

const ELearningSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 bg-white p-3 rounded-xl shadow-lg">
              <img 
                src="/images/dashboard-preview.png" 
                alt="E-Learning Dashboard Preview" 
                className="w-full h-auto rounded-lg"
              />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="p-5 bg-white/30 backdrop-blur-md rounded-full border border-white/50">
                  <div className="p-3 bg-growiq-600 text-white rounded-full">
                    <Play size={24} fill="white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-[-30px] left-[-30px] z-0 w-full h-full bg-gradient-to-tr from-accent-500 to-growiq-500 rounded-xl opacity-50 animate-float"></div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full text-accent-800 font-medium text-sm">
              <span className="bg-accent-200 p-1 rounded-full">
                <Monitor size={16} className="text-accent-700" />
              </span>
              <span>Introducing Our E-Learning Solution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              Expand Learning Beyond Classroom with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-growiq-600">E-Learning Platform</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Our integrated E-Learning platform enables seamless virtual classrooms, content sharing, 
              and interactive learning experiences for students and teachers alike.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Virtual Classrooms</h4>
                  <p className="text-gray-600">Conduct live online classes with video, audio, and interactive tools.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Content Library</h4>
                  <p className="text-gray-600">Organize and share educational content, videos, and resources.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Online Assessments</h4>
                  <p className="text-gray-600">Create quizzes, tests, and assignments with automated grading.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Progress Tracking</h4>
                  <p className="text-gray-600">Monitor student engagement, completion, and performance metrics.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-accent-600 to-growiq-600 hover:from-accent-700 hover:to-growiq-700">
                <Link to="/e-learning" className="flex items-center gap-2">
                  Learn More
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
  );
};

export default ELearningSection;
