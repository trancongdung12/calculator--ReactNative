import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

const ItemTodo = (props) => {
  const onSelect = (id) => {
    props.dispatch({ type: 'SELECT_TODO', id });
  };
  console.log(props.todo);
  return (
    <View style={{ paddingHorizontal: 40 }}>
      { props.todo.map((todos) => (
        <TouchableOpacity onPress={() => onSelect(todos.id)} key={todos.id}>
          <Text
            style={{textDecorationLine:todos.isSelect ?"line-through":"none"}}
          >{todos.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const mapState = (state) => {
  console.log(state);
  return { todo: state };
};
export default connect(mapState)(ItemTodo);
