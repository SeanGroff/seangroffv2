// @flow
import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

const { darkText } = Colors;

const BlogsWrapper = styled.main`
  color: ${darkText};
`;

const Blogs = (props: {}) => {
  return <BlogsWrapper />;
};

export default Blogs;
