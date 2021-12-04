import React from 'react';
import {View, Text} from 'react-native';

const ChatScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#ff2f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        이것은 chat에 대한 것
      </Text>
    </View>
  );
};
export default ChatScreen;
