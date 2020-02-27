import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Container from '../Container/Container';
import Typography from '../../Components/Typography/Typography';
import ShopItems from '../../Components/ShopItems/ShopItems';
import Section from '../../Layout/Section/Section';
export default function Landing() {
  return (
    <>
      <Carousel />
      <Container>
        <Typography variant='secondary'>Best Selling Phones</Typography>
      </Container>
      <Section>
        <ShopItems />
      </Section>
    </>
  );
}
