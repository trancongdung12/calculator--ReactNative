import React, { Component,useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const App = () => {
  const [count, setCount] = useState(0);
  const changeValue = (x)=>{
    
    let output = count;
    
    if(output ==0){
      output = "";
      if( x == "/")
      {
        output = 0;
      }
      else{
        output = output + x; 
      }
      
    }else{
      
        if(count.length>1){
          let endChar = output.slice(-1);  
          if(endChar == "+" || endChar == "-" || endChar == "/"){
            if(x == "+" || x == "-" || x == "/"){
              alert("Biểu thức sai");
              removeValue();
            }else{
              output = output + x;  
            }
          }else{
          output = output + x;  
          }
        }else{
          output = output + x;  
        }   
    }
      setCount(output);
    
  }
  const removeValue = ()=>{
     setCount(0);
  }
  const callResult = () => {
    if(count.length>1){
        let endChar = count.slice(-1);  
      if(endChar == "+" || endChar == "-" || endChar == "/"){
        alert("Biểu thức sai");
        removeValue();
      }else{
        setCount(eval(count));
      }
    }
    
   
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
        <TouchableOpacity 
        style={styles.divideButton}
        onPress={()=>changeValue('/')}
        >
          <Text style={styles.divideText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberView}>
          <TouchableOpacity 
          style={styles.numberButton}
          
          onPress={()=>changeValue('9')}
          >
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}
          onPress={()=>changeValue('8')}
          >
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('7')}
          >
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.divideButton}
          onPress={()=>changeValue('-')}
          >
            <Text style={styles.divideText}>-</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.numberView}>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('6')}
          >
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('5')}
          >
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('4')}
          >
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.divideButton}
          onPress={()=>changeValue('+')}
          >
            <Text style={styles.divideText}>+</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.numberView}>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('3')}
          >
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('2')}
          >
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.numberButton}
          onPress={()=>changeValue('1')}
          >
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.divideButton}
          onPress = { ()=>callResult()}
          >
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
  },
  wrongResult:{
    fontSize:40,
    color:"red"
    ,marginTop:80,
    marginRight:50
  }
 });
export default App;

