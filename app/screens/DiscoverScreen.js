import { FlatList, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
// import { SearchBar } from 'react-native-screens';
import SearchBar from '../Componants/SearchBar';
import CardRes from '../Componants/CardRes';

const Listing = [
    {
        id: 1,
        title: 'KFC',
        price: 100,
        image: require('../assets/kfc.jpg')
    },
    {
        id: 2,
        title: 'MACDONALD',
        price: 200,
        image: require('../assets/kfc.jpg')
    },
    {
        id: 3,
        title: 'MACDONALD',
        price: 200,
        image: require('../assets/kfc.jpg')
    },
    {
        id: 4,
        title: 'MACDONALD',
        price: 200,
        image: require('../assets/kfc.jpg')
    },
];

export default function DiscoverScreen() {
    return (//
        <View style={styles.outer}>
            <ScrollView nestedScrollEnabled='true' style={styles.scrollView}>

                <View style={{ alignSelf: 'center', position: 'absolute', width: '95%', top: 57 }}>
                    <SearchBar />
                </View>

                <View style={{ position: 'absolute', width: '100%', top: 120, backgroundColor: "#F9F1E8" }}>
                    <Text style={styles.text}> Recomended for you</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes title={item.title} subTitle={"$" + item.price} image={item.image} />}
                    />
                </View>
                <View style={{ position: 'absolute', width: '100%', top: 360, backgroundColor: "#F9F1E8" }}>
                    <Text style={styles.text}> Recomended for you</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes title={item.title} subTitle={"$" + item.price} image={item.image} />}
                    />
                </View>
                <View style={{ position: 'absolute', width: '100%', top: 600, backgroundColor: "#F9F1E8" }}>
                    <Text style={styles.text}> Recomended for you</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={Listing}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <CardRes title={item.title} subTitle={"$" + item.price} image={item.image} />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        // paddingRight: 4,
        backgroundColor: "#F9F1E8", //#F9F1E8
    },
    text: {
        fontWeight: "bold",
        marginTop: 10,
        marginLeft:10,
        marginBottom: 17,
        color: "black",
        fontSize:20
    }
})