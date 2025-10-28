import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
    Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { height: ScreenHeight } = Dimensions.get('window');
const HEADER_HEIGHT = 100;
const ScrollHandler = () => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const offsetY = event.contentOffset.y;

      translateY.value = withSpring(
        offsetY > HEADER_HEIGHT ? -HEADER_HEIGHT : 0,
      );

      opacity.value = interpolate(
        offsetY,
        [0, HEADER_HEIGHT / 2],
        [1, 0],
        Extrapolation.CLAMP,
      );
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    transform:[{translateY: translateY.value}],
    opacity: opacity.value
  }))

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
        //   { transform: [{ translateY }], opacity: opacity },
        animatedHeaderStyle
        ]}
      >
        <Text style={{ fontSize: 24 }}>Collapsible Header</Text>
      </Animated.View>
      <Animated.ScrollView contentContainerStyle={styles.scrollContent} onScroll={scrollHandler} scrollEventThrottle={16}>
        <View style={styles.content}>
          {Array.from({ length: 30 }).map((_, index) => (
            <Text style={styles.text} key={index}>
              {' '}
              Item {index + 1}
            </Text>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ScrollHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#6a1b9a',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding:16
  },
  text: {
    fontSize:18,
    color: '#ccc',
    paddingVertical:20,
    marginVertical:10
  },
  scrollContent:{
    paddingTop:HEADER_HEIGHT +10
  }
});
