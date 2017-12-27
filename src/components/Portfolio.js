// @flow
import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

import Heading from './Heading';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';
import Projects from '../utils/Projects';
import '../fonts/OpenSansBold.css';
import '../fonts/LoraRegular.css';

const { bgColorDark, lightText, transparentDarkBlue } = Colors;
const { smallUp, mediumUp, largeUp } = MediaQueries;

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

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;
`;

const Title = styled.h2`
  font-family: OpenSans-Bold;
  font-size: 24px;
  text-transform: uppercase;

  ${mediumUp} {
    opacity: 0;
    transform: translateY(-100px);
    transition: all 0.3s ease-in-out;
  }
`;

const Description = styled.p`
  font-size: 12px;
  font-family: Lora-Regular;
  line-height: 20px;

  ${mediumUp} {
    font-size: 14px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s ease-in-out;
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${transparentDarkBlue};
  color: ${lightText};
  padding: 15px;

  ${mediumUp} {
    opacity: 0;
    transition: all 0.15s ease;

    &:hover {
      > ${Title} {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
      }

      > ${Description} {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s 0.1s ease-in-out;
      }
    }
  }
`;

const Project = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${lightText};
  text-decoration: none;
  width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border: 3px solid #2980b9;
  ${smallUp} {
    width: 300px;
    height: 200px;
  }

  ${mediumUp} {
    width: 300px;
    height: 200px;

    &:hover {
      cursor: pointer;
      border: 3px solid #3498db;

      > ${Image} {
        transform: scale(1.1);
      }

      > ${Overlay} {
        opacity: 1;
        transition: opacity 0.2s linear;
      }
    }
  }
`;

export default (props: {}) => (
  <Portfolio id="portfolio">
    <Heading primary>{'Portfolio'}</Heading>
    <Wrapper>
      {Projects.map(
        (
          project: {
            title: string,
            description: string,
            href: string,
            image: string,
          },
          index: number
        ) => (
          <ProjectWrapper key={index}>
            <Project
              {...props}
              href={project.href}
              target="_blank"
              rel="noopener"
            >
              <LazyLoad height={200}>
                <Image {...props} src={project.image} />
              </LazyLoad>
              <Overlay>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </Overlay>
            </Project>
          </ProjectWrapper>
        )
      )}
    </Wrapper>
  </Portfolio>
);
