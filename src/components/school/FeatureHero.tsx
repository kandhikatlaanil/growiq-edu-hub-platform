
import { GraduationCap } from 'lucide-react';

const FeatureHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-growiq-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-6">
              <GraduationCap className="w-8 h-8 text-growiq-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-growiq-600 to-accent-600 bg-clip-text text-transparent">
              Fully Automated School Management System
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your educational institution with our comprehensive management solution. 
              Streamline operations, enhance communication, and deliver better educational outcomes 
              with our state-of-the-art school management system.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/946259f8-ac32-4f84-a4ee-c8b06f920a4e.png"
              alt="School Management Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
