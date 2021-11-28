import React, { Fragment } from 'react';
import MainPage from './components/pages/MainPage';
import { Provider } from 'react-redux';
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <MainPage style={{ display: 'contents' }} />
        </Fragment>
      </PersistGate>
    </Provider>
  );
}

export default App;
