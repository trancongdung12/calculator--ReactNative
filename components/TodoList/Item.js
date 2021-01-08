import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import checkImg from '../../assets/check.png';
import remove from '../../assets/remove.png';
import circumference from '../../assets/circumference.png';
const Item = (props) => (
  <View style={styles.layoutItem}>
    <TouchableOpacity onPress={props.changeCheck} style={styles.imageItemCheck}>
      <Image source={props.isSelect ? checkImg : circumference} />
    </TouchableOpacity>
    <Text style={props.isSelect ? styles.strikeText : styles.textItem}>{props.title}</Text>
    <TouchableOpacity onPress={props.removeItem} style={styles.imageItemRemove}>
      <Image source={remove} />
    </TouchableOpacity>
  </View>
);
export default Item;
const styles = StyleSheet.create({
  layoutItem: {
    flexDirection: 'row',
    marginTop: 15,
    width: 350,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 5,
    borderRadius: 10,
  },
  textItem: {
    marginLeft: 10,
    fontSize: 20,
  },
  imageItemRemove: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  strikeText: {
    marginLeft: 10,
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
