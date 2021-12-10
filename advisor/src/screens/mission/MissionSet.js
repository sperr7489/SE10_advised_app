import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MissionCheckButton from '../../components/MissionCheckButton';
import MissionScreen from '../MissionScreen';
import MissionSetButton from '../../components/MissionSetButton';
import TimePicker from '../../components/picker/TimePicker';
import MissionInPut from '../../components/MissionInput';
import Missionweight from '../../components/MissionWeight';
import {db} from '../../../firebase-config';
import {setDoc, doc} from 'firebase/firestore/lite';

global.count = 0;

const MissionSetScreen = ({route}) => {
  // 이 컴포넌트에서 timepicker 컴포넌트로부터 받아온 값을 밑의 값에다가 입력해주도록 한다.
  const missionType = route.name;
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [missionDetail, setMissionDetail] = useState('');
  const [missionWeight, setMissionWeight] = useState('0');
  // const [missionKey, setMissionKey] = useState(0);
  console.log(missionDetail);
  console.log(missionWeight);
  console.log(startTime);
  console.log(endTime);
  console.log(missionType);
  const setData = async () => {
    // const citiesCol = collection(db, 'cities');
    // const citySnapshot = await getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    // console.log(cityList);
    // Add a new document in collection "cities"
    await setDoc(doc(db, 'mission', `${global.count}`), {
      key: global.count,
      missionType: missionType,
      start_time: startTime,
      end_time: endTime,
      mission_content: missionDetail,
      weight: missionWeight,
      key: global.count,
    });
    global.count++;
  };

  {
    if (startTime > endTime && endTime > '0') {
      Alert.alert('종료시간을 다시 입력해주세요!', ' ');
    }
  }
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <View style={styles.timeSet}>
        <Text style={{fontSize: 20}}>미션 시간을 입력하세요</Text>
        <TimePicker
          setTime={prevText => setStartTime(prevText)}
          name="시작 시간을 입력하세요"
        />
        <Text>{startTime}</Text>
        <TimePicker
          setTime={prevText => setEndTime(prevText)}
          name="종료 시간을 입력하세요"
        />
        <Text>{endTime}</Text>
      </View>
      <View style={styles.contents}>
        <MissionInPut setText={prevText => setMissionDetail(prevText)} />
        <Text>{missionDetail}</Text>
      </View>
      <View style={styles.missionWeight}>
        <Missionweight setWeight={prevWeight => setMissionWeight(prevWeight)} />
      </View>
      <View style={styles.button}>
        <MissionSetButton press={setData} name="확인" screenName="Mission" />
        <MissionSetButton name="취소" screenName="Mission" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeSet: {
    marginTop: 20,
    backgroundColor: 'white',
    flex: 2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contents: {backgroundColor: 'blue', flex: 3, width: '90%'},
  missionWeight: {backgroundColor: 'yellow', flex: 1, width: '90%'},
  button: {
    backgroundColor: '#faaf',
    marginBottom: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});

export default MissionSetScreen;
