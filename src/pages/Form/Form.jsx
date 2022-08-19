import React, { useState } from 'react';
import { initState } from '../../App';
import Button from '../../components/Button/Button';
import FormField from '../../components/FormField/FormField';
import checkFormIsValid from '../../services/checkFormIsValid';
import classes from './Form.module.css';

const Form = ({ setState, state, setIsNotify }) => {
  const [ formIsReset, setFormIsReset ] = useState(false);
  const { formData } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isSubmitted: true,
      isValid: checkFormIsValid(state)
    })

    setFormIsReset(false);
    setIsNotify(true);
  }

  const handleReset = () => {
    setState(initState);

    setFormIsReset(true);
  }

  const handleChangeFormField = (name, value) => {
    setState({
      ...state,
      isValid: checkFormIsValid(state),
      isSubmitted: false,
      formData: {
        ...state.formData,
        [name]: value,
      }
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
          value={formData.name || null}
          handleChange={handleChangeFormField}
          name="name"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="Фамилия"
          type="text"
          placeholder="Иванов"
          value={formData.surname || null}
          handleChange={handleChangeFormField}
          name="surname"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="Дата рождения"
          type="date"
          placeholder="22.02.2011"
          value={formData.date || null}
          handleChange={handleChangeFormField}
          name="date"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="Телефон"
          type="tel"
          placeholder="7-7777-77-77"
          value={formData.phone || null}
          handleChange={handleChangeFormField}
          name="phone"
          setState={setState}
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="Сайт"
          type="url"
          value={formData.url || null}
          placeholder="https://example.com"
          handleChange={handleChangeFormField}
          name="url"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="О себе"
          type="textarea"
          value={formData.about || null}
          placeholder="Я люблю все то, что не нравится остальным..."
          handleChange={handleChangeFormField}
          name="about"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="Стек технологий"
          placeholder="JavaScript, React, NodeJS, CSS3, HTML5"
          type="textarea"
          value={formData.stack || null}
          handleChange={handleChangeFormField}
          name="stack"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <FormField
          label="Описание последнего проекта"
          placeholder="Приложение для создания различных коллекций"
          type="textarea"
          value={formData.project || null}
          handleChange={handleChangeFormField}
          name="project"
          isSubmitted={state.isSubmitted}
          formIsReset={formIsReset}
        />
        <div className={classes.action}>
          {(!state.isValid && state.isSubmitted) && (
            <strong>Форма невалидна</strong>
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


