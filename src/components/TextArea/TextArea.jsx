import React, { useRef } from 'react';
import Counter from '../Counter/Counter';
import classes from './TextArea.module.css';

const TextArea = ({
  label,
  name,
  placeholder,
  value,
  handleChange
}) => (
  <>
    <textarea
      id={label}
      className={classes.input}
      name={name}
      rows="7"
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => {
        const { value } = e.currentTarget;

        handleChange(name, value)
      }}
    />
    {
      value?.length && (
        <Counter letterCount={value.length} />
      )
    }
  </>
)

export default TextArea;
