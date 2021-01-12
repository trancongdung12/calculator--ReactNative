import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Books from '../components/ShoppingCart/Books';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShoppingCartIcon from '../components/ShoppingCart/ShoppingCartIcon';
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
const ShoppingCart = (props) => {
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
        title="Push Book Screen"
        color="#33a5c6"
        nameNavigation="Book"
        RedirectNavigation={onRedirectNavigation}
      />
    </View>
  );
};

export default ShoppingCart;
// ShoppingCart.options = {
//   topBar: {
//     title: {
//       text: 'Home',
//       color: 'white',
//     },
//     background: {
//       color: '#f56674',
//     },
//     rightButtons: [
//       {
//         id: 'SAVE_BUTTON',
//         text: 'Save',
//         fontFamily: 'helvetica',
//       },
//     ],
//   },
// };
Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
  if (buttonId === 'SAVE_BUTTON') {
    alert('good');
  }
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                    color: 'white',
                  },
                  background: {
                    color: '#f56674',
                  },
                  rightButtons: [
                    {
                      // icon: require('../assets/add.png'),
                      //id: 'SAVE_BUTTON',
                      name: 'ShoppingCartIcon',
                      //text: 'Save',
                      //fontFamily: 'helvetica',
                    },
                  ],
                },
              },
            },
          },
        ],

        //   options: {
        //     animations: {
        //       push: {
        //       content: {
        //         translationX: {
        //           from: require('react-native').Dimensions.get('window').width,
        //           to: 0,
        //           duration: 300,
        //         },
        //       },
        //     },
        //   },
        // },
      },
    },
  });
});

Navigation.registerComponent('ShoppingCartIcon', () => ShoppingCartIcon);
Navigation.registerComponent('Home', () => ShoppingCart);
Navigation.registerComponent('Book', () => Books);

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
