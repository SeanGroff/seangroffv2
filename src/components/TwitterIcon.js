// @flow

import React from 'react';
import styled from 'styled-components';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import Colors from '../utils/Colors';

const { lightText } = Colors;

const SocialIcon = styled.i`
  width: 25px;
  height: 25px;
  color: ${lightText};
`;

export default (props: {}) => (
  <SocialIcon><div><FaTwitterSquare /></div></SocialIcon>
);
