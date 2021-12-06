import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import StartScreen from './Layout/StartScreen';
import {startClock} from 'react-native-reanimated';
import {Contents, Footer} from './components/Layout';
import MainScreen from './Layout/MainScreen';
import Form from './components/Login/Form';
import SignUpScreen from './screens/LoginScreen/SignUpScreen';

function HomeScreen({navigation: {navigate}}) {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '65%',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'skyblue',
        }}>
        <Contents></Contents>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Form></Form>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button
            color="blue"
            title="SignUp"
            onPress={() => navigate('SignUp')}
          />
          <Button color="blue" title="Login" onPress={() => navigate('Main')} />
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
