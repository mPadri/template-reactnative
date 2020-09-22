import React from 'react';
import {View, Text} from 'react-native';

const Box2 = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: 'salmon',
        height: 150,
      }}>
      <Text style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
        Box2
      </Text>
    </View>
  );
};

export default Box2;
