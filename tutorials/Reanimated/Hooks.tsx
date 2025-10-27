import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedProps, useAnimatedRef, useDerivedValue, useSharedValue, withRepeat, withTiming,Easing, measure, useAnimatedStyle } from 'react-native-reanimated'

// useDerivedValue : calculate a new value based on another value
// useAnimatedRef:  makes a reference of animated value
// useAnimatedProps:  animated components k props create kr sakte h - svg
// createAnimatedComponent: can make a non animated component a animated.component

const AnimatedView = Animated.createAnimatedComponent(View);
const Hooks = () => {

    // const [value, setValue] = useState(0)
    const progress = useSharedValue(0);
    const animatedRef = useAnimatedRef();
    const borderRadius = useDerivedValue(() => {
        return 10 + progress?.value *20
    });

    useEffect(()=> {
        progress.value = withRepeat(
            withTiming(2,{duration:500, easing:Easing.linear}),
            -1,
            true
        )
    },[])
    // const animatedProps = useAnimatedProps(() =>{  // can be used for non style related things like "svg"
    //     return {
    //         borderRadius: borderRadius.value
    //     }
    // })
    // or
    const animatedProps = useAnimatedStyle(() =>{
        return {
            borderRadius: borderRadius.value
        }
    })



    // useEffect(() => {
    //     setTimeout(() =>{
    //         const layout = measure(animatedRef)
    //         console.log(layout)
    //         setValue(layout)
    //     })
    // },[])
  return (
    <View style={styles.container}>
        <AnimatedView
        ref={animatedRef}
        style={[styles.box,animatedProps]}
        // animatedProps={animatedProps}
        />
    </View>
  )
}

export default Hooks

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        height:100,
        width:100,
        backgroundColor:"yellow"

    },
    txt:{
        fontSize:10,
        color:'white'
    }
})