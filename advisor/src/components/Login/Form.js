import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  border: 1px solid #757575;
  padding: 10px;
  width: 300px;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;
const Form = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  useEffect(() => {
    console.log('Form Component Mount');
    return () => console.log(`unMount time\n`);
  }, []);
  return (
    <>
      {/* <StyledText>Name :{name}</StyledText>
      <StyledText>Email : {email}</StyledText> */}
      <StyledTextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"></StyledTextInput>
      <StyledTextInput
        secureTextEntry={true}
        value={pwd}
        onChangeText={text => setPwd(text)}
        placeholder="password"></StyledTextInput>
    </>
  );
};
export default Form;
