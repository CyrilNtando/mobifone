import React from 'react';
import styled from 'styled-components';

const NormalButton = styled.button`
  display: inline-block;
  border-radius: 2rem;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 3rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const OutlineButton = styled(NormalButton)`
  background-color: transparent;
  border-color: #ff4b2b;
  color: #ff4b2b;
`;

const IconButton = styled.button`
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 4.5rem;

  transition: transform 80ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, variant }) => {
  let Btn = NormalButton;
  switch (variant) {
    case 'outlined':
      Btn = OutlineButton;
      break;
    case 'icon-button':
      Btn = IconButton;
      break;
  }
  return <Btn>{children}</Btn>;
};

export default Button;
