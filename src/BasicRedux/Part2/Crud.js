import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from './components/Card';
import {useSelector, useDispatch} from 'react-redux';
import * as action from './actions/crud.action';
// console.log('action', action);

const Crud = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');

  const state = useSelector(({crudReducer}) => {
    return crudReducer;
  });
  console.log('state -> state', state);

  const dispatch = useDispatch();

  //   cara langsung tanpa buat action

  //   const addData = () => {
  //     const dataUser = {
  //       nama: nama,
  //       email: email,
  //     };
  //     dispatch({type: 'ACTION_TAMBAH', payload: dataUser});
  //   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Demo</Text>
      <View style={styles.form}>
        <TextInput
          underlineColorAndroid="grey"
          placeholder="Nama"
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <TextInput
          underlineColorAndroid="grey"
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Button
          title="ADD"
          onPress={() => dispatch(action.add({nama: nama, email: email}))}
        />
      </View>
      {state.data.map((item, index) => {
        return (
          <View key={index}>
            <Card
              nama={item.nama}
              email={item.email}
              onPress={() => dispatch(action.del(index))}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Crud;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
  },
  form: {
    marginHorizontal: 15,
  },
});
