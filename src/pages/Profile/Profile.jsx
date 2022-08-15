import React from 'react';
import classes from './Profile.module.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.hrefTel = `tel:${this.props.state.phone}`;
  }

  render() {
    return (
      <div className={classes.profile}>
        <h2 className={classes.title}>
          {this.props.state.name} {this.props.state.surname}
        </h2>
        <div className={classes.body}>
          <div className={classes.info}>
            <div>
              <h4>Родился(лась):</h4>
              <time>{this.props.state.date}</time>
            </div>
            <div>
              <h4>Телефон:</h4>
              <a href={this.hrefTel}>
                {this.props.state.phone}
              </a>
            </div>
            <div>
              <h4>Сайт:</h4>
              <a
                href={this.props.state.url}
                target="_blank"
                rel="noreferrer"
              >
                {this.props.state.url}
              </a>
            </div>
          </div>
          <div className={classes.details}>
            <div>
              <h4>О себе:</h4>
              <p>
                {this.props.state.about}
              </p>
            </div>
            <div>
              <h4>Стек технологий:</h4>
              <p>
                {this.props.state.stack}
              </p>
            </div>
            <div>
              <h4>Описание последнего проекта:</h4>
              <p>
                {this.props.state.stack}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;


