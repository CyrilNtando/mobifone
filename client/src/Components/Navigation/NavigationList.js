import React from 'react';
import styled from 'styled-components';

const StyledNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  .navigationList__Item {
  }
  .navigationList__Link {
  }
`;

const NavigationList = props => {
  return (
    <StyledNavigationList>
      <li className='navigationList__item'>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </StyledNavigationList>
  );
};

export default NavigationList;
