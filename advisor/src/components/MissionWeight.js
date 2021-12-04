import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import Counter from 'react-native-counters';

const Missionweight = props => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
    // if (count > 9) {
    //   alert('10이상의 가중치는 설정할 수 없습니다. ');
    //   setCount(prevCount => prevCount - 1);
    // }

    console.log(count + '이거 맞아?');
    props.setWeight(count + 1);
  };
  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
    props.setWeight(count - 1);
  };
  return (
    <View
      style={{
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>미션에 부합하는 가중치를 적절히 입력해주세요</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={{marginLeft: 50, flex: 1, fontSize: 30, marginBottom: 10}}>
          {count}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Button title="+1" onPress={onIncrease}></Button>
          <Button title="-1" onPress={onDecrease}></Button>
        </View>
      </View>
    </View>
  );
};

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <Text style={{fontSize: 24, margin: 10}}>count:{count}</Text>
//       <
//     </>
//   );
// };

export default Missionweight;
