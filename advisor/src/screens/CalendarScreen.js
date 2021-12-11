import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import Coin from '../../../advisor/src/assets/icons/money.png';
import {Image} from 'react-native';
import MedalContext from '../Context/medalContext';
import ComplexR from '../components/Coin/ComplexR';
const CalenderScreen = () => {
  const [color, setColor] = useState('');
  const {medalPoint} = useContext(MedalContext);

  useEffect(() => {
    if (medalPoint.medal == 3) {
      setColor('#ffd700');
    } else if (medalPoint.medal == 2) {
      setColor('#BDBDBD');
    } else if (medalPoint.medal == 1) {
      setColor('#624637');
    } else {
      setColor('#fffff');
    }
  }, [medalPoint.medal]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      {/* <Image
        style={{
          width: 350,
          height: 350,
          marginTop: 20,
          overlayColor: 'red',
          tintColor: color ? color : 'white',
          transform: [{rotateX: '45deg'}],
        }}
        source={Coin}></Image> */}
      <ComplexR color={color}></ComplexR>
    </View>
  );
};
export default CalenderScreen;
