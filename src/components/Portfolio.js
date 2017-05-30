// @flow

import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

const { bgColorDark, lightText } = Colors;

const Portfolio = styled.section`
  background-color: ${bgColorDark};
  color: ${lightText};
`;

export default (props: {}) => {
  return <Portfolio>{'test'}</Portfolio>;
};
