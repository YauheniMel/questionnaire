import React from 'react';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import classes from './Form.module.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset className={classes.fieldset}>
          <legend>Создание анкеты</legend>
          <FormField
            label="Имя"
            type="text"
            placeholder="Иванов"
          />
          <FormField
            label="Фамилия"
            type="text"
            placeholder="Иван"
          />
          <FormField
            label="Дата рождения"
            type="date"
          />
          <FormField
            label="Телефон"
            type="tel"
            placeholder="xxx-xx-xx-xx"
          />
          <FormField
            label="Сайт"
            type="url"
            placeholder="https://sometext.com"
          />
          <FormField
            label="О себе"
            type="textarea"
            placeholder="Я люблю все то, что не нравится остальным..."
          />
          <FormField
            label="Стек технологий"
            placeholder="JavaScript, React, NodeJS, CSS3, HTML5"
            type="textarea"
          />
          <FormField
            label="Описание последнего проекта"
            placeholder="Приложение для создания различных коллекций"
            type="textarea"
          />
          <div>
            <Button type="reset">Отмена</Button>
            <Button>Сохранить</Button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Form;


