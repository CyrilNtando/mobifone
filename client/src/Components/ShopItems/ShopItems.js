import React from 'react';
import Container from '../../Container/Container/Container';
import Item from './Item';
import styled from 'styled-components';

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
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </StyledShopItems>
    </Container>
  );
}
