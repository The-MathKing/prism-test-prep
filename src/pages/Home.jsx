import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Method from '../components/Method';
import Curriculum from '../components/Curriculum';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Method />
      <Curriculum />
      <Footer />
    </>
  );
};

export default Home;
