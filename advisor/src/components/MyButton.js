import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';
// const MyButton = props => {
//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: '#3498db',
//         padding: 16,
//         margin: 10,
//         borderRadius: 8,
//       }}
//       onPress={() => props.onPress()}>
//       <Text style={{fontSize: 24, color: 'white'}}>
//         {props.children || props.title}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// MyButton.defaultProps = {
//   title: 'kichang',
// };
const Container = styled.TouchableOpacity`
  background-color: #3498db;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  padding: 5px 10px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #fffff;
`;
const MyButton = props => {
  return (
    //  props를 ({title, onPress})이런 식으로 쓰는 것은 구조분해 할당을 하는 것이다.
    <Container onPress={props.onPress}>
      <Title>{props.title}</Title>
    </Container>
  );
};
export default MyButton;
