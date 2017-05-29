// @flow

import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

const { lightText, hoverText } = Colors;

const Icon = styled.a`
  color: ${lightText};
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    color: ${hoverText};
  }
`;

export default (props: { children: any }) => (
  <Icon {...props}>{props.children}</Icon>
);
