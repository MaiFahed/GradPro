import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import colours from '../Componants/colours'
import CardRes from '../Componants/CardRes';
// navs
import { useNavigation } from '@react-navigation/native';


const Listing = [
    {
        id: 5,
        title: 'Wakeup Coffee',
        subTitle: 100,
        image: require('../assets/dounts.jpg'),
        count: 2,
    },
    {
        id: 6,
        title: 'Mono Pizza',
        subTitle: 200,
        image: require('../assets/pizza.jpg'),
        count: 3,
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FavScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Favourites</Text>
                <FlatList vertical showsVerticalScrollIndicator={false} style={styles.flatList}
                    data={Listing}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <CardRes Animate={true} noAnimate={false} showFavIcon={true} addStyle={styles.addToCartBtn} style={styles.card} title={item.title} subTitle={"$" + item.subTitle} image={item.image} showCount={false}
                            onPress={() => navigation.navigate("Favourites", { screen: "Details", params: { ...item } })}
                        />}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.beige,
    },
    text: {
        top: 60,
        fontWeight: 'bold',
        fontSize: 27,
        padding:10,
        marginLeft: 10
    },
    card: {
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        marginLeft: 10,
        width: windowWidth/1.1,
    },
    flatList: {
        width: '100%', 
        top: 70, 
        backgroundColor: colours.beige, 
        marginLeft:8
    },
    addToCartBtn: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: colours.green,
        position: 'absolute',
        top: 20,
        paddingLeft: 7,
        paddingTop:5,
        marginLeft: 250,
    },
})