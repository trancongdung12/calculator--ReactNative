import React, { Component,useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'

const App = () => {
  const [count, setCount] = useState(1);
  const changeValue = ()=>{
    setCount(9);
  }
  const removeValue = ()=>{
     setCount(0);
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentResult}>
          <Text style={styles.textResult}>{count}</Text>
      </View>
      <View style={styles.clearView}>
        <TouchableOpacity 
        style={styles.clearButton}
        onPress={removeValue}
        >
          <Text style={styles.clearText}>
            clear
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton}>
          <Text style={styles.divideText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberView}>
          <TouchableOpacity 
          style={styles.numberButton}
          
          onPress={changeValue}
          >
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.divideButton}>
            <Text style={styles.divideText}>-</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.numberView}>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.divideButton}>
            <Text style={styles.divideText}>+</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.numberView}>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.divideButton}>
            <Text style={styles.divideText}>=</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};
 const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  contentResult:{
    height:233,
    backgroundColor:"#433336",
    borderColor:"#920F29",
    borderWidth:2
  },
  textResult:{
    marginTop:60,
    color:"white",
    fontSize:70,
    alignSelf:"flex-end",
    marginRight:10
  },
  clearView:{
    borderColor:"#920F29",
    borderWidth:1,
    flexDirection:"row"
  },
  clearButton:{
    height:125,
    borderColor:"#920F29",
    borderWidth:1,
    backgroundColor:"white",
    width:"75%",
    
  },
  clearText:{
    fontSize:50,
    alignSelf:"center",
    marginTop:30,
    color:"#515251"
  },
  divideButton:{
    height:125,
    width:"25%",
    backgroundColor:"#F2274F",
    borderColor:"#920F29",
    borderWidth:2,
  },
  divideText:{
    marginTop:13,
    color:"white",
    fontSize:70,
    alignSelf:"center"
  },
  numberView:{
    flexDirection:"row"
  },
  numberButton:{
    height:125,
    width:"25%",
    backgroundColor:"white",
    borderColor:"#920F29",
    borderWidth:2,
  },
  numberText:{
    marginTop:13,
    color:"black",
    fontSize:70,
    alignSelf:"center"
  }
 });
export default App;

