import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import InputTodo from '../components/TodoRedux/InputTodo';
import ItemTodo from '../components/TodoRedux/ItemTodo';

const todoState = {
  todo: [{
    id:0,
    text:"abc",
    isSelect: false,
  }],
};
var nextId = 1;
const reducer = (state = [], action) => {
  let todos = state.todo;
  switch (action.type) {
    case 'SELECT_TODO':
      console.log(state);
      return state.map((todo) => todo.id === action.id ? { ...todo, isSelect: !todo.isSelect }:todo);
    case 'ADD_TODO':
      console.log(state);
      return [
        ...state,
        {
        id:nextId++,
        text:action.string,
        isSelect: false,
        }
        
      ];
     
      // return [
      //   ...state,
      //   {
      //     id: nextId++,
      //     text: action.text,
      //     isSelect: false,
      //   },
      // ];
      default:
      return state;
     
};
  }
  
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
