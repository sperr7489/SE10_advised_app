import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import siba from '../assets/avatar/siba.jpeg';

import {db} from '../../firebase-config';
import {WContext} from '../Context/weightContext';
import {useState, useEffect, useContext} from 'react';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import {StyleSheet} from 'react-native';
const ChatScreen = () => {
  const [chatTypenum, setChatTypeNum] = useState(0);
  const [chatList, setChatList] = useState([]);

  const [successRate, setSuccessRate] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const value = useContext(WContext);

  const chatType = ['friends', 'professor', 'parent', 'older'];
  const chat = [
    {
      friends: '친구야 작심삼일이라도 해보는 건 어때? ',
      professor: '학생..층수에만 F가 있는 것이 아니라네 자네 학점도 그러하지',
      parent: '넌 오늘부터 집에서도 돈 내고 밥먹어',
      older: '너덕분에 엄마한테 덜 혼남 ㅋㅋ 앞으로도 잉여처럼 살아줘',
    },
    {
      friends: '유튜브를 조금만 덜 봐바바... ',
      professor: '과제만 다 냈으면 B라도 되었을텐데 말일세...',
      parent: '먹고 싶은 거 있니? 니 돈으로 사먹어^~^',
      older: '너 성적표보다 라이스페이퍼가 나을듯.. 너껀 먹을 수도 없자나..',
    },
    {
      friends: '욜 담학기엔 장학금도 가보자 ',
      professor:
        '많이 성장했군. 내 연구실에 들어온다면 더욱 멋있어질 수 있을 것 같네만..?',
      parent: '점점 멋있어지고 있구마아아안~! 우리아덜',
      older: '하...요즘 니때메 엄마한테 내가 털리자나.... ㅠㅠㅠ 좀 살살혀',
    },
    {
      friends: '오 이놈쉐키!! 진짜 잘했네?!?!?',
      professor: '학생 이름이 뭔가? 인상이 아주 좋구먼',
      parent: '오늘 뭐 먹고 싶은 거 있어? 간만에 외식이나 가자',
      older: '재수없어ㅡㅡ',
    },
  ];

  const chatContent = () => {
    if (value.medal != -1) {
      setOpacity(0);
      setSuccessRate(value.medal);
    } else {
      setOpacity(1);
      setSuccessRate(value.medal);
    }
  };
  useEffect(() => {
    chatContent();
  }, [value.medal]);
  // const getData = async () => {
  //   const chatCol = collection(db, 'chat');
  //   const chatSnapshot = await getDocs(chatCol);
  //   const list = chatSnapshot.docs.map(doc => doc.data());
  //   setChatList(list);
  // };

  // useEffect(() => {
  //   getData();
  //   console.log(chatList);
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: 300,
          height: 500,
          marginRight: 10,
          marginTop: 20,
          marginLeft: 40,
        }}
        source={siba}></Image>
      <View>
        <Pressable
          onPress={() => {
            if (chatTypenum > 2) {
              setChatTypeNum(0);
            } else setChatTypeNum(chatTypenum + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          <Text style={{fontSize: 30}}>{chatType[chatTypenum]}</Text>
        </Pressable>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 30,
            marginLeft: 10,
            opacity: opacity,
          }}>
          {chat[3].professor}
        </Text>
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
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 20,
    padding: 6,
    marginLeft: 10,
    width: 140,
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

export default ChatScreen;
