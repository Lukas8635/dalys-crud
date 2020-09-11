import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import Portal from './components/Portal/Portal';

import './App.css';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Portal />
      </Provider>
    </div>
  );
};

export default App;
