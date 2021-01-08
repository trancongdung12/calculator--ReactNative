import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

const NumberItem = (props) => {
    return (
        <TouchableOpacity
          onPress={() => props.changeValue(props.number)}
          style={props.isMath ? styles.divideButton : styles.numberButton}
          >
          <Text  style={props.isMath ? styles.divideText : styles.numberText}>{props.number}</Text>
        </TouchableOpacity>
      );
    };
const styles = StyleSheet.create({
  numberButton: {
    height: 125,
    width: '25%',
    backgroundColor: 'white',
    borderColor: '#920F29',
    borderWidth: 2,
  },
  numberText: {
    marginTop: 13,
    color: 'black',
    fontSize: 70,
    alignSelf: 'center',
  },
  divideButton: {
    height: 125,
    width: '25%',
    backgroundColor: '#F2274F',
    borderColor: '#920F29',
    borderWidth: 2,
  },
  divideText: {
    marginTop: 13,
    color: 'white',
    fontSize: 70,
    alignSelf: 'center',
  }
})
export default NumberItem;
