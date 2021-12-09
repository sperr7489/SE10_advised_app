import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import MissionScreen from '../screens/MissionScreen';
import {StyleSheet} from 'react-native';
const MissionButton = ({screenName}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(screenName, {name: {screenName}})}>
      <Text style={styles.text}>{screenName}</Text>
    </Pressable>
  );
};

export default MissionButton;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
