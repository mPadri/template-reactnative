import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

export const ReAnimated = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  console.log('isi state: ', value);
  const moveBall = () => {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'lightblue',
          }}
        />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};
