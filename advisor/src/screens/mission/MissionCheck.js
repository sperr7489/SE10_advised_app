import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import {db} from '../../../firebase-config';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import MissionElem from '../../components/mission/missionElem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SectionList} from 'react-native';
import MissionCheckButton from '../../components/MissionCheckButton';
import WeightContext from '../../Context/weightContext';
import ResultContext from '../../Context/resultContext';
import MedalContext from '../../Context/medalContext';
import {StyleSheet} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MissionCheckScreen = ({navigation: {goBack}}) => {
  const [totalWeight, setTotalWeight] = useState(0);
  const [terminal, setTerminal] = useState(false);
  // const [rate, setRate] = useState(0);
  const [color, setColor] = useState(0);
  var test = 0; //전체 weight을 계산하기 위한 변수

  //전역변수 설정하기 위한 부분
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [medal, setMedal] = useState(0);

  const {weightDispatch} = useContext(WeightContext);
  const {resultDispatch} = useContext(ResultContext);
  const {medalDispatch} = useContext(MedalContext);

  const {weightPoint} = useContext(WeightContext);
  const {resultPoint} = useContext(ResultContext);
  const {medalPoint} = useContext(MedalContext);

  // const getData = async () => {

  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());

  //   console.log(cityList);
  // };
  const [missionList, setMissionList] = useState([]);

  // const {dispatch} = useContext(WContext);

  //데이터베이스에서 데이터를 뽑아오는 부분
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

  //처음 렌더링할때만 파베에서 데이터를 가져오기 위한 함수
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
    setRate(Math.round((weightPoint.weight / totalWeight) * 100));
    console.log(rate, ' 이거 아닌것 같아!!');
    if (rate > 90) {
      //아주우수
      setMedal(3);
      // return medalDispatch(medal); //금메달
    } else if (rate <= 90 && rate > 70) {
      //준수
      setMedal(2);
      // return medalDispatch(medal); //은메달
    } else if (rate <= 70 && rate >= 50) {
      //성의는 봐줌.
      setMedal(1);
      // return medalDispatch(medal); //동메달
    } else {
      setMedal(0);
      // return medalDispatch(medal); //실패
    }
  };

  function submitWeight() {
    Alert.alert('정말 모든 미션들을 수행하신 것인가요???', '', [
      {
        text: 'More...',
        onPress: () => console.log('좀더 파이팅!'),
        style: 'cancel',
      },
      {
        text: 'Finish!',
        onPress: () => {
          // checkRateWeight();
          const rate = Math.round((weightPoint.weight / totalWeight) * 100);
          console.log(rate, 'rate');
          // medalDispatch(medal);
          // setResult(weightPoint.weight);
          // resultDispatch(result);
          medalDispatch(2);
          if (rate > 85) {
            medalDispatch(3);
          } else if (rate <= 85 && rate > 65) {
            medalDispatch(2);
          } else if (rate <= 65 && rate > 50) {
            medalDispatch(1);
          } else {
            medalDispatch(0);
          }
          resultDispatch(weightPoint.weight);
          weightDispatch(0);
          setTerminal(true);
          // console.log(result, '이거 값이 잘나와야할텐데...');
          console.log(medalPoint.medal, 'medalpoint'); //3
          console.log(weightPoint.weight, 'weightpoint'); //0
          console.log(resultPoint.result, 'resultpoint'); //19
          goBack();
        },
      },
    ]);
  }
  return (
    <View>
      <View>
        <SafeAreaView>
          <Pressable style={styles.wrapperCustom} onPress={submitWeight}>
            <Text style={styles.text}>미션 완료</Text>
          </Pressable>
          {/* <Button onPress={() => submitWeight()} title="미션완료" /> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  wrapperCustom: {
    borderRadius: 20,
    padding: 6,
    marginLeft: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#aaaa',
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default MissionCheckScreen;
