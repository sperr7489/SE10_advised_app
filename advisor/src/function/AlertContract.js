import React, {useState} from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const AlertContract = () => {
  Alert.alert(
    // 말그대로 Alert를 띄운다
    '서약서', // 첫번째 text: 타이틀 제목
    `!! 확실하게 수립한 미션을 성공할 수 있겠습니까? 장난하지 마세요ㅡㅡ`, // 두번째 text: 그 밑에 작은 제목
    [
      // 버튼 배열
      {
        text: 'No', // 버튼 제목
        onPress: () => console.log('아니라는데'), //onPress 이벤트시 콘솔창에 로그를 찍는다
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('그렇다는데')}, //버튼 제목
      // 이벤트 발생시 로그를 찍는다
    ],
    {cancelable: false},
  );
};

export default AlertContract;
