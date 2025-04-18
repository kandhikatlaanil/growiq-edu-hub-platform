
import React from 'react';
import Layout from '@/components/layout/Layout';
import FeatureHero from '@/components/school/FeatureHero';
import FeatureGrid from '@/components/school/FeatureGrid';
import DemoSection from '@/components/school/DemoSection';

const SchoolManagement = () => {
  return (
    <Layout>
      <FeatureHero />
      <FeatureGrid />
      <DemoSection />
    </Layout>
  );
};

export default SchoolManagement;
