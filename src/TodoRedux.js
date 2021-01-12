import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import InputTodo from '../components/TodoRedux/InputTodo';
import ItemTodo from '../components/TodoRedux/ItemTodo';

// const todoState = {
//   todo: [],
// };
var nextId = 1;
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isSelect: !todo.isSelect } : todo,
      );
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: nextId++,
          text: action.string,
          isSelect: false,
        },
      ];
    case 'REMOVE_TODO':
      console.log(state);
      return state.map((todo) =>
        todo.id === action.id ? state.splice(state.indexOf(todo), 1) : todo,
      );
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
