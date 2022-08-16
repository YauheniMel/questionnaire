import React, { useState } from 'react';
import Form from './pages/Form/Form';
import Profile from './pages/Profile/Profile';

const App = () => {
  const [state, setState] = useState({
    isSubmitted: false,
    isValid: true,
  })

  return (
    <div className="App">
      <div className="container">
        {
          state.isSubmitted && state.isValid
            ? (
              <Profile
                state={state}
              />
            ) : (
              <Form
                state={state}
                setState={setState}
              />
            )
        }
      </div>
    </div>
  )
}

export default App;
