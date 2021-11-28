import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EventButton from './EventButton';

export const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export const Contents = props => {
  return (
    <View
      style={[
        styles.container,
        styles.contents,
        {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Text
        style={[
          styles.text,
          {color: 'red', fontSize: 50, letterSpacing: 20, marginBottom: 100},
        ]}>
        그거 맞아?
      </Text>
      <View style={{width: 200, marginBottom: 20}}>
        <EventButton title="시작하기" />
      </View>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  contents: {
    flex: 4,
    backgroundColor: '#ff2',
    height: 640,
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
