import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const StyledNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  justify-content: space-between;

  .navigationList__item {
    padding: 1rem;
  }
  .navigationList__Link,
  .navigationList__Link:visited,
  .navigationList__Link:link {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
  }

  .divider {
    height: 80%;
    border-left: 1px solid #cacaca;
  }
`;

const NavigationList = props => {
  return (
    <StyledNavigationList>
      <li className='navigationList__item'>
        <Link className='navigationList__Link'>Home</Link>
      </li>
      <li className='navigationList__item'>
        <Link className='navigationList__Link'>Devices</Link>
      </li>
      <li className='navigationList__item'>
        <Link className='navigationList__Link'>Shop</Link>
      </li>
      <li className='divider' />
      <li className='navigationList__item'>
        <Button variant='icon-button'>Cart</Button>
      </li>
      <li className='navigationList__item'>
        <Button variant='outlined' size='large'>
          Sign IN
        </Button>
      </li>
      <li className='navigationList__item'>
        <Button variant='normal' size='large'>
          Sign Up
        </Button>
      </li>
    </StyledNavigationList>
  );
};

export default NavigationList;
