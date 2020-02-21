import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import slideContent from './slideContent';
const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  min-height: 3.25rem;
  margin: 0 auto;
`;
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    this.play();
  }

  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      adaptiveHeight: true
    };
    return (
      <StyledCarousel>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {slideContent.map(image => (
            <SliderItem imageUrl={image.imageUrl} title={image.title} />
          ))}
        </Slider>
      </StyledCarousel>
    );
  }
}

export default Carousel;
