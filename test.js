/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const Test = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  //const [id, setId] = useState(1);
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   console.log(id);
  //   fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // }, [id]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/trancongdung12/demo-json/photos')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  const onAddItem = () => {
    fetch('https://my-json-server.typicode.com/trancongdung12/demo-json/photos', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        image: 'bar',
        id: 11,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => console.log(response.json()));
    
    //.then((json) => console.log(json));
  };
  return (
    <ScrollView style={{ padding: 10 }}>
      {/* <TextInput placeholder="enter id" onChangeText={(value) => setId(value)} />
      <Text>{posts.title}</Text> */}
      <View>
        <TextInput onChangeText={(value) => setTitle(value)} />
        <TouchableOpacity
          onPress={() => onAddItem()}
          style={{ backgroundColor: 'green', padding: 10, marginBottom: 10, alignSelf: 'baseline' }}
        >
          <Text>Add </Text>
        </TouchableOpacity>
      </View>
      {posts.map((post) => (
        <View>
          <Text key={posts.id}>{post.title}</Text>
          <Image style={{ height: 50, width: 50 }} source={{ uri: post.image }} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Test;
