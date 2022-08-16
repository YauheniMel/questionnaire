import React from 'react';
import classes from './Button.module.css';

const Button = ({ handleClick, type, children }) => (
    <button
      className={classes.button}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
)

export default Button;
