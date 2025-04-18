
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ELearningSection from '@/components/home/ELearningSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrialSection from '@/components/home/TrialSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ELearningSection />
      <TestimonialsSection />
      <TrialSection />
    </Layout>
  );
};

export default Index;
