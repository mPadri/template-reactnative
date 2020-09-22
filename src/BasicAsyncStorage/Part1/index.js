import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Card from './components/Card';
import AsyncStorage from '@react-native-community/async-storage';

const AsyncStoragePart1 = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [datas, setDatas] = useState([]);
  const [editIndexKe, setEditIndexKe] = useState(null);
  //   console.log('datas', datas);

  useEffect(() => {
    getData();
  }, []);

  const saveData = async datas => {
    try {
      const jsonValue = JSON.stringify(datas);
      await AsyncStorage.setItem('datas', jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const datas = await AsyncStorage.getItem('datas');
      //   console.log('getData -> datas local', datas);

      return datas !== null ? setDatas(JSON.parse(datas)) : null;
    } catch (error) {
      console.log(error);
    }
  };

  const tambahData = () => {
    const data = {
      nama: nama,
      email: email,
    };
    setDatas([...datas, data]);
    saveData([...datas, data]);
    setEmail('');
    setNama('');
    // console.log('isi state ->', datas);
  };

  const hapusData = index => {
    // console.log('hapusData -> index', index);
    const dataBaru = datas.filter((el, indexData) => indexData !== index);
    // console.log('dataBaru', dataBaru);
    setDatas(dataBaru);
    saveData(dataBaru);
  };

  const editData = index => {
    // console.log('index', index);
    // console.log(datas[index].nama);
    setNama(datas[index].nama);
    setEmail(datas[index].email);
    setEditIndexKe(index);
  };

  const saveEditData = () => {
    // console.log('index yang di edit', editIndexKe);
    // console.log('nama:', datas[editIndexKe].nama);
    const data = {
      nama: nama,
      email: email,
    };
    // console.log(datas[editIndexKe]);
    datas[editIndexKe] = data;
    setEmail('');
    setNama('');
    setEditIndexKe(null);
    saveData(datas);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AsyncStorage Demo</Text>
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
          title={editIndexKe !== null ? 'SAVE EDIT' : 'ADD'}
          onPress={() => (editIndexKe !== null ? saveEditData() : tambahData())}
        />
      </View>

      {datas.map((item, index) => {
        return (
          <View key={index}>
            <Card
              nama={item.nama}
              email={item.email}
              onPress={() => hapusData(index)}
              onPressEdit={() => editData(index)}
            />
          </View>
        );
      })}
    </View>
  );
};

export default AsyncStoragePart1;
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
