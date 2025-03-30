import React, { MouseEventHandler } from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;