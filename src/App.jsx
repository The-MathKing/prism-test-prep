import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import InstructorDashboard from './pages/InstructorDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';
import PartnerDashboard from './pages/PartnerDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LeadershipPage from './pages/LeadershipPage';

function App() {
  return (
    <div className="bg-navy min-h-screen text-white font-sans selection:bg-primary/30">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/partner-dashboard" element={<PartnerDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/leadership" element={<LeadershipPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
