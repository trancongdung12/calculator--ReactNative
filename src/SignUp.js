/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import closeImg from '../assets/close.png';
import visibility from '../assets/visibility.png';
import witness from '../assets/witness.png';
import ItemInput from '../components/SignUp/ItemInput';
import { Navigation } from 'react-native-navigation';
import Login from './Login';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');

  const showMessage = () => {
    // eslint-disable-next-line no-alert
    alert(name);
  };
  const onChange = (text) => {
    setName(text);
  };
  const onClose = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <TouchableOpacity onPress={onClose}>
          <Image style={styles.closeImage} source={closeImg} />
        </TouchableOpacity>
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <ItemInput title="Tên người dùng*" value={name} onChange={onChange} />
      <ItemInput title="Email*" />
      <ItemInput title="Số điện thoại*" />
      <ItemInput title="Tên tài khoản*" />
      <ItemInput title="Mật khẩu*" imageClose={visibility} imageOpen={witness} isPass={true} />
      <ItemInput
        title="Xác nhân mật khẩu*"
        imageClose={visibility}
        imageOpen={witness}
        isPass={true}
      />
      <View style={styles.layoutButton}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Login',
              },
            })
          }
        >
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => showMessage()}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với
        <Text style={{ color: '#25969E' }}>điều khoản quy định</Text> của chúng tôi
      </Text>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  layoutTitle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 25,
    marginLeft: '32%',
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signUpButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 15,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SignUp',
            },
          },
        ],
      },
    },
  });
});
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Login', () => Login);
