// @flow

import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

const { darkText } = Colors;

const BlogsWrapper = styled.main`
  color: ${darkText};
`;

const Blogs = (props: { children: string }) => {
  return (
    <BlogsWrapper>
      {props.children}
    </BlogsWrapper>
  );
};

export default Blogs;
