import React from 'react';
import classes from './TextArea.module.css';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <textarea
        required
        id={this.props.label}
        ref={this.inputRef}
        className={classes.input}
        name={this.props.name}
        rows="7"
        placeholder={this.props.placeholder}
        value={this.props.value || ''}
        onChange={(e) => {
          const { value } = e.currentTarget;

          // if(!value.trim()) {
          //   console.log()
          //   this.inputRef.current
          // }

          this.props.handleChange(this.props.name, value)
        }}
      />
    )
  }
}

export default TextArea;
