import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  position: relative;
  flex: 0 0 calc((100% - 3 * ${props => props.theme.spacingVertical}) / 4);
  max-width: calc((100% - 3 * ${props => props.theme.spacingVertical}) / 4);
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 600px) {
  }
`;
export default function Item(props) {
  return <StyledItem children={props.children} column={props.column} />;
}
