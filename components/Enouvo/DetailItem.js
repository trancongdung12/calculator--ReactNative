/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import call from '../../assets/icon/call.png';
import facebook from '../../assets/icon/facebook.png';
import instagram from '../../assets/icon/instagram.png';
import nextButton from '../../assets/icon/next-button.png';
import placeholder from '../../assets/icon/placeholder.png';
import global from '../../assets/icon/global.png';
import close from '../../assets/icon/close.png';
import { swipeData } from '../../data/data';
import { Navigation } from 'react-native-navigation';

const InfoItem = ({ image, value }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.viewInfo}>
        <Image style={styles.imgInfo} source={image} />
      </View>
      <Text style={styles.itemInfo}>{value}</Text>
    </View>
  );
};
const SocialItem = ({ url, image, value }) => {
  return (
    <TouchableOpacity
      style={styles.socialItem}
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      <View style={styles.containImg}>
        <Image style={styles.iconSocial} source={image} />
      </View>
      <Text style={styles.textSocial}>{value}</Text>
    </TouchableOpacity>
  );
};
const DetailItem = (props) => {
  const onClose = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.viewClose}>
        <Image style={styles.closeImg} source={close} />
      </TouchableOpacity>
      <Image style={styles.imageHeader} source={{ uri: swipeData[props.id].imageUrl }} />
      <View style={styles.layoutInfo}>
        <Text style={styles.titleInfo}>{swipeData[props.id].title}</Text>
        <InfoItem image={placeholder} value={swipeData[props.id].address.en} />
        <InfoItem image={call} value={'( +84) 985582807'} />
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutImage}>
          <Text style={styles.titleImage}>IMAGE</Text>
          <ScrollView horizontal>
            <Image
              style={styles.itemImage}
              source={{
                uri:
                  'https://cdn.itviec.com/photos/10467/profile_slideshow/profile_slideshow-1625732.jpg?tuPDZKvfqVrCZRgEtPfBjjg3',
              }}
            />
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://enouvo.com/wp-content/uploads/2020/07/9.1.jpg',
              }}
            />
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://enouvo.com/wp-content/uploads/2020/04/YEP1.jpg',
              }}
            />
          </ScrollView>
          <View style={styles.layoutDesc}>
            <Text style={styles.titleDesc}>DESCRIPTION</Text>
            <Text style={styles.textDesc}>{swipeData[props.id].subtitle.en}</Text>
          </View>
          <View style={styles.layoutSocial}>
            <Text style={styles.titleSocial}>SOCIAL</Text>
            <View style={styles.containSocial}>
              <SocialItem url={'https://enouvo.com/'} image={global} value={'enouvo.com'} />
              <SocialItem
                url={'https://facebook.com/enouvo/'}
                image={facebook}
                value={'facebook.com/enouvo/'}
              />
              <SocialItem
                url={'https://instagram.com/enouvo.it.solutions/'}
                image={instagram}
                value={'instagram.com/enouvo.it.solutions/'}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.layoutBottom}
          onPress={() => {
            Linking.openURL('https://enouvo.com/');
          }}
        >
          <Text style={styles.textBottom}>Visit our website</Text>
          <View style={styles.viewIconBottom}>
            <Image style={styles.iconNext} source={nextButton} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default DetailItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewClose: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 2,
    borderRadius: 25,
    height: 30,
    width: 30,
    top: 10,
    left: 10,
  },
  closeImg: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 5,
    tintColor: 'black',
  },
  imageHeader: {
    height: 250,
    width: 400,
    opacity: 0.5,
  },
  layoutInfo: {
    marginTop: -70,
    marginLeft: 20,
  },
  titleInfo: {
    fontFamily: 'sans-serif-medium',
    color: 'white',
    fontSize: 20,
  },
  itemInfo: {
    fontFamily: 'sans-serif-medium',
    color: 'white',
    marginLeft: 5,
    marginTop: 5,
  },
  viewInfo: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 17,
    height: 17,
    borderRadius: 25,
    opacity: 0.9,
    marginTop: 5,
  },
  imgInfo: {
    height: 13,
    width: 13,
    marginTop: 3,
  },
  layoutContent: {
    padding: 15,
  },
  layoutImage: {
    marginTop: 10,
  },
  titleImage: {
    fontFamily: 'sans-serif-medium',

    marginBottom: 10,
  },
  itemImage: {
    height: 100,
    width: 130,
    marginRight: 15,
    borderRadius: 15,
  },
  layoutDesc: {
    marginTop: 20,
  },
  titleDesc: {
    fontFamily: 'sans-serif-medium',
    marginBottom: 10,
  },
  textDesc: {
    color: 'gray',
    fontSize: 14,
  },
  layoutSocial: {
    marginTop: 20,
  },
  titleSocial: {
    fontFamily: 'sans-serif-medium',
  },
  containSocial: {
    marginTop: 10,
  },
  socialItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  containImg: {
    height: 25,
    width: 25,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    marginRight: 5,
  },
  iconSocial: {
    height: 15,
    width: 15,
    marginRight: 10,
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 5,
  },
  iconNext: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  viewIconBottom: {
    backgroundColor: '#DF2329',
    borderRadius: 25,
    height: 30,
    width: 30,
  },
  layoutBottom: {
    backgroundColor: '#FD4C50',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textBottom: {
    color: 'white',
    fontSize: 18,
    marginLeft: 100,
    marginRight: 10,
  },
});
