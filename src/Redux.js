import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CountApp from '../components/Redux/CountApp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
const initSate = {
  count: 0,
};
const reducer = (state = initSate, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { count: state.count + 1 };
    case 'DECREASE_COUNTER':
      return { count: state.count - 1 };
  }
  return state;
};
const store = createStore(reducer, applyMiddleware(logger));

const Redux = () => {
  return (
    <Provider store={store}>
      <CountApp />
    </Provider>
  );
};

export default Redux;
