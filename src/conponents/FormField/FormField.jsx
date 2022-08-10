import React from 'react';
import classes from './FormField.module.css';

class FormField extends React.Component {
  render() {
    return (
      <div className={classes.wrap}>
        <label className={classes.label} htmlFor="name">
          {this.props.label}
        </label>
        {
          this.props.type === 'textarea'
            ? (
              <textarea
                rows="7"
                placeholder={this.props.placeholder}
              >
              </textarea>
            ) : (
              <input
                id="name"
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
