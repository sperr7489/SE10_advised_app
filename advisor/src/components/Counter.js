// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import MyButton from './MyButton';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={{alignItems: 'center'}}>
//       <Text style={{fontSize: 30, margin: 10}}>{count}</Text>
//       <MyButton title="+1" onPress={() => setCount(count + 1)} />
//       <MyButton title="-1" onPress={() => setCount(count - 1)} />
//     </View>
//   );
// };
// export default Counter;
import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
  marigin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <View style={{display: 'flex'}}>
        <StyledText>미션에 대한 가중치를 입력해주세요</StyledText>
        <StyledText>가중치: {count}</StyledText>
      </View>
      <View>
        <Button
          title="+"
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <Button
          title="-"
          onPress={() => {
            setCount(count - 1);
            setCount(count - 1);
          }}></Button>
      </View>
    </View>
  );
};
export default Counter;
