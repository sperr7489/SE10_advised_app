import React from 'react';
import {View, Text} from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import MyButton from './components/MyButton';
import {Header, Contents, Footer} from './components/Layout';
const App = () => {
  const name = 'kisung';
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
      <Header />
      <Contents>
        <EventButton />{' '}
      </Contents>
      <Footer />
    </View>
  );
};
export default App;
