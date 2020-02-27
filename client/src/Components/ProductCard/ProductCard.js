import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledCard = styled.div`
  max-width: 30rem;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  max-height: 40rem;
  padding: 3rem;
  .card__picture {
    max-width: 18rem;
    height: auto;
  }
  .card__picture-block {
    height: 20.8rem;
    border: 1px solid #f0f0f0;
  }
  .card__header {
    text-align: center;
    .card__header--primary,
    .card__header--secondary {
      display: block;
    }
    .card__header--primary {
      font-size: 2.1rem;
    }
    .card__header--secondary {
      font-size: 1.7rem;
    }
    .card__price {
      font-size: 2.1rem;
    }
  }
`;
export default function Card(props) {
  const { productImage, productName, price } = props;
  return (
    <StyledCard productImage={productImage}>
      <div className='card__picture-block'>
        <img className='card__picture' src={productImage} alt={productName} />
      </div>
      <div className='card__container'>
        <h4 className='card__header'>
          <span className='card__header--secondary'>Smartphone</span>
          <span className='card__header--primary'>{productName}</span>
        </h4>
        <h4 className='card__price'>{'R300'}</h4>
      </div>
      <div className='card__action'>
        <div className='action__button'>
          <Button>Add to cart</Button>
        </div>
      </div>
    </StyledCard>
  );
}
