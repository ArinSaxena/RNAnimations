import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

// V C F

const RNBasic = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 60, {
      // duration: 1000,
      damping:10,
      stiffness:100
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });
  return (
    <View>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="click" onPress={handlePress} />
    </View>
  );
};

export default RNBasic;

const styles = StyleSheet.create({
  box: {
    height: 100,
    backgroundColor: 'violet',
  },
});
