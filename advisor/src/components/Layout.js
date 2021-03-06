import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EventButton from './EventButton';

export const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>너똑바로 안하면 뒤져</Text>
    </View>
  );
};

export const Contents = () => {
  return (
    <View
      style={[
        styles.container,
        styles.contents,
        {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        },
      ]}>
      <Text
        style={[styles.text, {color: 'red', fontSize: 50, letterSpacing: 20}]}>
        그거 맞아?
      </Text>
      <EventButton />
      <View style={{width: 200, marginBottom: 20}}></View>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  header: {
    flex: 0.5,
    backgroundColor: '#fff',
  },
  contents: {
    height: 300,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
  },
});
