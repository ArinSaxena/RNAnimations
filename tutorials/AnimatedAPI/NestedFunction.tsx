import { Animated, StyleSheet, View } from 'react-native'
import React from 'react'
// loop, parallel, stagger, delar, sequence
const NestedFunction = () => {
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.box]}/>
        <Animated.View/>
    </View>
  )
}

export default NestedFunction

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:100,
        height:100,
        backgroundColor:'red',
        margin:10
    }
})