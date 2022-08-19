import React from 'react';
import classes from './Profile.module.css';

const Profile = ({ state }) => {
  const { formData } = state;

  const stackList = formData.stack.split(', ').map(stackValue => <li key={stackValue}>{stackValue}</li>)

  return (
    <div className={classes.profile}>
      <h2 className={classes.title}>
        {formData.name} {formData.surname}
      </h2>
      <div className={classes.body}>
        <div className={classes.info}>
          <div>
            <h4>Родился(лась):</h4>
            <time>{formData.date}</time>
          </div>
          <div>
            <h4>Телефон:</h4>
            <a href={`tel:${formData.phone}`}>
              {formData.phone}
            </a>
          </div>
          <div>
            <h4>Сайт:</h4>
            <a
              href={formData.url}
              target="_blank"
              rel="noreferrer"
            >
              {formData.url}
            </a>
          </div>
        </div>
        <div className={classes.details}>
          <div>
            <h4>О себе:</h4>
            <p>
              {formData.about}
            </p>
          </div>
          <div>
            <h4>Стек технологий:</h4>
            <ul>
              {stackList}
            </ul>
          </div>
          <div>
            <h4>Описание последнего проекта:</h4>
            <p>
              {formData.project}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;


