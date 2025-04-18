
import React from 'react';
import Layout from '@/components/layout/Layout';
import FeatureHero from '@/components/school/FeatureHero';
import FeatureGrid from '@/components/school/FeatureGrid';
import DemoSection from '@/components/school/DemoSection';
import School from '../components/school/school-management';

const SchoolManagement = () => {
  return (
    <Layout>
      <FeatureHero />
      <FeatureGrid />
      <DemoSection />
      <School />
    </Layout>
  );
};

export default SchoolManagement;
