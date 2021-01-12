import React from 'react';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Login from '../../../src/Login.js';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: null,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING':
      //return console.log(state.loading);
      return { ...state, loading: true };
    case 'CLEAR_LOADING':
      return { ...state, loading: null };
  }
  return state;
};
const store = createStore(reducer, applyMiddleware(logger));
const Reducer = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default Reducer;
