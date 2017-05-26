// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Blogs from '../components/Blogs';
import Hero from '../components/Hero';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Hero />
        <Blogs>{'Blog Posts'}</Blogs>
      </Container>
    );
  }
}

export default App;
