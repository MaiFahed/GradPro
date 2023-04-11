import { FlatList, ScrollView, StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React, { createContext, useState, useContext } from 'react'
// import { SearchBar } from 'react-native-screens';
import SearchBar from '../Componants/SearchBar';
import CardRes from '../Componants/CardRes';
import colours from '../Componants/colours';
import MyCart from '../Componants/MyCart';
// navs
import { useNavigation } from '@react-navigation/native';

import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SmpTest from './SmpTest';


const Listing = [
    {
        id: 1,
        title: 'KFC',
        subTitle: 100,
        image: require('../assets/checken.png'),
        count: 10,
    },
    {
        id: 2,
        title: "90's Burger",
        subTitle: 200,
        image: require('../assets/burger.jpg'),
        count: 15,
    },
    {
        id: 3,
        title: 'Shawerman',
        subTitle: 200,
        image: require('../assets/shawerma.avif'),
        count: 9,
    },
    {
        id: 4,
        title: 'Ward Restaurant',
        subTitle: 200,
        image: require('../assets/musakhan.png'),
        count: 7,
    },
];

const ListingB = [
    {
        id: 1,
        title: 'Wakeup Coffee',
        subTitle: 100,
        image: require('../assets/dounts.jpg'),
        count: 2,
    },
    {
        id: 2,
        title: 'Mono Pizza',
        subTitle: 200,
        image: require('../assets/pizza.jpg'),
        count: 3,
    },
    {
        id: 3,
        title: 'Mom Cake',
        subTitle: 200,
        image: require('../assets/mooncake.jpg'),
        count: 4,
    },
    {
        id: 4,
        title: 'Mrs Crepe',
        subTitle: 200,
        image: require('../assets/crepe.webp'),
        count: 1,
    },
];

const ListingC = [
    {
        id: 1,
        title: 'Popeyes',
        subTitle: 100,
        image: require('../assets/popeyes.webp'),
        count: 8,
    },
    {
        id: 2,
        title: 'Fresh Froyo',
        subTitle: 200,
        image: require('../assets/freshFroyojpg.jpg'),
        count: 6,
    },
    {
        id: 3,
        title: 'Mandalina',
        subTitle: 200,
        image: require('../assets/juice.jpg'),
        count: 4,
    },
    {
        id: 4,
        title: 'Lebanon Gateau',
        subTitle: 200,
        image: require('../assets/cake.jpg'),
        count: 1,
    },
];

function Searching() {
    return (
        <>
            <FlatList vertical showsVerticalScrollIndicator={false} style={styles.flatList}
                data={Listing}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <CardRes Animate={true} noAnimate={false} showFavIcon={true}
                        addStyle={styles.addToCartBtn} style={styles.card}
                        title={item.title} subTitle={"$" + item.subTitle}
                        image={item.image} showCount={false}
                    />}
            />
        </>
    );
}

export default function DiscoverScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.outer}>
            <ScrollView>
                <View style={{ alignSelf: 'center', position: 'absolute', width: '95%', top: 63 }}>
                    <SearchBar />
                </View>
                <View style={{ width: '100%', top: 120, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Recomended for you</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={false}
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
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={true} count={item.count + " left"}
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
                            <CardRes Animate={false} noAnimate={true} showFavIcon={false} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={false}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />
                        }
                    />
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
        width: 200,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: colours.green,
        position: 'absolute',
        top: 25,
        paddingLeft: 2,
        marginLeft: 150,
    },
})