import React from 'react';
import {View, Text} from 'react-native';
import {ceil} from 'react-native-reanimated';

const ShopScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        이것은 shop에 대한 것
      </Text>
    </View>
  );
};
export default ShopScreen;
