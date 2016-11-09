import React, { Component } from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

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

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
