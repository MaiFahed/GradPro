import { FlatList, ScrollView, StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React, { createContext, useState, useContext } from 'react'
// import { SearchBar } from 'react-native-screens';
import SearchBar from '../Componants/SearchBar';
import CardRes from '../Componants/CardRes';
import colours from '../Componants/colours';
import MyCart from '../Componants/MyCart';
import SearchScreen from './SearchScreen';
// navs
import { useNavigation } from '@react-navigation/native';

import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SmpTest from './SmpTest';


const Listing = [
    {
        id: 1,
        title: 'KFC',
        subTitle: 10,
        image: require('../assets/checken.png'),
        count: 10,
        rate: 5,
        collect: '1:30-4:00',
        oldPrice:25,
    },
    {
        id: 2,
        title: "90's Burger",
        subTitle: 20,
        image: require('../assets/burger.jpg'),
        count: 15,
        rate: 4,
        collect: '2:00-5:00',
        oldPrice:35,
    },
    {
        id: 3,
        title: 'Shawerman',
        subTitle: 15,
        image: require('../assets/shawerma.avif'),
        count: 9,
        rate: 3,
        collect: '3:30-4:00',
        oldPrice:22,
    },
    {
        id: 4,
        title: 'Ward Restaurant',
        subTitle: 200,
        image: require('../assets/musakhan.png'),
        count: 7,
        rate: 2,
        collect: '4:00-5:00',
        oldPrice:25,
    },
];

const ListingB = [
    {
        id: 1,
        title: 'Wakeup Coffee',
        subTitle: 12,
        image: require('../assets/dounts.jpg'),
        count: 2,
        rate: 4,
        collect: '3:30-5:00',
        oldPrice:17,
    },
    {
        id: 2,
        title: 'Mono Pizza',
        subTitle: 17,
        image: require('../assets/pizza.jpg'),
        count: 3,
        rate: 2,
        collect: '1:00-2:00',
        oldPrice:40,
    },
    {
        id: 3,
        title: 'Mom Cake',
        subTitle: 22,
        image: require('../assets/mooncake.jpg'),
        count: 4,
        rate: 1.5,
        collect: '3:00-5:00',
        oldPrice:40,
    },
    {
        id: 4,
        title: 'Mrs Crepe',
        subTitle: 14,
        image: require('../assets/crepe.webp'),
        count: 1,
        rate:3.5,
        collect: '6:00-8:00',
        oldPrice:55,
    },
];

const ListingC = [
    {
        id: 1,
        title: 'Popeyes',
        subTitle: 16,
        image: require('../assets/popeyes.webp'),
        count: 8,
        rate: 5,
        collect: '7:30-9:00',
        oldPrice:27,
    },
    {
        id: 2,
        title: 'Fresh Froyo',
        subTitle: 6,
        image: require('../assets/freshFroyojpg.jpg'),
        count: 6,
        rate: 2.5,
        collect: '7:00-8:30',
        oldPrice:12,
    },
    {
        id: 3,
        title: 'Mandalina',
        subTitle: 14,
        image: require('../assets/juice.jpg'),
        count: 4,
        rate: 4,
        collect: '6:00-8:00',
        oldPrice:25,
    },
    {
        id: 4,
        title: 'Lebanon Gateau',
        subTitle: 200,
        image: require('../assets/cake.jpg'),
        count: 1,
        rate: 4.5,
        collect: '7:00-9:00',
        oldPrice:8,
    },
];

export default function DiscoverScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.outer}>
            <ScrollView>
                <View style={{ alignSelf: 'center', position: 'absolute', width: '95%', top: 63 }}>
                    <SearchBar onPress={()=> navigation.navigate("Search")}/>
                </View>
                <View style={{ width: '100%', top: 120, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Recomended for you</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={item.subTitle} image={item.image} showCount={false} rate={item.rate} collect={item.collect}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />
                        }
                    />
                </View>
                <View style={{ width: '100%', top: 104, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Limited edition</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={ListingB}
                        keyExtractor={ListingB => ListingB.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={item.subTitle} image={item.image} showCount={true} count={item.count + " left"} rate={item.rate} collect={item.collect}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />
                        }
                    />
                </View>
                <View style={{ width: '100%', top: 90, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Best selling </Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={ListingC}
                        keyExtractor={listingC => listingC.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={item.subTitle} image={item.image} showCount={false} rate={item.rate} collect={item.collect}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />
                        }
                    />
                </View>
                <View style={{ width: '100%', top: 80, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Groceries </Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={ListingB}
                        keyExtractor={ListingB => ListingB.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={item.subTitle} image={item.image} showCount={false} count={item.count + " left"} rate={item.rate} collect={item.collect}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />
                        }
                    />
                </View>
                <View style={{ width: '100%', top: 80, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Coming Soon </Text>
                </View>
                <View style={{ width: '100%', top: 80, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Coming Soon </Text>
                </View>
                <View style={{ width: '100%', top: 80, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Coming Soon </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        backgroundColor: colours.beige,
    },
    text: {
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 17,
        color: colours.black,
        fontSize: 20
    },
    card: {
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        marginLeft: 10,
        width: 230,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: colours.green,
        position: 'absolute',
        top: 30,
        paddingLeft: 2,
        marginLeft: 180,
    },
})