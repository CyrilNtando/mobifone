import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colorGreyLight1};
  height: 100%;
  width: 100%;
`;
export default function Main() {
  return (
    <Wrapper>
      <p>Main</p>
    </Wrapper>
  );
}
