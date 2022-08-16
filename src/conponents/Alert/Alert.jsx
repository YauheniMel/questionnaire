import React from 'react';
import classes from './Alert.module.css';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAlert: false,
    }
  }

  handleShowAlert = (isHide) => {
    this.setState(({
      hideAlert: isHide
    }))
  }

  render() {
    return (
      <>
        {
          this.state.hideAlert
            ? (
              <div
                className={classes.alert}
                type={this.props.type}
              >
                <strong>
                  {this.props.content}
                </strong>
                <button
                  type='button'
                  className={classes.button}
                  onClick={() => this.handleShowAlert(false)}
                >
                  &#9587;
                </button>
              </div>
            )
            : (
              <span
                title='Показать ошибку'
                className={classes.span}
                onClick={() => this.handleShowAlert(true)}
              >
                ?
              </span>
            )
        }
      </>
    )
  }
}

export default Alert;
