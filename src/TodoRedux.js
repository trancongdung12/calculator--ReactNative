import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import InputTodo from '../components/TodoRedux/InputTodo';
import ItemTodo from '../components/TodoRedux/ItemTodo';

const todoState = {
  todo: [],
};
var nextId = 0;
const reducer = (state = todoState, action) => {
  switch (action.type) {
    case 'SELECT_TODO':
      return state.map((todo) => todo.id === action.id && { ...todo, isSelect: !todo.isSelect });
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: nextId++,
          text: action.text,
          isSelect: false,
        },
      ];
    default:
      return state;
  }
};
const store = createStore(reducer);
const TodoRedux = () => {
  return (
    <Provider store={store}>
      <InputTodo />
      <ItemTodo />
    </Provider>
  );
};

export default TodoRedux;
