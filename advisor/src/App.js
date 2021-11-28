// import React from 'react';
// import {View, Text} from 'react-native';
// import Counter from './components/Counter';
// import EventButton from './components/EventButton';
// import EventInput from './components/EventInput';
// import MyButton from './components/MyButton';
// import {Header, Contents, Footer} from './components/Layout';
// const App = () => {
//   const name = 'kisung';
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       {/* <Text style={{fontSize: 30, marginBottom: 40}}>Props babo</Text>
//       <MyButton title="Button" />
//       <MyButton title="Button">Children Button</MyButton> */}
//       {/* <MyButton /> */}
//       {/* <EventButton />
//       <EventInput /> */}
//       <Header />
//       <Contents>
//         <EventButton />
//       </Contents>
//       <Footer />
//     </View>
//   );
// };
// export default App;
// import * as React from 'react';
// import {Button, View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useNavigation} from '@react-navigation/native';
// import StartScreen from './Layout/StartScreen';
// import MainScreen from './Layout/MainScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Start">
//         <Stack.Screen name="Start" component={StartScreen} />
//         <Stack.Screen name="Main" component={MainScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import StartScreen from './Layout/StartScreen';
import {startClock} from 'react-native-reanimated';
import {Contents} from './components/Layout';
import MainScreen from './Layout/MainScreen';

// function MyBackButton() {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Back"
//       onPress={() => {
//         navigation.goBack();
//       }}
//     />
//   );
// }

function HomeScreen({navigation: {navigate}}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Contents></Contents>
      <Button
        color="blue"
        title="Go to Main"
        onPress={() => navigate('Profile')}
      />
    </View>
  );
}

// function ProfileScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>go</Text>
//       <MyBackButton />
//       <StartScreen />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Profile"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
