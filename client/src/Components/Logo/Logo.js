import React from 'react';
import logo from '../../images/mobicell.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  .logo__img {
    height: 3.25rem;
    margin-left: 2rem;
  }
`;

const Logo = function() {
  return (
    <StyledLink to='/'>
      <img className='logo__img' src={logo} alt={'mobifone logo'} />
    </StyledLink>
  );
};
export default Logo;
