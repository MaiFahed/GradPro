import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import colours from '../Componants/colours'
import SearchBar from '../Componants/SearchBar'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CardRes from '../Componants/CardRes';
// navs
import { useNavigation } from '@react-navigation/native';

const Listing = [
  {
    id: 1,
    title: 'KFC',
    subTitle: 100,
    image: require('../assets/checken.png'),
    count: 10,
    rate: 5,
    collect: '1:30-4:00',
    oldPrice: 5.5,
  },
  {
    id: 2,
    title: "90's Burger",
    subTitle: 200,
    image: require('../assets/burger.jpg'),
    count: 15,
    rate: 4,
    collect: '2:00-5:00',
    oldPrice: 95,
  },
  {
    id: 3,
    title: 'Shawerman',
    subTitle: 200,
    image: require('../assets/shawerma.avif'),
    count: 9,
    rate: 3,
    collect: '3:30-4:00',
    oldPrice: 15,
  },
  {
    id: 4,
    title: 'Ward Restaurant',
    subTitle: 200,
    image: require('../assets/musakhan.png'),
    count: 7,
    rate: 2,
    collect: '4:00-5:00',
    oldPrice: 25,
  },
  {
    id: 5,
    title: 'Ward Restaurant',
    subTitle: 200,
    image: require('../assets/musakhan.png'),
    count: 7,
    rate: 2,
    collect: '4:00-5:00',
    oldPrice: 25,
  },
];


export default function Search() {
  const navigation = useNavigation();
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <View style={styles.outer}>
      <View style={{ alignSelf: 'center', position: 'absolute', width: '95%', top: 63 }}>
        <SearchBar onPress={handleButtonClick} />
      </View>

      <View style={styles.inner}>
        <View style={styles.square}>
          <Ionicons name="fast-food" size={24} color={colours.green} />
          <Text style={{ fontSize: 11, fontWeight: '600' }}>Food</Text>
        </View>

        <View style={styles.square}>
          <MaterialIcons name="not-listed-location" size={24} color={colours.green} />
          <Text style={{ fontSize: 11, fontWeight: '600' }}>Location</Text>
        </View>

        <View style={styles.square}>
          <MaterialIcons name="restaurant" size={24} color={colours.green} />
          <Text style={{ fontSize: 10, fontWeight: '600' }}>Restaurant</Text>
        </View>
      </View>

      {showList && (<FlatList style={{ top: 190, margin: 7 }}
        data={Listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={false}
            onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
          />
        }
      />)}

    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: colours.beige,
  },
  inner: {
    position: 'absolute',
    top: 110,
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 45,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colours.green,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
  },
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colours.white,
    marginBottom: 20,
    marginLeft: 10,
    width: 380,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: colours.green,
    position: 'absolute',
    top: 25,
    paddingLeft: 2,
    marginLeft: 320,
  },
})