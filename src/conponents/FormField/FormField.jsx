import React from 'react';
import classes from './FormField.module.css';

class FormField extends React.Component {
  render() {
    return (
      <div className={classes.wrap}>
        <label
          className={`${classes.label}`}
        >
          {this.props.label}
        </label>
        {
          this.props.type === 'textarea'
            ? (
              <textarea
                className={classes.input}
                rows="7"
                placeholder={this.props.placeholder}
              />
            ) : (
              <input
                className={classes.input}
                type={this.props.type}
                placeholder={this.props.placeholder}
              />
            )
        }
      </div>
    )
  }
}

export default FormField;
