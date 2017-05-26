import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import hero from '../assets/hero1.jpg';

const HeroImage = styled.header`
  background: linear-gradient(
    rgba(20,20,20, .7),
    rgba(20,20,20, .7)),
    url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const Hero = () => {
  return (
    <HeroImage>
      <NavBar />
    </HeroImage>
  );
};

export default Hero;
