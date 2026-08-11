import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>By enrolling in Clovrr STEM Learning programs or utilizing our web portals, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Educational Services</h2>
            <p>Clovrr provides near-peer STEM acceleration coaching. While our mentors strive to provide the highest quality instruction to improve academic performance, we cannot guarantee specific test scores or competition results.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Payments and CSR Donations</h2>
            <p>Tuition is billed according to your selected tier (Group Cohort or 1:1 Coaching). 15% of eligible tuition payments processed with a valid partner code will be donated directly to the designated community organization in accordance with our CSR policy.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Code of Conduct</h2>
            <p>Students are expected to maintain a respectful learning environment during all digital sessions. Clovrr reserves the right to terminate services for any student violating our community standards without refund.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Contact Information</h2>
            <p>For support or billing inquiries, contact us at <a href="mailto:aryan.r.padarthi@gmail.com" className="text-emerald-400 hover:underline">aryan.r.padarthi@gmail.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
