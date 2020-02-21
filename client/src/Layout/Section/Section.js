import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: ${props => props.theme.gridGutterVertical};
`;
export default function Section(props) {
  return <StyledSection children={props.children} />;
}
