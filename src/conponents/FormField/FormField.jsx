import React from 'react';
import validateField from '../../services/validateField';
import Alert from '../Alert/Alert';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import classes from './FormField.module.css';

class FormField extends React.Component {
  alertContent = null;

  componentDidUpdate() {
    this.alertContent = validateField(this.props.name, this.props.value)
  }

  render() {
    return (
      <div className={classes.wrap}>
        <label
          htmlFor={this.props.label}
          className={classes.label}
        >
          {this.props.label}
        </label>
        {
          this.props.type === 'textarea'
            ? (
              <TextArea
                label={this.props.label}
                placeholder={this.props.placeholder}
                name={this.props.name}
                handleChange={this.props.handleChange}
                value={this.props.value}
              />
            ) : (
              <Input
                autoFocus={this.props.autofocus}
                label={this.props.label}
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                handleChange={this.props.handleChange}
                value={this.props.value}
              />
            )
        }
        <span>{this.props.label}</span>
        <div className={
          (this.props.isSubmitted && this.alertContent)
            ? classes.alert
            : classes.hidden
        }>
          <Alert content={this.alertContent}/>
        </div>
      </div>
    )
  }
}

export default FormField;
