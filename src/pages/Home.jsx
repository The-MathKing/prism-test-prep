import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Method from '../components/Method';
import SubjectCatalog from '../components/SubjectCatalog';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Method />
      <SubjectCatalog />
      <Footer />
    </>
  );
};

export default Home;
