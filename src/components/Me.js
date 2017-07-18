// @flow
import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';
import profilePic from '../assets/profilePic.jpg';
import MediaQueries from '../utils/MediaQueries';
import Colors from '../utils/Colors';
import '../fonts/OpenSansBold.css';
import '../fonts/OpenSansLight.css';

const { mediumUp } = MediaQueries;
const { bgColorLight, lightText } = Colors;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  margin-top: -50px;
  color: ${lightText};
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
  font-size: 40px;
  font-family: OpenSans-Bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid ${lightText};
  border-bottom-color: rgba(236, 240, 241, 0.35);

  ${mediumUp} {
    font-size: 60px;
  }
`;

const Occupation = styled.h3`
  font-size: 24px;
  font-family: OpenSans-Light;
  text-transform: capitalize;
  margin: 0;
  margin-bottom: 20px;

  ${mediumUp} {
    font-size: 30px;
  }
`;

const Me = (props: {}) => {
  return (
    <Wrapper id="me">
      <ProfilePic />
      <NameHeader>{'sean groff'}</NameHeader>
      <Occupation>{'web developer'}</Occupation>
      <SocialIcons />
    </Wrapper>
  );
};

export default Me;
