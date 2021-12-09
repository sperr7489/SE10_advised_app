import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView, FlatList} from 'react-native';
import {db} from '../../../firebase-config';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import MissionElem from '../../components/mission/missionElem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SectionList} from 'react-native';
import {Value} from 'react-native-reanimated';

const getData = async () => {
  const missionCol = collection(db, 'mission');
  const missionSnapshot = await getDocs(missionCol);
  const List = missionSnapshot.docs.map(doc => doc.data());
  return List;
};

const MissionCheckScreen = () => {
  // const getData = async () => {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());

  //   console.log(cityList);
  // };
  const [missionList, setMissionList] = useState([]);

  const getData = async () => {
    const missionCol = collection(db, 'mission');
    const missionSnapshot = await getDocs(missionCol);
    const list = missionSnapshot.docs.map(doc => doc.data());
    setMissionList(list);
  };

  useEffect(() => {
    getData();
    // console.log(missionList[0]);
    missionList.map(x => {
      console.log(Object.keys(x), '이것이 key값들이다');
      console.log(Object.values(x));
    });
  }, []);

  const setData = async () => {
    const city = 'Gunpo';
    // const citiesCol = collection(db, 'cities');
    // const citySnapshot = await getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    // console.log(cityList);
    // Add a new document in collection "cities"
    await setDoc(doc(db, 'cities', 'good'), {
      start_time: '2021/12/08 17:16',
      end_time: '2021/12/08 20:16',
      mission_content: '이것은 정말 재밌는 것 같아.',
      weight: 6,
    });
    // const docRef = await addDoc(collection(db, 'cities'), {
    //   city_name: 'Tokyo',
    // });
    // console.log('Document written with ID: ', docRef.id);
  };
  return (
    <View>
      <SafeAreaView>
        {/* <FlatList
          data={missionList}
          renderItem={MissionElem}
          keyExtractor={props => props.missionType}></FlatList> */}
        <MissionElem
          type="바보"
          text="굳"
          weight="4"
          endTime="난 몰라"></MissionElem>
      </SafeAreaView>
      <Text>이곳은 mission을 확인하는 곳</Text>
      <MissionElem />

      <Button title="getDB" onPress={getData}></Button>
      <Button title="setDB" onPress={setData}></Button>
    </View>
  );
};

export default MissionCheckScreen;
{
  /* {missionList.map((i, x) => {
        <MissionElem
          type={i.missionType}
          text={i.mission_content}
          weight={i.weight}
          endTime={i.end_time}></MissionElem>;
      })} */
}
