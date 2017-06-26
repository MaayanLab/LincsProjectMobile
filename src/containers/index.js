import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
// import codePush from 'react-native-code-push';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import App from './app';

let middleware = [
  thunk,
];

if (__DEV__) {
  middleware = [
    ...middleware,
    logger(),
  ];
}

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// export default codePush(AppContainer);
