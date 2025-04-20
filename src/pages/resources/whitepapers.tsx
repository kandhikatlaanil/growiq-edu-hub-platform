
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Whitepapers = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Whitepapers Temporarily Unavailable</h1>
          <p className="text-gray-600 mb-6">
            We are currently updating our whitepaper generation system. 
            Please check back later.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Whitepapers;
