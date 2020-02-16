import React from 'react';
import styled from 'styled-components';
const StyledSliderItem = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8rem;
`;
export default function SliderItem(props) {
  return (
    <StyledSliderItem imageUrl={props.imageUrl}>
      <h1>{props.title}</h1>
    </StyledSliderItem>
  );
}
