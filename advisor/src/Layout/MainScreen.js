import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Tabs from '../navigation/Tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
const MainScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer
        theme={{
          colors: {
            ...DefaultTheme.colors,
            background: 'white',
          },
        }}
        independent={true}>
        <Tabs />
      </NavigationContainer>
    </View>
  );
};

export default MainScreen;
