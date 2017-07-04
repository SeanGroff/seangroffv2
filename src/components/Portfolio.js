// @flow
import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';
import fccLeaderboardImg from '../assets/fcc-leaderboard.jpg';
import fccMarkdownImg from '../assets/fcc-markdown.jpg';
import fccWikiImg from '../assets/wiki-viewer.jpg';
import fccPomodoroImg from '../assets/pomodoro.jpg';
import eggheadImg from '../assets/egghead.jpg';
import fpImg from '../assets/fp.jpg';
import '../fonts/OpenSansBold.css';
import '../fonts/LoraRegular.css';

const { bgColorDark, lightText, transparentDarkBlue } = Colors;
const { smallUp, mediumUp, largeUp } = MediaQueries;

const projects = [
  {
    title: 'FCC Leaderboard',
    description: 'Free Code Camp Leaderboard built with React',
    href: 'https://github.com/SeanGroff/FCC-Leaderboard',
    image: fccLeaderboardImg,
  },
  {
    title: 'FCC Markdown Previewer',
    description: 'Enter markdown code on the left to see a live preview of your markdown code on the right. Built with React',
    href: 'https://github.com/SeanGroff/markdown-previewer',
    image: fccMarkdownImg,
  },
  {
    title: 'FCC Wikipedia Viewer',
    description: 'Built with RxJS, enter a search term and receive query results from the wikipedia API',
    href: 'https://codepen.io/sgroff04/pen/dWzZjw',
    image: fccWikiImg,
  },
  {
    title: 'FCC Pomodoro Timer',
    description: 'Built with jQuery, take effecient breaks using the Pomodoro Technique',
    href: 'https://codepen.io/sgroff04/pen/gaPKBd',
    image: fccPomodoroImg,
  },
  {
    title: 'Egghead a Day',
    description: 'Watch an egghead.io video a day and provide a code example to teach others',
    href: 'https://github.com/SeanGroff/eggheadaday',
    image: eggheadImg,
  },
  {
    title: 'JS FP Functions from Scratch',
    description: 'Popular native JavaScript, lodash, and RxJS Array functions built from scratch for my personal educational purposes',
    href: 'https://github.com/SeanGroff/functions-from-scratch',
    image: fpImg,
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;
`;

const Title = styled.h2`
  font-family: OpenSans-Bold;
  font-size: 24px;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(-100px);
  transition: all 0.3s ease-in-out;
`;

const Description = styled.p`
  font-size: 12px;
  font-family: Lora-Regular;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.3s ease-in-out;
  line-height: 20px;

  ${mediumUp} {
    font-size: 14px;
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
  border: 3px solid #3498DB;
;

  &:hover {
    cursor: pointer;
    border: 3px solid #E74C3C;

    > ${Image} {
      transform: scale(1.1);
    }

    > ${Overlay} {
      opacity: 1;
      transition: opacity 0.2s linear;
    }
  }

  ${smallUp} {
    width: 300px;
    height: 200px;
  }

  ${mediumUp} {
    width: 300px;
    height: 200px;
  }
`;

export default (props: {}) => {
  return (
    <Portfolio id="portfolio">
      <Heading primary>{'Portfolio'}</Heading>
      <Wrapper>
        {projects.map((project, index) => (
          <ProjectWrapper key={index}>
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
