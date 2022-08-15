import React from 'react';
import classes from './Input.module.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocusInput = () => {
    if(this.props.type === 'date') {
      this.inputRef.current.type = 'date'
    }
  }

  handleBlurInput = () => {
    if(this.props.type === 'date' && !this.inputRef.current.value) {
      this.inputRef.current.type = 'text'
    }
  }

  handlePreparePhoneNumber = (value) => {
    let phone = '';

    for(let i = 0; i < value.length; i++) {
      phone += value[i];

      if(i === 0 || i === 4 || i === 6 ) {
        phone += '-';
      }
    }

    if(phone.length > 12) {
      phone = phone.slice(0, 12);
    }

    return phone;
  }

  render() {
    return (
      <input
        autoFocus={this.props.autofocus}
        id={this.props.label}
        ref={this.inputRef}
        className={classes.input}
        type={(this.props.type === 'date' && this.props.value === null)
          ? 'text'
          : this.props.type
        }
        onFocus={this.handleFocusInput}
        onBlur={this.handleBlurInput}
        placeholder={this.props.placeholder}
        value={this.props.value || ''}
        onChange={(e) => {
          let { value } = e.currentTarget;

          if(this.props.type === 'tel') {
            value = value.replace(/\D/g, "");

            value = this.handlePreparePhoneNumber(value);
          }

          this.props.handleChange(this.props.name, value)
        }}
      />
    )
  }
}

export default Input;
