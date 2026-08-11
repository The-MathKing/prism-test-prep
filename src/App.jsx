import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import SubjectCatalog from './components/SubjectCatalog';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy min-h-screen text-white font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Method />
      <SubjectCatalog />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
