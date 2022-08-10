import React from 'react';
import classes from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button className={classes.button} type={this.props.type}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;
