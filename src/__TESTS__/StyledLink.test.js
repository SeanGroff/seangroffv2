import React from 'react';
import ReactDOM from 'react-dom';
import StyledLink from '../components/StyledLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StyledLink />, div);
});
