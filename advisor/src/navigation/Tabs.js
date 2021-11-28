import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MissionScreen from '../screens/MissionScreen';
import ShopScreen from '../screens/ShopScreen';
import ChatScreen from '../screens/ChatScreen';
import CalenderScreen from '../screens/CalendarScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      activeColor="#f0edf6"
      inactiveColor="#3e2465">
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/chat.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/calendar.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Calender
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Mission"
        component={MissionScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/goal.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Mission
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/shop.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Shop
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
