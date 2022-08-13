import React from 'react';
import classes from './Alert.module.css';

class Alert extends React.Component {
  render() {
    return (
      <div
        className={classes.alert}
        type={this.props.type}
      >
        {this.props.content}
      </div>
    )
  }
}

export default Alert;
