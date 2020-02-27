import React from 'react';
import Container from '../../Container/Container/Container';
import Item from './Item';
import styled from 'styled-components';
import Card from '../ProductCard/ProductCard';
import productImage from '../../images/mk1.jpg';
const StyledShopItems = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
export default function ShopItems() {
  return (
    <Container>
      <StyledShopItems>
        <Item>
          <Card
            productImage={productImage}
            productName={'Samsung'}
            price={'R1500'}
          />
        </Item>
        <Item>
          {' '}
          <Card
            productImage={productImage}
            productName={'Samsung'}
            price={'R1500'}
          />
        </Item>
        <Item>
          {' '}
          <Card
            productImage={productImage}
            productName={'Samsung'}
            price={'R1500'}
          />
        </Item>
        <Item>
          {' '}
          <Card
            productImage={productImage}
            productName={'Samsung'}
            price={'R1500'}
          />
        </Item>
      </StyledShopItems>
    </Container>
  );
}
