import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {View, Text, Pressable, Image, Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import fail from '../../assets/icons/fail.png';

import {WContext} from '../../Context/weightContext';

import firestore from '@react-native-firebase/firestore';

import {db} from '../../../firebase-config';
const MissionElem = props => {
  //props를 통해서 다음과 같은 변수들에 데이터값들을 전달해준다.
  const [missionType, setMissionType] = useState('type');
  const [missionText, setMissionText] = useState('열심히 좀 허자.');
  const [missionWeight, setMissionWeight] = useState(0);
  const [endTime, setEndTime] = useState('2021/12/09 16:00 오후');
  const [isSelected, setSelection] = useState(false);

  const value = useContext(WContext);

  const [checkToggle, setCheckToggle] = useState(false);
  const [failToggle, setFailToggle] = useState(false);

  useEffect(() => {
    setMissionType(props.type);
    setMissionText(props.text);
    setMissionWeight(props.weight);
    setEndTime(props.endTime);
  }, []);
  useEffect(() => {
    console.log(value.weight);
  }, []);

  useEffect(() => {
    return () => {
      setCheckToggle(checkToggle);
      console.log(checkToggle);
    };
  }, []);
  return (
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
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            marginBottom: 20,
            marginRight: 20,
          }}>
          {missionWeight}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <CheckBox
            style={{marginRight: 10, marginLeft: 20, marginBottom: 20}}
            disabled={checkToggle}
            value={isSelected}
            onValueChange={newValue => {
              setCheckToggle(checkToggle);
              if (newValue == true) {
                value.weight += missionWeight;
                setFailToggle(true);
              } else {
                setFailToggle(false);
              }
            }}
          />
          <Pressable
            disabled={failToggle}
            onPress={prev => {
              Alert.alert(
                '정말 포기하시겠습니까?',
                '당신의 의지는 도지인가요?',
                [
                  // 버튼 배열
                  {
                    text: 'continue', // 버튼 제목
                    onPress: () => console.log('아니라는데'), //onPress 이벤트시 콘솔창에 로그를 찍는다
                    style: 'cancel',
                  },
                  {
                    text: 'yes..',
                    onPress: () => {
                      setCheckToggle(true);
                      value.weight -= missionWeight;
                    },
                  },
                ],
              );
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 10,
                marginLeft: 20,
                marginBottom: 20,
              }}
              source={fail}></Image>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 90,
    flexDirection: 'row', // row
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    margin: 10,
    borderWidth: 0.3,
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    color: 'white',
  },
  checkbox: {
    alignSelf: 'center',
  },
});
export default MissionElem;
