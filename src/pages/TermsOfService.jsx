import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">Terms of Service</h1>
        <div className="text-gray-300 space-y-8 leading-relaxed">
          <p className="text-sm text-gray-500">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">1. Acceptance of Terms</h2>
            <p>By accessing our website and enrolling in Clovrr STEM Learning programs, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">2. Educational Services & Disclaimer</h2>
            <p>Clovrr STEM Learning provides near-peer mentoring services for STEM subjects (Grades 1-10). While we employ high-achieving mentors and rigorous curriculum, educational outcomes depend heavily on the individual student's effort. We do not guarantee specific grades, test scores, or competition placements (e.g., MATHCOUNTS, USACO).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">3. Tuition, Billing, and CSR Revenue Share</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Billing Cycle:</strong> Services are billed on a recurring monthly basis unless stated otherwise.</li>
              <li><strong>CSR Program:</strong> If a valid partner code is applied at checkout, the enrolled family receives a 10% discount on tuition. Clovrr commits to donating 15% of the collected tuition to the associated partner organization (e.g., temple, school). This payout occurs on a monthly or quarterly schedule depending on the partner agreement.</li>
              <li><strong>Refunds:</strong> Refunds for unused sessions are handled on a case-by-case basis. Notice of cancellation must be provided 48 hours prior to the next billing cycle.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">4. Code of Conduct</h2>
            <p>We maintain a zero-tolerance policy for harassment, bullying, or disruptive behavior during our digital coaching sessions. Students are expected to participate respectfully. We reserve the right to suspend or terminate services for any student who repeatedly violates our community standards, without refund.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">5. Intellectual Property</h2>
            <p>All curriculum, worksheets, study guides, and portal features provided by Clovrr STEM Learning are protected by copyright. They are for personal educational use only and may not be distributed, sold, or reproduced without our express written consent.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Clovrr STEM Learning and its instructors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the parent portal.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">8. Contact</h2>
            <p>For billing inquiries or questions regarding these terms, please contact: <a href="mailto:aryan.r.padarthi@gmail.com" className="text-emerald-400 hover:underline">aryan.r.padarthi@gmail.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
