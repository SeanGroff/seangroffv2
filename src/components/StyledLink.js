// @flow
import React from 'react';
import styled from 'styled-components';
import MediaQueries from '../utils/MediaQueries';
import Colors from '../utils/Colors';

const { mediumUp } = MediaQueries;
const { lightText, hoverText } = Colors;

const StyledAchorTag = styled.a`
  display: none;
  ${mediumUp} {
    display: inline-block;
    color: ${lightText};
    padding: 0 15px;
    text-transform: capitalize;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: ${hoverText};
    }
  }
`;

const StyledLink = (props: { children: string }) => (
  <StyledAchorTag {...props}>{props.children}</StyledAchorTag>
);

export default StyledLink;
