import React from 'react';
import {View, Text} from 'react-native';
import EventButton from '../components/EventButton';
import {Header, Contents, Footer} from '../components/Layout';
const StartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text style={{fontSize: 30, marginBottom: 40}}>Props babo</Text>
      <MyButton title="Button" />
      <MyButton title="Button">Children Button</MyButton> */}
      {/* <MyButton /> */}
      {/* <EventButton />
      <EventInput /> */}
      {/* <Header /> */}
      <Contents />
      {/* <Footer /> */}
    </View>
  );
};
export default StartScreen;
