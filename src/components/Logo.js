// @flow
import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

const { lightText, hoverText } = Colors;

const MyLogo = styled.a`
  color: ${lightText};
  font-size: 18px;
  font-family: OpenSans-Regular;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color .2s linear;

  &:hover {
    cursor: pointer;
    color: ${hoverText};
    transition: color .2s linear;
  }
`;

const Logo = (props: { children: string }) => (
  <MyLogo {...props} href="#me">
    {props.children}
  </MyLogo>
);

export default Logo;
