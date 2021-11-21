import React, { Fragment } from 'react';
import MainPage from './components/pages/MainPage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <MainPage style={{ display: 'contents' }} />
      </Fragment>
    </Provider>
  );
}

export default App;
