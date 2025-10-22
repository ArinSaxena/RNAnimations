import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  useAnimatedValue,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import DecayAnimation from 'react-native/types_generated/Libraries/Animated/animations/DecayAnimation';

// VCF
// Decay, Timing, Spring

const AnimTypes = () => {
  const springValue = useAnimatedValue(0);
  const decayValue = useAnimatedValue(0);
  const timingValue = useAnimatedValue(0);

  const startDecay = () => {
    Animated.decay(decayValue,{
        velocity:2,
        deceleration:0.9,
        useNativeDriver: true,
    }).start();
  }

  const startSpring = () => {
    Animated.spring(springValue, {
        toValue:1,
        friction:1,
        tension:40,
        useNativeDriver:true
    }).start();
  }

  const startTiming = () => {
    Animated.timing(timingValue, {
        toValue:1,
        duration:1000,
        easing:Easing.ease,
        useNativeDriver:true
    }).start();
  }  

  
  const animatedTimingX ={
    transform:[{
        translateX: timingValue.interpolate({
            inputRange:[0,1],
            outputRange:[0,200],
        }),
    }],
  };

  const animatedSpringX ={
    transform:[{
        translateX: springValue.interpolate({
            inputRange:[0,1],
            outputRange:[0,200],
        }),
    }],
  };

  const animatedX = decayValue.interpolate({
    inputRange: [0, 100],
    outputRange:[0, 600],
  });
  useEffect(() => {
    startDecay();
    startSpring();
    startTiming();
  })


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box1, {transform: [{translateX:animatedX}]}]} />
      <Animated.View style={[styles.box2, animatedSpringX]} />
      <Animated.View style={[styles.box3,animatedTimingX ]}/>
    </View>
  );
};

export default AnimTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
