import React from 'react';
import Button from '../../conponents/Button/Button';
import FormField from '../../conponents/FormField/FormField';
import checkFormIsValid from '../../services/checkFormIsValid';
import classes from './Form.module.css';

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setState((state) =>{
      return  ({
      isSubmitted: true,
      isValid: checkFormIsValid(state)
    })})
  }

  handleReset = () => {
    const keys = Object.keys(this.props.state);

    const initObjects = keys.map(key => ({ [key]: null }));
    const initState = Object.assign(...initObjects);

    this.props.setState({
      ...initState,
      isSubmitted: false,
      isValid: true
    });
  }

  handleChangeFormField = (name, value) => {
    this.props.setState({
      [name]: value
    })

    this.props.setState((state) => ({
      isValid: checkFormIsValid(state),
      isSubmitted: false
    }))
  }

  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>
            Создание анкеты
          </legend>
          <FormField
            label="Имя"
            autofocus
            type="text"
            placeholder="Иван"
            isSubmitted={this.props.state.isSubmitted}
            value={this.props.state.name || null}
            handleChange={this.handleChangeFormField}
            name="name"
          />
          <FormField
            label="Фамилия"
            type="text"
            placeholder="Иванов"
            isSubmitted={this.props.state.isSubmitted}
            value={this.props.state.surname || null}
            handleChange={this.handleChangeFormField}
            name="surname"
          />
          <FormField
            label="Дата рождения"
            type="date"
            placeholder="22.02.2011"
            value={this.props.state.date || null}
            isSubmitted={this.props.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="date"
          />
          <FormField
            label="Телефон"
            type="tel"
            pattern="[0-9]{3}"
            placeholder="7-7777-77-77"
            value={this.props.state.phone || null}
            isSubmitted={this.props.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="phone"
            setState={(data) => this.props.setState(data)}
          />
          <FormField
            label="Сайт"
            type="url"
            value={this.props.state.url || null}
            placeholder="https://example.com"
            isSubmitted={this.props.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="url"
          />
          <FormField
            label="О себе"
            pattern="\S+"
            type="textarea"
            value={this.props.state.about || null}
            placeholder="Я люблю все то, что не нравится остальным..."
            isSubmitted={this.props.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="about"
          />
          <FormField
            label="Стек технологий"
            placeholder="JavaScript, React, NodeJS, CSS3, HTML5"
            type="textarea"
            value={this.props.state.stack || null}
            isSubmitted={this.props.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="stack"
          />
          <FormField
            label="Описание последнего проекта"
            placeholder="Приложение для создания различных коллекций"
            type="textarea"
            value={this.props.state.project || null}
            isSubmitted={this.props.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="project"
          />
          <div className={classes.action}>
            {!this.props.state.isValid && (
              <strong>Форма заполнена неправильно</strong>
            )}
            <Button
              handleClick={this.handleReset}
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
}

export default Form;


