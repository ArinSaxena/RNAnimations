import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ITEM_SIZE=100
const ITEM_COUNT = 10
const ITEM_MARGIN = 10

const ScrollTo = () => {
  return (
    <View>
      <Text>ScrollTo</Text>
    </View>
  );
};


const Incrementor = ({
    increment,
    scroll,
}: {
    increment:number,
    scroll: SharedValue<number>
}) =>{
    <View style = {styles.buttonWrapper}>
        <Button/>
    </View>
}

export default ScrollTo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  scrollConatainer: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  box: {
    width: ITEM_SIZE,
    height: ITEM_COUNT,
    margin: ITEM_MARGIN,
    borderRadius:15,
    backgroundColor:'#b58df1',
    alignItems:'center',
    justifyContent:'center'
  },
});
