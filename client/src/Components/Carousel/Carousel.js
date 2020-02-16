import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import slideContent from './slideContent';
const StyledCarousel = styled.div`
  width: 100%;
  min-height: 3.25rem;
  height: 70vh;
`;
class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <StyledCarousel>
        <Slider {...settings}>
          {slideContent.map(image => (
            <SliderItem imageUrl={image.imageUrl} title={image.title} />
          ))}
        </Slider>
      </StyledCarousel>
    );
  }
}

export default Carousel;
