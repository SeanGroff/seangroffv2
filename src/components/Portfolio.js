// @flow
import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';
import '../fonts/OpenSansBold.css';
import '../fonts/LoraRegular.css';

const { bgColorDark, lightText, accentColor, transparentDarkBlue } = Colors;
const { smallUp, mediumUp, largeUp } = MediaQueries;

const projects = [
  {
    title: 'project1',
    description: 'this app is the coolest app ever. It is great!',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project2',
    description: 'this app is the coolest app ever. It is great!',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project3',
    description: 'this app is the coolest app ever. It is great!',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project4',
    description: 'this app is the coolest app ever. It is great!',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project5',
    description: 'this app is the coolest app ever. It is great!',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project6',
    description: 'this app is the coolest app ever. It is great!',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
];

const Portfolio = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorDark};
  color: ${lightText};
  padding: 100px 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${smallUp} {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    max-width: 675px;
    padding: 0 15px;
  }

  ${mediumUp} {
    max-width: 900px;
  }

  ${largeUp} {
    max-width: 1200px;
  }
`;

const ProjectWrapper = styled.div`
  padding: 20px 0;

  ${smallUp} {
    padding: 20px;
  }
`;

const Project = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${lightText};
  text-decoration: none;
  width: 100%;
  height: auto;
  position: relative;

  ${smallUp} {
    width: 300px;
    height: auto;
  }

  ${mediumUp} {
    width: 300px;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${transparentDarkBlue};
  color: ${lightText};
  border-bottom: 3px solid ${accentColor};
  padding: 15px;
  opacity: 0;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-family: OpenSans-Bold;
  font-size: 24px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 14px;
  font-family: Lora-Regular;
  line-height: 20px;
`;

export default (props: {}) => {
  return (
    <Portfolio id="portfolio">
      <Heading primary>{'Portfolio'}</Heading>
      <Wrapper>
        {projects.map((project, index) => (
          <ProjectWrapper>
            <Project {...props} href={project.href} target="_blank">
              <Image {...props} src={project.image} />
              <Overlay>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </Overlay>
            </Project>
          </ProjectWrapper>
        ))}
      </Wrapper>
    </Portfolio>
  );
};
