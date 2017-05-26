import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import hero from '../assets/hero1.jpg';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';

const { mediumUp } = MediaQueries;

const { transparentDarkBlue } = Colors;

const HeroImage = styled.header`
  background: linear-gradient(
    ${transparentDarkBlue},
    ${transparentDarkBlue}),
    url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;

  ${mediumUp} {
    justify-content: center;
    margin-top: -100px
  }
`;

const Hero = props => {
  return (
    <HeroImage>
      <NavBar />
      <Me>
        <h1>{'Sean'}</h1>
        {'Sean'}
        {'Sean'}
        {'Sean'}
      </Me>
    </HeroImage>
  );
};

export default Hero;
