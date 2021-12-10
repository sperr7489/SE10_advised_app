import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './Layout/MainScreen';
import SignUpScreen from './screens/LoginScreen/SignUpScreen';
import Input from './components/Login/LoginInput';
import {useState, useRef, useEffect} from 'react';
import {validateEmail, removeWhitespace} from './utils/common';
import styled from 'styled-components';
import Button from './components/Login/LoginButton';
import {Alert, View} from 'react-native';
import {authentication} from '../firebase-config';
import {db} from '../firebase-config';
import {signInWithEmailAndPassword} from '@firebase/auth';
import {useNavigation} from '@react-navigation/core';
import {NavigationEvents} from 'react-navigation';
import {Contents, Footer} from './components/Layout';
import WeightContext from './Context/weightContext';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
`;
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({theme}) => theme.errorText};
`;

function HomeScreen({navigation: {navigate}}) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email.',
    );
  };

  const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
  };
  const _handleLoginButtonPress = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        setIsSignedIn(true);
        Alert.alert('login되었음!');
        navigation.navigate('Login');
      })
      .catch(re => {
        console.log(re);
        Alert.alert('가입 안되어있음!!');
      });
  };
  return (
    <Container>
      <View>
        <Contents></Contents>
      </View>
      <Input
        label="Email"
        value={email}
        onChangeText={_handleEmailChange}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="Email"
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        onChangeText={_handlePasswordChange}
        onSubmitEditing={() => {}}
        placeholder="Password"
        returnKeyType="done"
        isPassword
        onSubmitEditing={_handleLoginButtonPress}
      />
      <ErrorText>{errorMessage}</ErrorText>
      <Button
        title="Login"
        // onPress={() => navigate('Login')}
        onPress={_handleLoginButtonPress}
        disabled={disabled}
      />
      <Button
        title="Sign up with email"
        onPress={() => navigate('SignUp')}
        isFilled={false}
      />
      {/* <Button
            color="blue"
            title="SignUp"
            onPress={() => navigate('SignUp')}
          /> */}
      {/* <Button color="blue" title="Login" onPress={() => navigate('Login')} /> */}
    </Container>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <WeightContext>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Login"
            component={MainScreen}
            // options={{headerShown: false}}
          />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeightContext>
  );
}

export default App;
