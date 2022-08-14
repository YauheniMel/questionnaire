import React from 'react';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import classes from './Form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      isSubmitted: true,
    })
  }

  handleReset = () => {
    const keys = Object.keys(this.state);

    const initObjects = keys.map(key => ({ [key]: null }));
    const initState = Object.assign(...initObjects);

    this.setState({
      ...initState,
      isSubmitted: false,
    });
  }

  handleChangeFormField = (name, value) => {
    console.log(value)
    this.setState({
      [name]: value
    })
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
            isSubmitted={this.state.isSubmitted}
            value={this.state["name"] || null}
            handleChange={this.handleChangeFormField}
            name="name"
          />
          <FormField
            label="Фамилия"
            type="text"
            placeholder="Иванов"
            isSubmitted={this.state.isSubmitted}
            value={this.state["surname"] || null}
            handleChange={this.handleChangeFormField}
            name="surname"
          />
          <FormField
            label="Дата рождения"
            type="date"
            placeholder="22.02.2011"
            value={this.state["date"] || null}
            isSubmitted={this.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="date"
          />
          <FormField
            label="Телефон"
            type="tel"
            pattern="[0-9]{3}"
            placeholder="7-7777-77-77"
            value={this.state["phone"] || null}
            isSubmitted={this.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="phone"
          />
          <FormField
            label="Сайт"
            type="url"
            value={this.state["url"] || null}
            placeholder="https://example.com"
            isSubmitted={this.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="url"
          />
          <FormField
            label="О себе"
            pattern="\S+"
            type="textarea"
            value={this.state["about"] || null}
            placeholder="Я люблю все то, что не нравится остальным..."
            isSubmitted={this.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="about"
          />
          <FormField
            label="Стек технологий"
            placeholder="JavaScript, React, NodeJS, CSS3, HTML5"
            type="textarea"
            value={this.state["stack"] || null}
            isSubmitted={this.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="stack"
          />
          <FormField
            label="Описание последнего проекта"
            placeholder="Приложение для создания различных коллекций"
            type="textarea"
            value={this.state["project"] || null}
            isSubmitted={this.state.isSubmitted}
            handleChange={this.handleChangeFormField}
            name="project"
          />
          <div className={classes.action}>
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


