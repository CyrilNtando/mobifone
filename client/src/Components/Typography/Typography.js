import React from 'react';
import styled from 'styled-components';

const StyledPrimary = styled.h1`
  color: ${props => (props.color ? props.color : 'white')};
  text-transform: uppercase;
  font-size: ${props => (props.size ? props.size + 'rem' : '4.8rem')};
  font-weight: 300;
  letter-spacing: 1rem;
`;
const StyledSecondary = styled.h1``;
const StyledTernary = styled.h3``;
const StyledParagraph = styled.p``;
export default function Typography(props) {
  switch (props.variant) {
    case 'primary':
      return (
        <StyledPrimary size={props.size} color={props.color}>
          {props.children}
        </StyledPrimary>
      );
      break;
    case 'secondary':
      return StyledSecondary;
      break;
    case 'paragraph':
      return StyledParagraph;
      break;
    default:
      return '';
  }
}
