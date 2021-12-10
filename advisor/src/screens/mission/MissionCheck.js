import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView, FlatList, Alert} from 'react-native';
import {db} from '../../../firebase-config';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import MissionElem from '../../components/mission/missionElem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SectionList} from 'react-native';
import {useContext} from 'react';
import {WContext} from '../../Context/weightContext';
import MissionCheckButton from '../../components/MissionCheckButton';
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const MissionCheckScreen = ({navigation: {goBack}}) => {
  const [totalWeight, setTotalWeight] = useState(0);
  var test = 0;
  // const getData = async () => {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());

  //   console.log(cityList);
  // };
  const [missionList, setMissionList] = useState([]);
  const value = useContext(WContext);
  const getData = async () => {
    const missionCol = collection(db, 'mission');
    const missionSnapshot = await getDocs(missionCol);
    const list = missionSnapshot.docs.map(doc => doc.data());
    list.map(x => {
      test += x.weight;
      setTotalWeight(test);
    });
    setMissionList(list);
  };
  useEffect(() => {
    getData();
    // // console.log(missionList[0]);
    // missionList.map(x => {
    //   test += Number(x.weight);
    //   console.log(test, '+', x.weight);
    // });
    // setTotalWeight(test);
    // console.log(totalWeight, '전체가 이게 맞아?');
  }, []);
  const checkRateWeight = () => {
    const rate = Math.round((value.result / totalWeight) * 100);
    console.log(rate, ' 이거 아닌것 같아!!');
    if (rate > 90) {
      //아주우수
      return 3; //금메달
    } else if (rate <= 90 && rate > 70) {
      //준수
      return 2; //은메달
      은메달;
    } else if (rate <= 70 && rate >= 50) {
      //성의는 봐줌.
      return 1; //동메달
    } else {
      return 0; //실패
    }
  };
  const submitWeight = () => {
    Alert.alert('정말 모든 미션들을 수행하신 것인가요???', '', [
      {
        text: 'More...',
        onPress: () => console.log('좀더 파이팅!'),
        style: 'cancel',
      },
      {
        text: 'Finish!',
        onPress: () => {
          value.result = value.weight;
          value.medal = checkRateWeight();
          console.log(value.medal, '-.-');
          console.log(value.weight, '!!');
          console.log(value.result, '>.<');
          goBack();
          value.weight = 0;
        },
      },
    ]);
  };
  console.log(totalWeight);
  return (
    <View>
      <View>
        <SafeAreaView>
          <Button
            onPress={() => {
              submitWeight();
            }}
            title="미션완료"
          />
          <FlatList
            ListFooterComponent={<View style={{height: 100}}></View>}
            data={missionList}
            renderItem={({item}) => (
              <MissionElem
                type={item.missionType}
                text={item.mission_content}
                weight={item.weight}
                endTime={item.end_time}
              />
            )}></FlatList>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MissionCheckScreen;
