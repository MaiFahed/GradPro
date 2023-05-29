import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colours from '../Componants/colours'
import SearchBar from '../Componants/SearchBar'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CardRes from '../Componants/CardRes';
import { EvilIcons } from '@expo/vector-icons';
// navs
import { useNavigation } from '@react-navigation/native';

const Listing = [
  {
    id: 1,
    title: 'KFC',
    subTitle: 10,
    image: require('../assets/checken.png'),
    count: 10,
    rate: 5,
    collect: '1:30-4:00',
    oldPrice: 25,
  },
];


export default function Search() {
  const navigation = useNavigation();
  const [showList, setShowList] = useState(false);
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const [displayText, setDisplayText] = useState('Category');

  const handleFoodButton = () => {
    setDisplayText('Food');
  };

  const handleLocationButton = () => {
    setDisplayText('Location');
  };

  const handleRestaurantButton = () => {
    setDisplayText('Restaurant');
  };

  return (
    <View style={styles.outer}>
      <View style={{ alignSelf: 'center', position: 'absolute', width: '95%', top: 63 }}>
        {/* <SearchBar onPress={handleButtonClick} /> */}
        <View style={styles.container}>
          <TouchableOpacity onPress={handleButtonClick} style={styles.logoStyle}>
            <EvilIcons name="search" size={28} color="grey" style={{ position: 'absolute', top: 12, paddingLeft: 10 }} />
          </TouchableOpacity>
          <TextInput clearButtonMode='always'
            value={text}
            onChangeText={handleTextChange}
            placeholder='Search'
            style={styles.searchInput} />
        </View>
        <View style={{ paddingLeft: 15, paddingTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{displayText} :</Text>
        </View>
      </View>



      <View style={styles.inner}>
        <TouchableOpacity onPress={handleFoodButton} style={styles.square}>
          <Ionicons name="fast-food" size={24} color={colours.green} />
          <Text style={{ fontSize: 11, fontWeight: '600' }}>Food</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLocationButton} style={styles.square}>
          <MaterialIcons name="not-listed-location" size={24} color={colours.green} />
          <Text style={{ fontSize: 11, fontWeight: '600' }}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRestaurantButton} style={styles.square}>
          <MaterialIcons name="restaurant" size={24} color={colours.green} />
          <Text style={{ fontSize: 10, fontWeight: '600' }}>Restaurant</Text>
        </TouchableOpacity>
      </View>

      {showList && (<FlatList style={{ top: 220, margin: 7 }}
        data={Listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <CardRes rate={item.rate} collect={item.collect} Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={item.subTitle} image={item.image} showCount={false}
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
    top: 140,
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
  container: {
    marginLeft: 10,
    paddingTop: 15,
    paddingLeft: 10,
    width: '80%',
    height: 45,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: "1",
    borderColor: 'lightgray',
    borderRightColor: "white",

  },
  searchInput: {
    fontSize: 16,
  },
  logoStyle: {
    backgroundColor: "white",
    marginLeft: 313,
    position: 'absolute',
    top: -1,
    width: 50,
    height: 45,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: "1",
    borderColor: 'lightgray',
  },
})