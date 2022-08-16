import React, { useRef } from 'react';
import classes from './Input.module.css';

const Input = ({
  type,
  name,
  handleChange,
  autofocus,
  label,
  placeholder,
  value,
  setState
}) => {
  const inputRef = useRef();

  const handleFocusInput = () => {
    if(type === 'date') {
      inputRef.current.type = 'date'
    }
  }

  const handleBlurInput = () => {
    if(type === 'date' && !inputRef.current.value) {
      inputRef.current.type = 'text'
    }
  }

  const handleChangeInput = (e) => {
    let { value } = e.currentTarget;

    if(type === 'tel') {
      value = value.replace(/\D/g, "");

      value = handlePreparePhoneNumber(value);
    }

    handleChange(name, value);
  }

  const handleDelTel = (tel) => {
    if(tel && tel[tel.length - 1] === '-') {
      setState({
        phone: tel.slice(0, -1)
      })
    }
  }

  const handleKeyDown = (e) => {
    if(type !== 'tel') return false;

    if(e.key === 'Backspace') {
      handleDelTel(value);
    }
  }

  const handlePreparePhoneNumber = (value) => {
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

  return (
    <input
      autoFocus={autofocus}
      id={label}
      ref={inputRef}
      className={classes.input}
      type={(type === 'date' && value === null)
        ? 'text'
        : type
      }
      onFocus={handleFocusInput}
      onBlur={handleBlurInput}
      placeholder={placeholder}
      value={value || ''}
      onChange={handleChangeInput}
      onKeyDown={handleKeyDown}
    />
  )
}

export default Input;
