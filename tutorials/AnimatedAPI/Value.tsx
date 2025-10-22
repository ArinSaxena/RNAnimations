import { StyleSheet, View, Animated, useAnimatedValue } from 'react-native';
import React, { useEffect, useRef } from 'react';

// V C F
const Value = () => {
  // const position = useRef(new Animated.Value(0)).current;
  const position1 = useAnimatedValue(0);
  // const position2 = useAnimatedValue(20);

  const xyValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const baseposition = useAnimatedValue(50);
  const oscillation = useAnimatedValue(0);
  const combinedValue = Animated.add(baseposition,oscillation)


  const startAnimation = () => {
    Animated.timing(position1, {
      toValue: 288,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(position1, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    });
  };

  const startXyAnimation = () => {
    Animated.timing(xyValue, {
      toValue: { x: 500, y: 500 },
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(xyValue, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
  };

  const startOscillation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(oscillation,{
          toValue:100,
          duration:600,
          useNativeDriver:true
        }),
         Animated.timing(oscillation,{
          toValue:0,
          duration:600,
          useNativeDriver:true
        })
      ]),{iterations:5}
    ).start()

  useEffect(() => {
    startAnimation();
    startXyAnimation();
    startOscillation();
  });

  return (
    <View>
      <Animated.View style={[styles.box, { marginLeft: position1 }]} />
      {/* <Animated.View style={[styles.box2, xyValue.getLayout()]}/> */}
      <Animated.View
        style={[styles.box2, { transform: xyValue.getTranslateTransform() }]}
      />
      <Animated.View
        style={[styles.circle, { transform:[{translateX: combinedValue}] }]}
      />
    </View>
  );
};

export default Value;

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'yellow',
  },
  box2: {
    marginTop: 20,
    width: 150,
    height: 150,
    backgroundColor: 'orange',
  },
  circle:{
    marginTop: 20,
    width: 150,
    height: 150,
    backgroundColor: 'green',
    borderRadius:100
  }
});
