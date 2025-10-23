import {
  Animated,
  PanResponder,
  StyleSheet,
  useAnimatedValue,
  View,
} from 'react-native';
import React, { useRef } from 'react';

// Pan Responder, Animated.event, forkEvent, unforkEvent
const Event = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useAnimatedValue(1);




  // creating pan responder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Ask if we should start handling the touch

      onPanResponderGrant: () => {
        Animated.spring(scale, {
          toValue: 1.2,
          useNativeDriver: true,
        }).start();
      },

      // When the finger moves
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false },
      ),

      onPanResponderRelease: () => {
        Animated.parallel([
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}  // connect touch controls
        style={[
          styles.box,
          { transform: [...pan.getTranslateTransform(), { scale }] },
        ]}
      />
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});
