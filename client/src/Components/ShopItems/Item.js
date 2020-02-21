import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  position: relative;
  display: inline-block;
  width: 25%;
  cursor: pointer;
  text-align: center;
`;
export default function Item(props) {
  return <StyledItem children={props.children} />;
}
