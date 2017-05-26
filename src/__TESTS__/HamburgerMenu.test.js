import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from '../components/HamburgerMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HamburgerMenu />, div);
});
