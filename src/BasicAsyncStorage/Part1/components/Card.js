import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({nama, email, onPress, onPressEdit}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Nama: {nama}</Text>
        <Text>Email: {email}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btnEdit} onPress={onPressEdit}>
          <Text style={{textAlign: 'center', color: '#fff'}}>edit</Text>
        </TouchableOpacity>
        <View style={{height: 5}} />
        <TouchableOpacity style={styles.btnDel} onPress={onPress}>
          <Text style={{textAlign: 'center', color: '#fff'}}>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  btnDel: {
    backgroundColor: 'salmon',
    padding: 5,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: '#34eb58',
    padding: 5,
    borderRadius: 5,
  },
});
