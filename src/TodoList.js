/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Image, StyleSheet, FlatList } from 'react-native';
import plus from '../assets/add.png';
import Item from '../components/TodoList/Item.js';

const TodoList = () => {
  const [textTodo, setTextTodo] = useState('');
  const [todo, setTodo] = useState([]);

  const onCheck = (index) => {
    let result = [...todo];
    result.map((todos) => todos.id === index && (todos.isSelect = !todos.isSelect));
    setTodo(result);
  };
  const onRemoveItem = (index) => {
    let result = [...todo];
    result.map((todos) => todos.id === index && result.splice(result.indexOf(todos), 1));
    setTodo(result);
  };

  const onAddTodo = () => {
    if (textTodo !== '') {
      setTodo([
        ...todo,
        {
          id: todo.length === 0 ? 0 : todo[todo.length - 1].id + 1,
          title: textTodo,
          isSelect: false,
        },
      ]);
      onChangeText('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Nothing in input');
    }
  };
  const onChangeText = (text) => {
    setTextTodo(text);
  };

  const renderItem = ({ item }) => (
    <Item
      isSelect={item.isSelect}
      removeItem={() => onRemoveItem(item.id)}
      changeCheck={() => onCheck(item.id)}
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.layoutTodo}>
        <TextInput
          value={textTodo}
          onChangeText={(value) => onChangeText(value)}
          style={styles.inputTodo}
          placeholder="Enter todo"
        />
        <TouchableOpacity onPress={() => onAddTodo()} style={styles.buttonAdd}>
          <Image style={{ height: 40, width: 40 }} source={plus} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList data={todo} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  layoutTodo: {
    flexDirection: 'row',
  },
  inputTodo: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 320,
    borderRadius: 5,
    paddingStart: 10,
    fontSize: 20,
  },
  buttonAdd: {
    marginTop: 5,
    marginLeft: -45,
  },
});
export default TodoList;
