import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Container from '../Container/Container';
import Typography from '../../Components/Typography/Typography';
export default function Landing() {
  return (
    <>
      <Carousel />
      <Container>
        <Typography variant='secondary'>Best Selling Phones</Typography>
      </Container>
    </>
  );
}
