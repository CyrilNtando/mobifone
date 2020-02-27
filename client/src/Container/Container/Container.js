import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${props => props.theme.pageWidth};
  margin: 0 auto;
`;

const Container = function({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
