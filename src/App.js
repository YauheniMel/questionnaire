import React from 'react';
import Form from './pages/Form/Form';
import Profile from './pages/Profile/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      isValid: true
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {
            this.state.isSubmitted && this.state.isValid
              ? (
                <Profile
                  state={this.state}
                />
              ) : (
                <Form
                  state={this.state}
                  setState={(data) => this.setState(data)}
                />
              )
          }
        </div>
      </div>
    )
  }
}

export default App;
