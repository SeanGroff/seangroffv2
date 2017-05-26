import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQueries from '../utils/MediaQueries';

const { mediumUp } = MediaQueries;

const Lines = styled.div`
  position: relative;
  padding-right: 15px;
  width: 30px;
  border-top: 4px solid #FFFFFF;

  &:before {
    position: absolute;
    transform: translateY(-12px);
    content: '';
    width: 30px;
    border-top: 4px solid #FFFFFF;
  }

  &:after {
    position: absolute;
    transform: translateY(4px);
    content: '';
    width: 30px;
    border-top: 4px solid #FFFFFF;
  }

  ${mediumUp} {
    display: none;
  }
`;

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: false,
    };
  }

  handleClick = () => this.setState({ isClosed: !this.state.isClosed });

  render() {
    return <Lines />;
  }
}

export default HamburgerMenu;
