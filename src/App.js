import React, { useState } from 'react';
import Form from './pages/Form/Form';
import Profile from './pages/Profile/Profile';
import NotificationModal from './components/NotificationModal/NotificationModal';

export const initState = {
  isSubmitted: false,
  isValid: true,
  formData: {},
};
// Подскажи пожалуйста. Здесь правильнее было бы разделить state?(setIsSubmitted, setIsValid, setFormData) Или использовать useReducer? Вообще нормально такой объект в один state вставлять?

const App = () => {
  const [state, setState] = useState(initState);
  const [isNotify, setIsNotify] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        {state.isSubmitted && state.isValid ? (
          <Profile state={state} />
        ) : (
          <Form state={state} setState={setState} setIsNotify={setIsNotify} />
        )}
      </div>
      {state.isSubmitted && (
        <NotificationModal
          type={state.isValid ? 'success' : 'error'}
          isNotify={isNotify}
          setIsNotify={setIsNotify}
        />
      )}
    </div>
  );
};

export default App;
