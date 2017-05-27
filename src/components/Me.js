// @flow

import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profilePic.jpg';
import TwitterIcon from './TwitterIcon';
import MediaQueries from '../utils/MediaQueries';
import Colors from '../utils/Colors';

const { mediumUp } = MediaQueries;
const { bgColorLight, lightText } = Colors;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  color: ${lightText};

  ${mediumUp} {
    justify-content: center;
    margin-top: -50px
  }
`;

const ProfilePic = styled.div`
  border: 3px solid ${bgColorLight};
  border-radius: 50%;
  background: url(${profilePic});
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
`;

const NameHeader = styled.h1`
  font-size: 48px;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutMe = styled.p`
  font-size: 24px;
  max-width: 650px;
  margin: 0;
`;

const Me = (props: {}) => {
  return (
    <Wrapper>
      <ProfilePic />
      <NameHeader>{'sean groff'}</NameHeader>
      <AboutMe>
        {
          'Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Quisque id mi.'
        }
      </AboutMe>
      <TwitterIcon />
    </Wrapper>
  );
};

export default Me;
