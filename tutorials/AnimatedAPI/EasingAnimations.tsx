import {
  Animated,
  Button,
  Easing,
  StyleSheet,
  useAnimatedValue,
  View,
} from 'react-native';
import React from 'react';

const EasingAnimations = () => {
  const animatedValue = useAnimatedValue(0);

  const startAnimation = (easingFunction: (value: number) => number) => {
    animatedValue.setValue(0); // this resets the value before starting animation again
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: easingFunction,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      />
      <Button title="Step0" onPress={() => startAnimation(Easing.step0)} />
      <Button title="Step1" onPress={() => startAnimation(Easing.step1)} />
      <Button
        title="Linear"
        onPress={() => startAnimation(Easing.inOut(Easing.quad))}
      />
    </View>
  );
};

export default EasingAnimations;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
});
