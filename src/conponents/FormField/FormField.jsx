import React from 'react';
import classes from './FormField.module.css';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleInputFocus = this.handleInputFocus.bind(this);
  }

  handleInputFocus() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className={classes.wrap}>
        <label
          className={classes.label}
          onClick={this.handleInputFocus}
        >
          {this.props.label}
        </label>
        {
          this.props.type === 'textarea'
            ? (
              <textarea
                ref={this.inputRef}
                className={classes.input}
                rows="7"
                placeholder={this.props.placeholder}
              />
            ) : (
              <input
                ref={this.inputRef}
                className={classes.input}
                type={this.props.type === 'date' || this.props.type}
                onFocus={() => {
                  if(this.props.type === 'date') {
                    this.inputRef.current.type = 'date'
                  }
                }}
                onBlur={() => {
                  if(this.props.type === 'date' && !this.inputRef.current.value) {
                    this.inputRef.current.type = 'text'
                  }
                }}
                placeholder={this.props.placeholder}
              />
            )
        }
        <span>{this.props.label}</span>
      </div>
    )
  }
}

export default FormField;
