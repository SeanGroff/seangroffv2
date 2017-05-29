// @flow

import React from 'react';
import styled from 'styled-components';
import Blogs from '../components/Blogs';
import Hero from '../components/Hero';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const App = (props: {}) => (
  <Container>
    <Hero />
    <Blogs />
  </Container>
);

export default App;
