// @flow
import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const App = (props: {}) => (
  <Container>
    <Hero />
    <About />
    <Portfolio />
    <ContactMe />
    <Footer />
  </Container>
);

export default App;
