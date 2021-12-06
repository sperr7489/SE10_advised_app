import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
import {exp} from 'react-native-reanimated';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
`;
const SignUp = () => {
  return (
    <Container>
      <Text style={{fontSize: 30}}>Signup screen</Text>
    </Container>
  );
};
export default SignUp;
