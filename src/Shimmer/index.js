import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const ShimmerSkeleton = () => {
  const [fakeData] = useState([1, 2, 3, 4, 5]);
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    const apiURL =
      'https://api.github.com/orgs/react-native-community/members?v=8';
    fetch(apiURL).then(data =>
      data
        .json()
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(err => console.log(err)),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = data => {
    return (
      <View style={styles.card}>
        <View>
          <ShimmerPlaceHolder autoRun style={styles.image} visible={!loading}>
            <Image source={{uri: data.item.avatar_url}} style={styles.image} />
          </ShimmerPlaceHolder>
        </View>
        <View>
          <ShimmerPlaceHolder
            autoRun
            style={{width: 120, marginBottom: 5}}
            visible={!loading}>
            <Text style={{fontWeight: 'bold'}}>{data.item.login}</Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            autoRun
            style={{width: 100, marginBottom: 5}}
            visible={!loading}>
            <Text style={{fontSize: 12}}>{data.item.id}</Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            autoRun
            style={{width: 125, marginBottom: 5}}
            visible={!loading}>
            <Text style={{fontSize: 10, color: 'grey'}}>
              {data.item.html_url}
            </Text>
          </ShimmerPlaceHolder>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={loading ? fakeData : data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ShimmerSkeleton;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginRight: 10,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    margin: 5,
    elevation: 2,
  },
});
