import React from 'react';
import classes from './Counter.module.css';

class Counter extends React.Component {
  max = 600;
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    if(this.props.letterCount > this.max) {
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
          {this.props.letterCount}
        </strong>
        /
        <span className={classes.span}>
          {this.max}
        </span>
      </div>
    )
  }
}

export default Counter;
