import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ReAnimated} from './src/Animated';
import Part1 from './src/BasicRedux/Part1';
import Part2 from './src/BasicRedux/Part2';
import ShimmerSkeleton from './src/Shimmer';

// redux
import {Provider} from 'react-redux';
// jika membuat action harus di tambah middleware
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './src/BasicRedux/Part2/reducers';
import Crud from './src/BasicRedux/Part2/Crud';
import AsyncStoragePart1 from './src/BasicAsyncStorage/Part1';

// const store = createStore(reducers, applyMiddleware(thunk, logger));
const store = createStore(reducers, applyMiddleware(thunk));
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <ReAnimated /> */}
      {/* <Part1 /> */}
      {/* <ShimmerSkeleton /> */}
      <AsyncStoragePart1 />
    </View>
    // <Provider store={store}>
    //   {/* <Part2 /> */}
    //   <Crud />
    // </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
