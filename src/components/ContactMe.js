// @flow
import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';
import Globals from '../utils/Globals';

const { bgColorLight, darkText } = Colors;
const { mediumUp } = MediaQueries;

const Contact = styled.div`
  background-color: ${bgColorLight};
  padding: ${Globals.sectionPadding};
`;

const ContactForm = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${darkText};
  text-decoration: none;

  ${mediumUp} {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactMe = (props: {}) => (
  <Contact>
    <Heading>{'contact me'}</Heading>
    <ContactForm href="mailto:sgroff04@gmail.com">
      {'Email Me'}
    </ContactForm>
  </Contact>
);

export default ContactMe;
