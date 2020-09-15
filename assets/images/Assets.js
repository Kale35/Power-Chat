import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  ImageBackground,
  TextInput,
} from 'react-native';

import {Button} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';

export default class Assets extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <LinearGradient
          colors={['#19B2EA', 'white']}
          style={{height: '20%'}}></LinearGradient>
        <LinearGradient
          colors={['white', '#19B2EA']}
          style={{
            height: '20%',
            top: 395.47,
          }}></LinearGradient>

        <TextInput
          style={{
            justifyContent: 'center',
            alignItems: 'stretch',
            borderRightWidth: 2,
            borderLeftWidth: 2,
            borderBottomWidth: 2,
            borderTopWidth: 2,
            height: 50,
            width: '85%',
            alignSelf: 'center',
            borderColor: '#707070',
            textAlign: 'left',
          }}
          placeholder="Search Topics"></TextInput>
      </View>
    );
  }
}

const SearchTopics = () => {
  return (
    <TextInput
      style={{
        backgroundColor: 'white',
        width: 315,
        top: 2.5,
        left: 2.5,
        height: 59,
      }}>
      <Text style={{color: '#03688C', opacity: 0.5}}>Search Topics</Text>
    </TextInput>
  );
};

const Notification = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#03688C',
        width: 420,
        height: 149,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: 420,
          height: 143,
          top: 3,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            color: '#03688C',
            top: 45,
            right: 50,
          }}>
          You have a match!!!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MenuButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#03688C',
        width: 300,
        height: 120,
        zIndex: 1,
        alignSelf: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#03688C',
          width: 305,
          height: 125,
          opacity: 0.2,
          alignSelf: 'center',
          bottom: 1.5,
          zIndex: 1,
        }}></View>
      <View
        style={{
          backgroundColor: 'white',
          width: 295,
          height: 115,
          opacity: 1,
          alignSelf: 'center',
          bottom: 122,
          zIndex: 1,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            top: 37,
            color: '#03688C',
            zIndex: 0,
            right: 2,
          }}>
          I NEED ADVICE
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HeaderFooter = () => {
  return (
    <View>
      <LinearGradient
        colors={['#19B2EA', 'white']}
        style={{height: '27%'}}></LinearGradient>

      <LinearGradient
        colors={['white', '#19B2EA']}
        style={{
          height: '27%',
          top: 413,
        }}></LinearGradient>
    </View>
  );
};

const TopicButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#03688C',
          width: 120,
          height: 120,
          zIndex: 1,
          left: 100,
          alignSelf: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#03688C',
            width: 125,
            height: 125,
            opacity: 0.4,
            alignSelf: 'center',
            bottom: 1.5,
            zIndex: 1,
          }}></View>
        <View
          style={{
            backgroundColor: 'white',
            width: 115,
            height: 115,
            opacity: 1,
            alignSelf: 'center',
            bottom: 122,
            zIndex: 1,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 14,
              top: 43,
              color: '#03688C',
              zIndex: 0,
            }}>
            RELATIONSHIPS
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
