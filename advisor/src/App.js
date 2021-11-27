import React from 'react';
import {View, Text} from 'react-native';
import Counter from './components/Counter';
import MyButton from './components/MyButton';

const App = () => {
  const name = 'kisung';
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f22f',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text style={{fontSize: 30, marginBottom: 40}}>Props babo</Text>
      <MyButton title="Button" />
      <MyButton title="Button">Children Button</MyButton> */}
      {/* <MyButton /> */}
      <Counter />
    </View>
  );
};
export default App;
