import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
const EventItem = (props) => {
  return (
    <View style={styles.layoutContent}>
      <TouchableWithoutFeedback onPress={() => props.pushNavigation(props.data.id)}>
        <Image
          style={styles.imageContent}
          source={{
            uri: props.data.imageUrl,
          }}
        />
      </TouchableWithoutFeedback>

      <View style={styles.layoutText}>
        <Text style={styles.textDate}>{props.data.date.en}</Text>
        <Text style={styles.textTitle}>{props.data.title}</Text>
        <Text style={styles.textAddress}>{props.data.address.en}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  layoutContent: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  imageContent: {
    height: 180,
    width: 320,
    borderRadius: 10,
  },
  layoutText: {
    marginTop: 10,
  },
  textDate: {
    fontFamily: 'sans-serif-medium',
    color: 'red',
    fontSize: 13,
  },
  textTitle: {
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
  },
  textAddress: {
    fontFamily: 'sans-serif-medium',
    fontSize: 13,
    color: 'gray',
  },
});
export default EventItem;
