import React from 'react';
import Button from '../../conponents/Button/Button';
import FormField from '../../conponents/FormField/FormField';
import checkFormIsValid from '../../services/checkFormIsValid';
import classes from './Form.module.css';

const Form = ({ setState, state }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isSubmitted: true,
      isValid: checkFormIsValid(state)
    })
  }

  const handleReset = () => {
    setState({
      isSubmitted: false,
      isValid: true
    });
  }

  const handleChangeFormField = (name, value) => {
    setState({
      ...state,
      isValid: checkFormIsValid(state),
      isSubmitted: false,
      [name]: value
    })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>
          Создание анкеты
        </legend>
        <FormField
          label="Имя"
          autofocus
          type="text"
          placeholder="Иван"
          value={state.name || null}
          handleChange={handleChangeFormField}
          name="name"
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="Фамилия"
          type="text"
          placeholder="Иванов"
          value={state.surname || null}
          handleChange={handleChangeFormField}
          name="surname"
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="Дата рождения"
          type="date"
          placeholder="22.02.2011"
          value={state.date || null}
          handleChange={handleChangeFormField}
          name="date"
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="Телефон"
          type="tel"
          pattern="[0-9]{3}"
          placeholder="7-7777-77-77"
          value={state.phone || null}
          handleChange={handleChangeFormField}
          name="phone"
          setState={setState}
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="Сайт"
          type="url"
          value={state.url || null}
          placeholder="https://example.com"
          handleChange={handleChangeFormField}
          name="url"
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="О себе"
          type="textarea"
          value={state.about || null}
          placeholder="Я люблю все то, что не нравится остальным..."
          handleChange={handleChangeFormField}
          name="about"
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="Стек технологий"
          placeholder="JavaScript, React, NodeJS, CSS3, HTML5"
          type="textarea"
          value={state.stack || null}
          handleChange={handleChangeFormField}
          name="stack"
          isSubmitted={state.isSubmitted}
        />
        <FormField
          label="Описание последнего проекта"
          placeholder="Приложение для создания различных коллекций"
          type="textarea"
          value={state.project || null}
          handleChange={handleChangeFormField}
          name="project"
          isSubmitted={state.isSubmitted}
        />
        <div className={classes.action}>
          {(!state.isValid && state.isSubmitted) && (
            <strong>Форма заполнена неправильно</strong>
          )}
          <Button
            handleClick={handleReset}
            type="reset"
          >
            Отмена
          </Button>
          <Button
            type="submit"
          >
            Сохранить
          </Button>
        </div>
      </fieldset>
    </form>
  )
}

export default Form;


