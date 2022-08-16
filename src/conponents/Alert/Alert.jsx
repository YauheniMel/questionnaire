import React, { useState } from 'react';
import classes from './Alert.module.css';

const Alert = ({ type, content }) => {
  const [alertIsHidden, setAlertIsHidden] = useState(false);

  return (
    <>
      {
        alertIsHidden
          ? (
            <div
              className={classes.alert}
              type={type}
            >
              <strong>
                {content}
              </strong>
              <button
                type='button'
                className={classes.button}
                onClick={() => setAlertIsHidden(false)}
              >
                &#9587;
              </button>
            </div>
          )
          : (
            <span
              title='Показать ошибку'
              className={classes.span}
              onClick={() => setAlertIsHidden(true)}
            >
              ?
            </span>
          )
      }
    </>
  )
}

export default Alert;
