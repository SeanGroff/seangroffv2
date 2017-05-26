import React from 'react';
import ReactDOM from 'react-dom';
import Blogs from '../components/Blogs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blogs />, div);
});
