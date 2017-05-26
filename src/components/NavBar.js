import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';
import StyledLink from './StyledLink';
import MediaQueries from '../utils/MediaQueries';
import Colors from '../utils/Colors';

const { mediumUp } = MediaQueries;
const { lightText, bgColorDark } = Colors;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: ${bgColorDark};
  height: 50px;
  padding: 0 20px;
  color: ${lightText};
  box-shadow: 0 1px 3px 0 rgba(20, 20, 20, 0.8);
  ${mediumUp} {
    box-shadow: none;
    height: 100px;
    background-color: transparent;
  };
`;

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 15px;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  position: relative;
`;

const NavBar = props => (
  <Wrapper>
    <LeftColumn>{'SG'}</LeftColumn>
    <RightColumn>
      <StyledLink href="#">
        {'about'}
      </StyledLink>
      <StyledLink href="#">
        {'contact me'}
      </StyledLink>
      <HamburgerMenu />
    </RightColumn>
  </Wrapper>
);

export default NavBar;
