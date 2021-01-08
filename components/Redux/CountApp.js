import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
const CountApp = (props) => {
  // const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: 'center', marginTop: 200 }}>
      <TouchableOpacity onPress={props.increaseCount}>
        <Text>Tăng</Text>
      </TouchableOpacity>
      <Text>{props.count}</Text>
      <TouchableOpacity onPress={props.decreaseCount}>
        <Text>Giảm</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapState(state) {
  return {
    count: state.count,
  };
}
function mapDispatch(dispatch) {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCount: () => dispatch({ type: 'DECREASE_COUNTER' }),
  };
}
export default connect(mapState, mapDispatch)(CountApp);
