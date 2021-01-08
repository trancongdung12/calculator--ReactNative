import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

const ItemTodo = (props) => {
  console.log(props.todo);
  return (
    <View style={{ paddingHorizontal: 40 }}>
      {/* {props.todo.map((todos) => (
        <TouchableOpacity key={todos.id}>
          <Text>{todos.text}</Text>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};
const mapState = (state) => {
  console.log(state.todo);
  return { todo: state.todo };
};
export default connect(mapState)(ItemTodo);
