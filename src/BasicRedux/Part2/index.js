import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import {useSelector, useDispatch} from 'react-redux';
import * as calAction from './actions/cal.action';
// console.log('calAction', calAction);

const Part2 = () => {
  const state = useSelector(({calReducer}) => {
    return calReducer;
  });
  //   console.log('state -> state', state);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Redux Demo
      </Text>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        {state.count}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-around',
        }}>
        <Button title="ADD" onPress={() => dispatch(calAction.add())} />
        <Button title="REM" onPress={() => dispatch(calAction.remove())} />
        <Button title="CLR" onPress={() => dispatch(calAction.clear(0))} />
      </View>
      <View style={{height: 20}} />
      <Box1 />
      <Box2 />
      <Box3 />
    </View>
  );
};

export default Part2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
