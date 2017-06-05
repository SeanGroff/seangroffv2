// @flow
import React from 'react';
import styled from 'styled-components';
import MediaQueries from '../utils/MediaQueries';
import Colors from '../utils/Colors';
import '../fonts/OpenSansBold.css';

const { mediumUp } = MediaQueries;
const { lightBlueText, lightText } = Colors;

const Heading = styled.h2`
  color: ${props => (props.primary ? lightText : lightBlueText)};

  font-size: 28px;
  font-family: OpenSans-Bold;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 20px 0;

  ${mediumUp} {
    font-size: 48px;
  }
`;

export default (props: { children: string, primary?: boolean }) => (
  <Heading {...props}>{props.children}</Heading>
);
