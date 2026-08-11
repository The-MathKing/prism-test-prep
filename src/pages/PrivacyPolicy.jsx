import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">Privacy Policy</h1>
        <div className="text-gray-300 space-y-8 leading-relaxed">
          <p className="text-sm text-gray-500">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">1. Introduction</h2>
            <p>Welcome to Clovrr STEM Learning ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy applies to our website and our near-peer STEM acceleration coaching services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, postal address, e-mail address, and telephone number of parents or guardians.</li>
              <li><strong>Student Information:</strong> Name, grade level, academic performance metrics, and subject focus.</li>
              <li><strong>Payment Information:</strong> We do not store full credit card details. Payments are processed securely via third-party processors (e.g., Stripe).</li>
              <li><strong>Usage Data:</strong> Information on how the Service is accessed and used, automatically collected when you visit our site.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">3. COPPA Compliance (Children's Privacy)</h2>
            <p>Because our services cater to students in Grades 1-10, we strictly adhere to the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information directly from children under 13 without verifiable parental consent. All accounts must be created and managed by a parent or legal guardian. If we learn we have collected personal information from a child under 13 without parental consent, we will delete that information immediately.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our STEM coaching programs.</li>
              <li>Communicate with parents regarding scheduling, academic progress, and billing.</li>
              <li>Administer our Corporate Social Responsibility (CSR) program by tracking partner codes and processing the 15% revenue share payouts to designated partner organizations.</li>
              <li>Comply with legal obligations and resolve any disputes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">5. Data Sharing and CSR Partners</h2>
            <p>We do not sell your personal data. If you enroll using a specific CSR Partner Code (e.g., a temple, weekend school, or booster club), we may share limited, aggregated enrollment data with that organization solely for the purpose of validating the 15% revenue share donation. This does not include detailed academic records or session feedback.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">6. Data Security</h2>
            <p>We implement commercially reasonable security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">7. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
            <div className="p-4 bg-[#111] rounded-xl border border-white/10 mt-4">
              <p>Email: <a href="mailto:aryan.r.padarthi@gmail.com" className="text-emerald-400 hover:underline">aryan.r.padarthi@gmail.com</a></p>
              <p>Clovrr STEM Learning</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
