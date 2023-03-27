import { FlatList, ScrollView, StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React from 'react'
// import { SearchBar } from 'react-native-screens';
import SearchBar from '../Componants/SearchBar';
import CardRes from '../Componants/CardRes';
import colours from '../Componants/colours';
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

export default function DiscoverScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.outer}>
            <ScrollView nestedScrollEnabled='true'>

                <View style={{ alignSelf: 'center', position: 'absolute', width: '95%', top: 57 }}>
                    <SearchBar />
                </View>

                <View style={{ position: 'absolute', width: '100%', top: 120, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Recomended for you</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={false}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />}
                    />
                </View>
                <View style={{ position: 'absolute', width: '100%', top: 360, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Limited edition</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={ListingB}
                        keyExtractor={ListingB => ListingB.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={true} count={item.count + " left"}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />}
                    />
                </View>
                <View style={{ position: 'absolute', width: '100%', top: 600, backgroundColor: colours.beige }}>
                    <Text style={styles.text}> Best selling </Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={false}
                                onPress={() => navigation.navigate("DiscoverFeed", { screen: "Details", params: { ...item } })}
                            />}
                    />
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
    }
})