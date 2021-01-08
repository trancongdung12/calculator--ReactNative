import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import closeImg from '../assets/close.png';
import visibility from '../assets/visibility.png';
import witness from '../assets/witness.png';
import ItemInput from '../components/SignUp/ItemInput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const showMessage = () => {
  //   // eslint-disable-next-line no-alert
  //   alert(name);
  // };
  // const onChange = (text) => {
  //   setName(text);
  // };
  return (   
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Image style={styles.closeImage} source={closeImg} />
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <ItemInput title="Tên tài khoản*" />
      <ItemInput title="Mật khẩu*" imageClose={visibility} imageOpen={witness} isPass={true} />
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton} >
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}>
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
    marginBottom: 0,
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
    marginTop: 20,
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
export default Login;
