import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {color} from 'react-native-reanimated';
import MissionScreen from '../screens/MissionScreen';
import {StyleSheet} from 'react-native';
const MissionSetCancelButton = ({name, screenName}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        //함수이다.
        navigation.navigate(screenName);
      }}>
      {/* <Text style={styles.text}>{screenName}</Text> */}
      <Text>{name}</Text>
    </Pressable>
  );
};

export default MissionSetCancelButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',
    right: '10%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
