import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux';
import TodoList from './components/TodoList';

const MainApp = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default MainApp;

const styles = StyleSheet.create({});
