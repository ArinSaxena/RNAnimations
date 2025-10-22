import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';
import React, { useEffect } from 'react';
// loop, parallel, stagger, delay, sequence
const NestedFunction = () => {
  const animValue1 = useAnimatedValue(0);
  const animValue2 = useAnimatedValue(0);
  const sequenceAnimation = () => {
    Animated.sequence([
      Animated.timing(animValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animValue1, {
        toValue: 0.4,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const parallelAnimation = () => {
    Animated.parallel([
      Animated.timing(animValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animValue2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const staggerAnimation = () => {
    Animated.stagger(500, [
      Animated.timing(animValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animValue2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const loopAnimation = () => {
    Animated.loop(
      Animated.sequence([
       Animated.timing(animValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animValue1, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      ]),
      {iterations:5}
    ).start();
  };

   const delayAnimation = () => {
    Animated.sequence([
    Animated.delay(5000), 
      Animated.timing(animValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      ]).start();
  };

  useEffect(() => {
    // sequenceAnimation();
    // parallelAnimation();
    // staggerAnimation();
    // loopAnimation();
    delayAnimation();
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: animValue1 }]} />
      <Animated.View
        style={[styles.box, { backgroundColor: 'green', opacity: animValue2 }]}
      />

      <Animated.View />
    </View>
  );
};

export default NestedFunction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  },
});
