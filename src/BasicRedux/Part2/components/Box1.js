import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Box1 = () => {
  const state = useSelector(({calReducer}) => {
    return calReducer;
  });
  // console.log('state -> state', state);
  return (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: 'yellow',
        height: 150,
      }}>
      <Text style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
        Box1
      </Text>
    </View>
  );
};

export default Box1;
