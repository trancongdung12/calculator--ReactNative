import React from 'react';
import { Navigation } from 'react-native-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { swipeData } from '../data/data';
import Detail from '../components/Enouvo/DetailItem';
import EventItem from '../components/Enouvo/EventItem';
const Event = (props) => {
  const onPushNavigation = (index) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Detail',
        passProps: {
          id: index,
        },
      },
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutHeader}>
        <Text style={styles.textHeader}>Upcoming Event</Text>
      </View>
      {swipeData.map((data, index) => (
        <EventItem data={data} key={index.toString()} pushNavigation={onPushNavigation} />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {},
  layoutHeader: {
    paddingVertical: 15,
    alignSelf: 'center',
  },
  textHeader: {
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
  },
});
export default Event;
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Event',
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
Navigation.registerComponent('Event', () => Event);
Navigation.registerComponent('Detail', () => Detail);
