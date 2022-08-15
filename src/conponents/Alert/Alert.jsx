import React from 'react';
import classes from './Alert.module.css';

class Alert extends React.Component {
  render() {
    return (
      <div
        className={classes.alert}
        type={this.props.type}
      >
        <strong>
          {this.props.content}
        </strong>
        <button
          className={classes.button}
          onClick={this.props.handleClick}
        >
          &#9587;
        </button>
      </div>
    )
  }
}

export default Alert;
