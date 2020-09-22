import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TodoItem = ({todo, toggleTd}) => {
  return (
    <TouchableOpacity
      onPress={toggleTd}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={[
          {fontSize: 20, lineHeight: 40},
          {textDecorationLine: todo.completed ? 'line-through' : 'none'},
        ]}>
        {todo.me}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
