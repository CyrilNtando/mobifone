import React from 'react';
import styled from 'styled-components';

const StyledPrimary = styled.h1`
  color: ${props => (props.color ? props.color : 'white')};
  text-transform: uppercase;
  font-size: ${props => (props.size ? props.size + 'rem' : '4.8rem')};
  font-weight: 300;
  letter-spacing: 1rem;
`;
const StyledSecondary = styled.h2`
  font-size: 3.6rem;
  font-weight: 300;
  text-transform: uppercase;
  word-spacing: 1rem;
  text-align: center;
  margin-top: ${props => props.theme.gridGutterVertical};

  &::after {
    content: '';
    display: block;
    height: 2px;
    background-color: #e67e22;
    width: 10rem;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;
const StyledTernary = styled.h3``;
const StyledParagraph = styled.p``;
export default function Typography(props) {
  switch (props.variant) {
    case 'primary':
      return (
        <StyledPrimary
          children={props.children}
          size={props.size}
          color={props.color}
        />
      );
      break;
    case 'secondary':
      return <StyledSecondary children={props.children} />;
      break;
    case 'paragraph':
      return StyledParagraph;
      break;
    default:
      return '';
  }
}
