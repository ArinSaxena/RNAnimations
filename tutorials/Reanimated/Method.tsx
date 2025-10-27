import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withDecay,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Method = () => {
  const translateX = useSharedValue(0); //V

  const animatedStyle = useAnimatedStyle(() => { //C
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title='withTiming' 
      onPress={() => {
        translateX.value = withTiming(200,{duration:1000})
      }}/>
       <Button title='withSpring' 
      onPress={() => {
        translateX.value = withSpring(100,{damping:10 ,stiffness:100})
      }}/>
      <Button title='withDecay' 
      onPress={() => {
        translateX.value = withDecay({velocity:1, deceleration:1.2})
      }}/>
      <Button title='withDelay' 
      onPress={() => {
        translateX.value = withDelay(1000,withSpring(100,{duration:500}))
      }}/>
      <Button title='withClamp' 
      onPress={() => {
        translateX.value = withClamp({max:-100,min:100},withTiming(500,{duration:500}));
      }}/>
    </View>
  );
};

export default Method;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:5
  },
  box: {
    height: 100,
    width: 100,
    marginBottom:10,
    backgroundColor: 'blue',
  },
});
