/* eslint-disable no-alert */
/* eslint-disable no-eval */
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import NumberItem from '../components/Calculator/NumberItem.js';
const App = () => {
  const [count, setCount] = useState(0);

  const changeValue = (x) => {
    let output = count;

    if (output === 0) {
      output = '';
      if (x === '/') {
        output = 0;
      } else {
        output = output + x;
      }
    } else {
      if (count.length > 1) {
        let endChar = output.slice(-1);
        if (endChar === '+' || endChar === '-' || endChar === '/') {
          if (x === '+' || x === '-' || x === '/') {
            alert('Biểu thức sai');
            removeValue();
          } else {
            output = output + x;
          }
        } else {
          output = output + x;
        }
      } else {
        output = output + x;
      }
    }
    setCount(output);
  };
  const removeValue = () => {
    setCount(0);
  };
  const callResult = () => {
    if (count.length > 1) {
      let endChar = count.slice(-1);
      if (endChar === '+' || endChar === '-' || endChar === '/') {
        alert('Biểu thức sai');
        removeValue();
      } else {
        setCount(eval(count));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentResult}>
        <Text
          style={[
            styles.textResult,
            count.length > 9 && styles.textResultMedium,
            count.length > 13 && styles.textResultSmall,
          ]}
        >
          {count}
        </Text>
      </View>
      <View style={styles.clearView}>
        <TouchableOpacity style={styles.clearButton} onPress={removeValue}>
          <Text style={styles.clearText}>clear</Text>
        </TouchableOpacity>
        <NumberItem number="/" changeValue={changeValue} isMath={true} />
      </View>
      <View style={styles.numberView}>
        <NumberItem number={9} changeValue={changeValue} />
        <NumberItem number={8} changeValue={changeValue} />
        <NumberItem number={7} changeValue={changeValue} />
        <NumberItem number="-" changeValue={changeValue} isMath={true} />
      </View>
      <View style={styles.numberView}>
        <NumberItem number={6} changeValue={changeValue} />
        <NumberItem number={5} changeValue={changeValue} />
        <NumberItem number={4} changeValue={changeValue} />
        <NumberItem number="+" changeValue={changeValue} isMath={true} />
      </View>
      <View style={styles.numberView}>
        <NumberItem number={3} changeValue={changeValue} />
        <NumberItem number={2} changeValue={changeValue} />
        <NumberItem number={1} changeValue={changeValue} />
        <NumberItem number="=" changeValue={callResult} isMath={true} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentResult: {
    height: 233,
    backgroundColor: '#433336',
    borderColor: '#920F29',
    borderWidth: 2,
  },
  textResult: {
    marginTop: 65,
    color: 'white',
    fontSize: 70,
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  textResultMedium: {
    fontSize: 50,
  },
  textResultSmall: {
    marginLeft: 10,
    fontSize: 30,
    marginTop: 10,
  },
  clearView: {
    borderColor: '#920F29',
    borderWidth: 1,
    flexDirection: 'row',
  },
  clearButton: {
    height: 125,
    borderColor: '#920F29',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '75%',
  },
  clearText: {
    fontSize: 50,
    alignSelf: 'center',
    marginTop: 30,
    color: '#515251',
  },
  numberView: {
    flexDirection: 'row',
  },
});
export default App;
