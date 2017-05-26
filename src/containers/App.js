// @flow
import React, { Component } from 'react';
import Blogs from '../components/Blogs';
import Hero from '../components/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Blogs />
      </div>
    );
  }
}

export default App;
