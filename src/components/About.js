// @flow
import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Colors from '../utils/Colors';
import Globals from '../utils/Globals';
import '../fonts/LoraRegular.css';

const { bgColorLight, darkText } = Colors;

const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorLight};
  padding: ${Globals.sectionPadding};
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
    <About id="about">
      <Heading>{'About me'}</Heading>
      <Content>
        {
          'I am a Web Developer based out of Kansas City specializing in front end development. I am well versed with React and React Native. Learning new things and staying on the bleeding edge of JavaScript is my passion. When given designs I strive for pixel perfect responsive styles. I am experienced with all stages of the development cycle for dynamic web apps and mobile apps using React Native.'
        }
      </Content>
    </About>
  );
};
