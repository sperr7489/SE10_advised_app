// import React from 'react';
// import {View, Text} from 'react-native';
// import MissionButton from '../components/MissionButton';
// import {NavigationContainer} from '@react-navigation/native';

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import MissionButton from '../components/MissionButton';
import MissionSetScreen from './mission/MissionSet';
import MissionCheckScreen from './mission/MissionCheck';
import {Contents, Footer, Header} from '../components/Layout';
import MissionCheckButton from '../components/MissionCheckButton';
import {color} from 'react-native-reanimated';
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderStartColor: 'black',
        borderBottomColor: 'black',
        margin: 10,
      }}>
      <MissionButton screenName="학업" />
      <MissionButton screenName="기상" />
      <MissionButton screenName="운동" />
      <MissionButton screenName="업무" />
      <MissionCheckButton screenName="미션 확인" />
    </View>
  );
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mission" component={HomeScreen} />
      <Stack.Screen name="학업" component={MissionSetScreen} />
      <Stack.Screen name="기상" component={MissionSetScreen} />
      <Stack.Screen name="운동" component={MissionSetScreen} />
      <Stack.Screen name="업무" component={MissionSetScreen} />
      <Stack.Screen name="미션 확인" component={MissionCheckScreen} />
      {/* <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
}

export default function MissionScreen() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'white',
      }}>
      <View style={{flex: 8}}>
        <NavigationContainer
          theme={{
            colors: {
              ...DefaultTheme.colors,
              background: 'white',
            },
          }}
          independent={true}>
          <MyStack />
        </NavigationContainer>
      </View>
      <Footer></Footer>
    </View>
  );
}
