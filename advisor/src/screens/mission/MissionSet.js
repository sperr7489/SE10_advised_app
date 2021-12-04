import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MissionCheckButton from '../../components/MissionCheckButton';
import MissionScreen from '../MissionScreen';
import MissionSetButton from '../../components/MissionSetButton';
import TimePicker from '../../components/picker/TimePicker';
import MissionInPut from '../../components/MissionInput';
import Missionweight from '../../components/MissionWeight';
const MissionSetScreen = () => {
  // 이 컴포넌트에서 timepicker 컴포넌트로부터 받아온 값을 밑의 값에다가 입력해주도록 한다.
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [missionDetail, setMissionDetail] = useState('');
  const [missionWeight, setMissionWeight] = useState('0');
  console.log(missionDetail);
  console.log(missionWeight);
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
        <MissionSetButton name="확인" screenName="Mission" />
        <MissionSetButton name="취소" screenName="Mission" />
      </View>
    </View>
  );
};
// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="미션 설정" component={MissionScreen} />
//       <Stack.Screen name="Mission" component={MissionSetScreen} />
//       {/* <Stack.Screen name="Notifications" component={NotificationsScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} /> */}
//     </Stack.Navigator>
//   );
// }
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
