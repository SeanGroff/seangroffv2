// @flow

import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';
import '../fonts/LoraRegular.css';
import '../fonts/OpenSansBold.css';

const { bgColorLight, darkText, lightBlueText } = Colors;
const { mediumUp } = MediaQueries;

const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorLight};
  padding: 100px 15px;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-family: OpenSans-Bold;
  text-align: center;
  text-transform: uppercase;
  color: ${lightBlueText};
  margin: 0 0 20px 0;

  ${mediumUp} {
    font-size: 48px;
  }
`;

const Content = styled.p`
  font-size: 16px;
  font-family: Lora-Regular;
  line-height: 30px;
  color: ${darkText};
  margin: 0;
  max-width: 968px;
  padding: 0 10px;
`;

export default (props: {}) => {
  return (
    <About>
      <Heading>{'About me'}</Heading>
      <Content>
        {
          'I am a Web Developer based out of Kansas City specializing in front end development. I am well versed with React and React Native. Learning new things and staying on the bleeding edge of JavaScript is my passion. I seek perfection when it comes to responsive web design styling. I am experienced with all stages of the development cycle for dynamic web projects and mobile apps using React Native.'
        }
      </Content>
    </About>
  );
};
