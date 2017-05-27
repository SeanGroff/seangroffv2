import React from 'react';
import ReactDOM from 'react-dom';
import Me from '../components/Me';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Me />, div);
});
