// @flow
import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';
import Globals from '../utils/Globals';
// import MediaQueries from '../utils/MediaQueries';
const { bgColorDark, lightText } = Colors;
// const { smallUp, mediumUp, largeUp } = MediaQueries;

const Wrapper = styled.footer`
  background-color: ${bgColorDark};
  color: ${lightText};
  padding: ${Globals.sectionPadding};
`;

const Copyright = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Footer = (props: {}) => (
  <Wrapper>
    <Copyright>{'Copyright Sean Groff '}{Globals.getYear()}</Copyright>
  </Wrapper>
);

export default Footer;
