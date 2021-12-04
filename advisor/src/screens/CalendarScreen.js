import React from 'react';
import {View, Text} from 'react-native';

const CalenderScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#0f22',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        이것은 calendar에 대한 것
      </Text>
    </View>
  );
};
export default CalenderScreen;
