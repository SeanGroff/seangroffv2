// @flow

import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

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
  </Container>
);

export default App;
