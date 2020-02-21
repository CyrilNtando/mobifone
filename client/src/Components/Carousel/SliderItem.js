import React from 'react';
import styled from 'styled-components';
import Typography from '../../Components/Typography/Typography';
const StyledSliderItem = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8rem;

  .slideTextWrapper {
    width: 40vw;
  }
`;
export default function SliderItem(props) {
  return (
    <StyledSliderItem imageUrl={props.imageUrl}>
      <div className='slideTextWrapper'>
        <Typography variant='primary'>{props.title}</Typography>
      </div>
    </StyledSliderItem>
  );
}
