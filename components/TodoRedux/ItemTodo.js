/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
const ItemTodo = (props) => {
  const onSelect = (id) => {
    props.dispatch({ type: 'SELECT_TODO', id });
  };
  const onRemove = (id) => {
    props.dispatch({ type: 'REMOVE_TODO', id });
  };
  return (
    <View style={{ paddingHorizontal: 80 }}>
      {props.todo.map((todos) => (
        <View style={{ flexDirection: 'row' }} key={todos.id}>
          <TouchableOpacity onPress={() => onSelect(todos.id)}>
            <Text style={{ textDecorationLine: todos.isSelect ? 'line-through' : 'none' }}>
              {todos.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => onRemove(todos.id)}>
            <Icon style={{ marginTop: -2 }} name="remove" size={20} color="#900" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
const mapState = (state) => {
  return { todo: state };
};
export default connect(mapState)(ItemTodo);
