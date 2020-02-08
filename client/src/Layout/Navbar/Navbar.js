import React from 'react';
import styled from 'styled-components';
import Logo from '../../Components/Logo/Logo';
import NavigationList from '../../Components/Navigation/NavigationList';
const StyledNavBar = styled.header`
  position: fixed;
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
    <StyledNavBar className='navbar'>
      <nav className='navbar__container'>
        <Logo />
        <NavigationList />
      </nav>
    </StyledNavBar>
  );
}

export default Navbar;
