import React from 'react';
import {View, Text} from 'react-native';

const Box3 = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        height: 150,
      }}>
      <Text style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
        Box3
      </Text>
    </View>
  );
};

export default Box3;
