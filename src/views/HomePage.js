import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import FeatureSection from '../components/FeatureSection';

const HomePage = () => {
  return (
    <Container fluid>
      <Navbar />
      <Carousel />
      <FeatureSection />
      <Footer />
    </Container>
  );
};

export default HomePage;
