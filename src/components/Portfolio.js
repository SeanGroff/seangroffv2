// @flow
import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Colors from '../utils/Colors';
import MediaQueries from '../utils/MediaQueries';

const { bgColorDark, lightText } = Colors;
const { smallUp, mediumUp } = MediaQueries;

const projects = [
  {
    title: 'project1',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project2',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project3',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project4',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project5',
    href: 'https://www.google.com',
    image: 'https://placebear.com/300/200',
  },
  {
    title: 'project6',
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
  align-items: center;
  ${smallUp} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%
`;

const Project = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${lightText};
  text-decoration: none;
  margin-bottom: 15px;
  width: 100%;
  height: auto;

  ${smallUp} {
    width: 300px;
    height: auto;
  }

  ${mediumUp} {
    width: 300px;
    height: auto;
  }
`;

export default (props: {}) => {
  return (
    <Portfolio>
      <Heading primary>{'Portfolio'}</Heading>
      {projects.map(project => (
        <Wrapper>
          <Project {...props} href={project.href} target="_blank">
            <Image {...props} src={project.image} />
          </Project>
        </Wrapper>
      ))}
    </Portfolio>
  );
};
