import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <HomePage />
      </Fragment>
    </Provider>
  );
}

export default App;
