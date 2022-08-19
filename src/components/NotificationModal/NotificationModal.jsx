import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import classes from './NotificationModal.module.css';

const Template = ({ type, closePopUp }) => {
  let timerId;
  let time = 4800;
  let start;
  let pause;
  let restTime;

  useEffect(() => {
    start = +new Date();

    timerId = setTimeout(closePopUp, time);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const stopTimer = () => {
    clearTimeout(timerId);

    pause = +new Date();

    restTime = time - (pause - start);

    timerId = setTimeout(closePopUp, 999999999);
  }

  const continueTimmer = () => {
    timerId = setTimeout(closePopUp, restTime);
  }

  return (
  <div
    onMouseEnter={stopTimer}
    onMouseLeave={continueTimmer}
    className={`${classes.wrap} ${classes[type]}`}
  >
    <span>
      {type === "error" ? "Данные указаны не верно" : "Данные заполнены успешно" }
    </span>
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 100 100"
    >
      <circle
        className={classes.timer}
        r="30"
        cx="50"
        cy="50"
      />
    </svg>
    <button
      className={classes.button}
      onClick={closePopUp}
    >
      &#9587;
    </button>
  </div>
)}


const NotificationModal = ({ type, setIsNotify, isNotify }) => {
  const closePopUp = () => {
    setIsNotify(false);
  };

  const domNode = document.getElementById("notification");

  if (domNode && isNotify) {
    return ReactDOM.createPortal(<Template type={type} closePopUp={closePopUp} />, domNode);
  }
};

export default NotificationModal;
