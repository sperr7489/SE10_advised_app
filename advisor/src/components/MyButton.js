import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => props.onPress()}>
      <Text style={{fontSize: 24, color: 'white'}}>
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: 'kichang',
};
export default MyButton;
