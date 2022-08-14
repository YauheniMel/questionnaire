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

  render() {
    return (
      <input
        required
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
          const { value } = e.currentTarget;

          this.props.handleChange(this.props.name, value)
        }}
      />
    )
  }
}

export default Input;
