import React, {useState} from 'react';
import {TextInput, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const MissionInPut = props => {
  const [text, onChangeText] = useState('미션 내용을 구체적으로 설정하세요');
  const changeDetail = text => {
    onChangeText(text);
    props.setText(text);
  };

  return (
    <SafeAreaView>
      <TextInput
        clearTextOnFocus="true"
        style={styles.input}
        onChangeText={changeDetail}
        value={text}
        autoComplete="off"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default MissionInPut;
