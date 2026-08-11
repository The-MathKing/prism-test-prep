import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LeadershipPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">Leadership</h1>
        <div className="text-gray-300 space-y-8 leading-relaxed">
          <p>This page is currently under construction.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeadershipPage;
