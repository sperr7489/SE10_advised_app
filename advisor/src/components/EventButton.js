import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import AlertContract from '../function/AlertContract';
const EventButton = props => {
  //   const _onPressOut = () => console.log('PressOut!!\n');
  //   const _onPress = () => console.log('press !!\n');
  //   const _onLongPress = () => console.log('LongPress !!\n');
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 15,
        margin: 10,
        borderRadius: 8,
      }}
      onPressIn={AlertContract}>
      <Text
        style={{
          fontSize: 24,
          width: 150,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
EventButton.defaultProps = {
  title: '서명확인',
};
export default EventButton;
