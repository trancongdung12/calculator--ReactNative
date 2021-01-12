import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Login from './Login';
import store from '../components/SignUp/store';
const App = () => 
{
  return(
    <Provider store={store}>
        <Login/>
    </Provider>
    
);
}

export default App;

