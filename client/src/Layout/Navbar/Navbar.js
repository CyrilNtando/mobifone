import React from 'react';
import './Navbar.scss';
import Container from '../../Hocs/Container/Container';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__primary'>
        <Container />
      </div>
      <div className='navbar__secondary'>
        <Container />
      </div>
    </nav>
  );
}

export default Navbar;
