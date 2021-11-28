import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Tabs from '../navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';
const MainScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  );
};

export default MainScreen;
