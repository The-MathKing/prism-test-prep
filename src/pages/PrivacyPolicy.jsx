import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            <p>At Clovrr STEM Learning, we collect minimal personal information necessary to provide our educational services. This includes student and parent names, contact information, and academic performance data shared voluntarily.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <p>Your information is used exclusively for scheduling, curriculum customization, and managing our Corporate Social Responsibility (CSR) donation payouts to partner organizations. We do not sell your data to third parties.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information during transmission and storage. Access to student records is strictly limited to authorized instructors and administrative staff.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:aryan.r.padarthi@gmail.com" className="text-emerald-400 hover:underline">aryan.r.padarthi@gmail.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
