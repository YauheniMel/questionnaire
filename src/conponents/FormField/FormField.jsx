import React, { useState, useEffect } from 'react';
import validateField from '../../services/validateField';
import Alert from '../Alert/Alert';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import classes from './FormField.module.css';

const FormField = ({
  name,
  value,
  handleChange,
  label,
  type,
  placeholder,
  setState,
  isSubmitted,
  autofocus = false
}) => {
  const [alertContent, setAlertContent] = useState(null);

  useEffect(() => {
    if(isSubmitted) {
      setAlertContent(validateField(name, value));
    }
  }, [isSubmitted])

  const handleChangeField = (name, value) => {
    const alertContent = validateField(name, value);

    setAlertContent(alertContent);

    handleChange(name, value);
  }

  return (
    <div className={classes.wrap}>
      <label
        htmlFor={label}
        className={classes.label}
      >
        {label}
      </label>
      {
        type === 'textarea'
          ? (
            <TextArea
              label={label}
              placeholder={placeholder}
              name={name}
              handleChange={handleChangeField}
              value={value}
            />
          ) : (
            <Input
              autofocus={autofocus}
              label={label}
              type={type}
              name={name}
              placeholder={placeholder}
              setState={setState}
              handleChange={handleChangeField}
              value={value}
            />
          )
      }
      <span
        className={classes.span}
      >
        {label}
      </span>
      <div className={
        alertContent
          ? classes.alert
          : classes.hidden
      }>
        <Alert
          content={alertContent}
        />
      </div>
    </div>
  )
}

export default FormField;
