import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Button:React.FC = ({ children }) => {
  const StyledButton = styled.button`
    background: tomato;
    border-radius: 3px;
    padding: .5em 1em;
    border: none;
    color: white;
  `;

  return (
    <StyledButton>{children}</StyledButton>
  );
}

export default Button;
