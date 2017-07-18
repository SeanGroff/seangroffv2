// @flow
import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';
import Globals from '../utils/Globals';
import '../fonts/LoraRegular.css';

const { bgColorLight, lightText, ctaText } = Colors;
const { mediumUp } = MediaQueries;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorLight};
  padding: ${Globals.sectionPadding};
`;

const ContactForm = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ctaText};
  font-size: 14px;
  font-family: Lora-Regular;
  line-height: 30px;
  text-decoration: none;
  background-color: ${bgColorLight};
  border: 2px solid ${ctaText};
  border-radius: 5px;
  padding: 5px 10px;
  width: 100px;
  transition: all .2s ease-in-out;

  ${mediumUp} {
    &:hover {
      background-color: ${ctaText};
      color: ${lightText};
      cursor: pointer;
      transition: all .2s ease-in-out;
    }
  }
`;

const ContactMe = (props: {}) => (
  <Contact id="contact">
    <Heading>{'contact me'}</Heading>
    <ContactForm href="mailto:sgroff04@gmail.com">
      {'Email Me'}
    </ContactForm>
  </Contact>
);

export default ContactMe;
