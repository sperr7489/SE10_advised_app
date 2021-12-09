import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const MissionElem = props => {
  //props를 통해서 다음과 같은 변수들에 데이터값들을 전달해준다.
  const [missionType, setMissionType] = useState('type');
  const [missionText, setMissionText] = useState('열심히 좀 허자.');
  const [missionWeight, setMissionWeight] = useState(0);
  const [endTime, setEndTime] = useState('2021/12/09 16:00 오후');
  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    setMissionType(props.type);
    setMissionText(props.text);
    setMissionWeight(props.weight);
    setEndTime(props.endTime);
  }, []);

  return (
    <View style={{display: 'flex'}}>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              marginBottom: 10,
              marginLeft: 10,
            }}>
            {missionType}
          </Text>
          <Text style={{marginLeft: 10, marginBottom: 5}}>{missionText}</Text>
          <Text style={{marginLeft: 10}}>{endTime} 까지</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: '500'}}>{missionWeight}</Text>
          <CheckBox
            style={{marginRight: 10, marginLeft: 20}}
            disabled={false}
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 80,

    flexDirection: 'row', // row
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    margin: 10,
    borderWidth: 0.3,
  },
  text: {
    color: 'white',
  },
  checkbox: {
    alignSelf: 'center',
  },
});
export default MissionElem;
