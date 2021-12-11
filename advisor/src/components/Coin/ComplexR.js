import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {Image} from 'react-native';
import MedalContext from '../../Context/medalContext';
import Coin from '../../../src/assets/icons/money.png';
class ComplexR extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    color: ' ',
    rotateY: new Animated.Value(0),
    rotateX: new Animated.Value(180),
  };

  animate() {
    const y = Animated.timing(this.state.rotateY, {
      toValue: 180,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
    });

    const x = Animated.timing(this.state.rotateX, {
      toValue: 360,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
    });

    Animated.parallel([y, x]).start(() => {
      this.state.rotateY.setValue(0),
        this.state.rotateX.setValue(180),
        this.animate();
    });
  }

  componentDidMount() {
    this.animate();
  }

  rorate1 = {
    transform: [
      {
        rotateY: this.state.rotateY.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
      {
        rotateX: this.state.rotateY.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  rorate2 = {
    transform: [
      {
        rotateX: this.state.rotateX.interpolate({
          inputRange: [180, 360],
          outputRange: ['0deg', '360deg'],
        }),
      },
      {
        rotateY: this.state.rotateX.interpolate({
          inputRange: [180, 360],
          outputRange: ['0deg', '720deg'],
        }),
      },
    ],
  };

  render() {
    const {color} = this.props;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.rotate, this.rorate1]}>
          <Image
            style={{
              width: 300,
              height: 300,
              marginTop: 20,
              overlayColor: 'red',
              tintColor: color ? color : 'white',
            }}
            source={Coin}></Image>
        </Animated.View>
        <Animated.View style={[styles.rotate, this.rorate2]}>
          <Image
            style={{
              width: 300,
              height: 300,
              marginTop: 20,
              tintColor: color ? color : 'white',
            }}
            source={Coin}></Image>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotate: {
    position: 'absolute',
    borderColor: '#ffff',
  },
});

export default ComplexR;
