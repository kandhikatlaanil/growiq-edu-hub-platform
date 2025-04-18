
import { GraduationCap } from 'lucide-react';

const FeatureHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-growiq-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-6">
            <GraduationCap className="w-8 h-8 text-growiq-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-growiq-600 to-accent-600 bg-clip-text text-transparent">
            Comprehensive School Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your educational institution with our all-in-one management solution. 
            Streamline operations, enhance communication, and deliver better educational outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
