import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NoLibrary from './tutorials/AnimatedAPI/NoLibrary';
import Basic from './tutorials/AnimatedAPI/Basic';
import Value from './tutorials/AnimatedAPI/Value';
import Interpolation from './tutorials/AnimatedAPI/Interpolation';
import AnimTypes from './tutorials/AnimatedAPI/AnimTypes';
import EasingAnimations from './tutorials/AnimatedAPI/EasingAnimations';
import NestedFunction from './tutorials/AnimatedAPI/NestedFunction';
import Event from './tutorials/AnimatedAPI/Event';
import CustomAnimatedComponent from './tutorials/AnimatedAPI/CustomAnimatedComponent';
import LayoutAnim from './tutorials/AnimatedAPI/LayoutAnim';
import ScrollEvent from './tutorials/AnimatedAPI/ScrollEvent';
import RNBasic from './tutorials/Reanimated/RNBasic';
import Method from './tutorials/Reanimated/Method';
import Hooks from './tutorials/Reanimated/Hooks';
import ScrollHandler from './tutorials/Reanimated/ScrollHandler';
import ScrollTo from './tutorials/Reanimated/ScrollTo';
const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Animations</Text>
      </SafeAreaView>

      {/* Animated API */}
      {/* <NoLibrary /> */}
      {/* <Basic/> */}
      {/* <Value/> */}
      {/* <Interpolation/> */}
      {/* <AnimTypes/> */}
      {/* <EasingAnimations/> */}
      {/* <NestedFunction/> */}
      {/* <Event/> */}
      {/* <CustomAnimatedComponent/> */}
      {/* <LayoutAnim/> */}
      {/* <ScrollEvent/> */}


      {/* RNreanimated */}
      {/* <RNBasic/> */}
      {/* <Method/> */}
      {/* <Hooks/> */}
      {/* <ScrollHandler/> */}
      <ScrollTo/>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 15,
  },
});
