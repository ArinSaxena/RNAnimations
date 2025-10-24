import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  useAnimatedValue,
} from 'react-native';
import React from 'react';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const CustomAnimatedComponent = () => {
  const scaleValue = useAnimatedValue(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <AnimatedTouchableOpacity
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
      style={[styles.btn, { transform: [{ scale: scaleValue }] }]}
    >
      <Text style={styles.txt}>Press On me!</Text>
    </AnimatedTouchableOpacity>
  );
};

export default CustomAnimatedComponent;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'yellow',
    width: '50%',
    alignSelf: 'center',
  },
  txt: {
    color: 'white',
  },
});
