import React from 'react';
import classes from './Profile.module.css';

const Profile = ({ state }) => {
  const hrefTel = `tel:${state.phone}`;

  return (
    <div className={classes.profile}>
      <h2 className={classes.title}>
        {state.name} {state.surname}
      </h2>
      <div className={classes.body}>
        <div className={classes.info}>
          <div>
            <h4>Родился(лась):</h4>
            <time>{state.date}</time>
          </div>
          <div>
            <h4>Телефон:</h4>
            <a href={hrefTel}>
              {state.phone}
            </a>
          </div>
          <div>
            <h4>Сайт:</h4>
            <a
              href={state.url}
              target="_blank"
              rel="noreferrer"
            >
              {state.url}
            </a>
          </div>
        </div>
        <div className={classes.details}>
          <div>
            <h4>О себе:</h4>
            <p>
              {state.about}
            </p>
          </div>
          <div>
            <h4>Стек технологий:</h4>
            <p>
              {state.stack}
            </p>
          </div>
          <div>
            <h4>Описание последнего проекта:</h4>
            <p>
              {state.project}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;


