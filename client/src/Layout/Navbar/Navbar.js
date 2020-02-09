import React from 'react';
import styled from 'styled-components';
import Logo from '../../Components/Logo/Logo';
import NavigationList from '../../Components/Navigation/NavigationList';

const StyledHeader = styled.header`
  position: relative;
`;
const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 1.4rem;
  height: 7rem;
  background: #ebebeb;
  border-bottom: ${props => props.theme.line};
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  .navbar__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    margin: 0 auto;
    max-width: ${props => props.theme.gridWidth};
  }
`;

function Navbar() {
  return (
    <StyledHeader>
      <StyledNavBar className='navbar'>
        <div className='navbar__container'>
          <Logo />
          <NavigationList />
        </div>
      </StyledNavBar>
    </StyledHeader>
  );
}

export default Navbar;
