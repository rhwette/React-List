// import React from 'react';
import './Button.css';

interface ButtonProps {
  children: string;
  // color?: string;
  color?: primary | secondary | danger;
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: ButtonProps) => {
  return (
    <button className={'button btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
