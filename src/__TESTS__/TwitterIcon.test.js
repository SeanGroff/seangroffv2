import React from 'react';
import ReactDOM from 'react-dom';
import TwitterIcon from '../components/TwitterIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TwitterIcon />, div);
});
