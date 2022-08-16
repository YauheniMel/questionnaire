import React from 'react';
import classes from './Counter.module.css';

const Counter = ({ letterCount }) => {
  const max = 600;

  if(letterCount > max) {
    return (
      <div className={classes.wrap}>
        <strong>
          Превышен лимит символов в поле
        </strong>
      </div>
    )
  }

  return (
    <div className={classes.wrap}>
      <strong className={classes.count}>
        {letterCount}
      </strong>
      /
      <span className={classes.span}>
        {max}
      </span>
    </div>
  )
}

export default Counter;
