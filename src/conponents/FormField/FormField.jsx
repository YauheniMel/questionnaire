import React from 'react';
import validateField from '../../services/validateField';
import Alert from '../Alert/Alert';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import classes from './FormField.module.css';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertContent: null,
    }
  }

  componentDidUpdate({ isSubmitted }) {
    if(isSubmitted !== this.props.isSubmitted) {
      this.setState({
        alertContent: validateField(this.props.name, this.props.value)
      });
    }
  }

  handleChangeField = (name, value) => {
    this.setState({
      alertContent: validateField(name, value)
    });

    this.props.handleChange(name, value);
  }

  handleClearAlertContent = () => {
    this.setState({
      alertContent: null
    });
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
                handleChange={this.handleChangeField}
                value={this.props.value}
              />
            ) : (
              <Input
                autoFocus={this.props.autofocus}
                label={this.props.label}
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                handleChange={this.handleChangeField}
                value={this.props.value}
              />
            )
        }
        <span
          className={classes.span}
        >
          {this.props.label}
        </span>
        <div className={
          (this.props.isSubmitted && this.state.alertContent)
            ? classes.alert
            : classes.hidden
        }>
          <Alert
            content={this.state.alertContent}
            handleClick={this.handleClearAlertContent}
          />
        </div>
      </div>
    )
  }
}

export default FormField;
