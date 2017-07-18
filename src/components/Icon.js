// @flow
import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

const { lightText, hoverText } = Colors;

const Icon = styled.a`
  color: ${lightText};
  padding: 0 10px;
  transition: color .2s linear;

  &:hover {
    cursor: pointer;
    color: ${hoverText};
    transition: color .2s linear;
  }
`;

export default (props: { children: any }) => (
  <Icon {...props}>{props.children}</Icon>
);
