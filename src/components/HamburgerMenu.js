import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQueries from '../utils/MediaQueries';
import Colors from '../utils/Colors';

const { mediumUp } = MediaQueries;
const { lightText } = Colors;

const Lines = styled.div`
  position: relative;
  padding-right: 15px;
  width: 30px;
  border-top: 4px solid ${lightText};

  &:before {
    position: absolute;
    transform: translateY(-12px);
    content: '';
    width: 30px;
    border-top: 4px solid ${lightText};
  }

  &:after {
    position: absolute;
    transform: translateY(4px);
    content: '';
    width: 30px;
    border-top: 4px solid ${lightText};
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
