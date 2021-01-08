import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
const InputTodo = (props) => {
  const [text, setText] = useState('');
  const addTodo = (string) => {
    props.dispatch({ type: 'ADD_TODO', string });
  };
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal:40 }}>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        placeholder="Enter something"
      />
      <TouchableOpacity onPress={() => addTodo(text)}>
        <Icon name="plus" size={30} color="#900" />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(InputTodo);
