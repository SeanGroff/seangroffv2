import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';
import MediaQueries from '../utils/MediaQueries';

const { mediumUp } = MediaQueries;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #000000;
  height: 50px;
  padding: 0 20px;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.8);
  ${mediumUp} {
    height: 100px;
    background-color: transparent;
  };
`;

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  position: relative;
`;

const NavBar = () => (
  <Wrapper>
    <LeftColumn>{'SG'}</LeftColumn>
    <RightColumn>
      <HamburgerMenu />
    </RightColumn>
  </Wrapper>
);

export default NavBar;
