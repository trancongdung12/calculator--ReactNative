/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
const InputTodo = (props) => {
  const [text, setText] = useState('');
  const addTodo = (string) => {
    props.dispatch({ type: 'ADD_TODO', string });
    setText('');
  };
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 80, marginTop: 40 }}>
      <TextInput
        style={{ width: 200 }}
        onChangeText={(value) => setText(value)}
        value={text}
        placeholder="Enter something"
      />
      <TouchableOpacity onPress={() => addTodo(text)}>
        <Icon style={{ marginTop: 10 }} name="plus" size={30} color="#900" />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(InputTodo);
