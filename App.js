// In index.js of a new project
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import TodoList from './src/TodoList';
import TodoRedux from './src/TodoRedux';
import Calculator from './src/Calculator';
import SignUp from './src/SignUp';
import Enouvo from './src/EnouvoEvent';
// Home screen declaration

const ButtonNavigation = (props) => {
  return (
    <View style={styles.button}>
      <Button
        title={props.title}
        color={props.color}
        onPress={() => props.RedirectNavigation(props.nameNavigation)}
      />
    </View>
  );
};

const HomeScreen = (props) => {
  const onRedirectNavigation = (nameNavigation) => {
    Navigation.push(props.componentId, {
      component: {
        name: nameNavigation,
      },
    });
  };
  return (
    <View style={styles.root}>
      <ButtonNavigation
        title="Push ToList Screen"
        color="#33a5c6"
        nameNavigation="ToList"
        RedirectNavigation={onRedirectNavigation}
      />
      <ButtonNavigation
        title="Push ToList Redux Screen"
        color="green"
        nameNavigation="ToListRedux"
        RedirectNavigation={onRedirectNavigation}
      />
      <ButtonNavigation
        title="Push Calculator Screen"
        color="#df7c3f"
        nameNavigation="Calculator"
        RedirectNavigation={onRedirectNavigation}
      />
      <ButtonNavigation
        title="Push SignUp Screen"
        color="#b726b6"
        nameNavigation="SignUp"
        RedirectNavigation={onRedirectNavigation}
      />
      <ButtonNavigation
        title="Push Enouvo Event Screen"
        color="#f2d43d"
        nameNavigation="Enouvo"
        RedirectNavigation={onRedirectNavigation}
      />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#f56674',
    },
  },
};
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('ToList', () => TodoList);
Navigation.registerComponent('ToListRedux', () => TodoRedux);
Navigation.registerComponent('Calculator', () => Calculator);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Enouvo', () => Enouvo);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  button: {
    marginBottom: 20,
  },
});
