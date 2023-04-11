import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import colours from '../Componants/colours'
import CardRes from '../Componants/CardRes';
import MyCart from '../Componants/MyCart';
// navs
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

function generateUniqueCode() {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // The possible characters to be used in the code
    const codeLength = 4; // The length of the code

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Generate a random index for the characters string
        code += characters.charAt(randomIndex); // Append a random character to the code
    }

    return code;
}
const myUniqueCode = generateUniqueCode();

const Listing = [
    {
        id: 5,
        title: 'Wakeup Coffee',
        subTitle: 20,
        prePrice: 10,
        image: require('../assets/dounts.jpg'),
        count: 2,
    },
    {
        id: 6,
        title: 'Mono Pizza',
        subTitle: 10,
        prePrice: 30,
        image: require('../assets/pizza.jpg'),
        count: 3,
    },
    {
        id: 3,
        title: 'Shawerman',
        subTitle: 25,
        prePrice: 40,
        image: require('../assets/shawerma.avif'),
        count: 9,
    },
    {
        id: 4,
        title: 'Ward Restaurant',
        subTitle: 15,
        prePrice: 35,
        image: require('../assets/musakhan.png'),
        count: 7,
    },

];

const BuyListing = [
    {
        id: 1,
        title: 'Popeyes',
        subTitle: 20,
        prePrice: 10,
        image: require('../assets/popeyes.webp'),
        count: 8,
        quantity: 5,
        code: myUniqueCode,
    },
    {
        id: 2,
        title: 'Fresh Froyo',
        subTitle: 15,
        prePrice: 35,
        image: require('../assets/freshFroyojpg.jpg'),
        count: 6,
        quantity: 1,
        code: myUniqueCode,
    },
    {
        id: 3,
        title: 'Mandalina',
        subTitle: 25,
        prePrice: 40,
        image: require('../assets/juice.jpg'),
        count: 4,
        quantity: 4,
        code: myUniqueCode,
    },
    {
        id: 4,
        title: 'Lebanon Gateau',
        subTitle: 10,
        prePrice: 30,
        image: require('../assets/cake.jpg'),
        count: 1,
        quantity: 2,
        code: myUniqueCode,
    },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FavScreen() {
    const navigation = useNavigation();
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <View style={styles.container}>
            {/* shopping cart */}
            <Modal visible={modalOpen} animationType="fade">
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => setModalOpen(false)} style={{ flexDirection: 'row-reverse', top: 50, paddingLeft: 30 }}>
                        <AntDesign name="close" size={35} color={colours.black} />
                    </TouchableOpacity>

                    <FlatList vertical showsVerticalScrollIndicator={false} style={styles.flatList}
                        data={BuyListing}
                        keyExtractor={BuyListing => BuyListing.id.toString()}
                        renderItem={({ item }) =>
                            <MyCart quantity={item.quantity} unCode={item.code} title={item.title} subTitle={"$" + item.subTitle}
                                image={item.image} prePrice={"$" + item.prePrice} onPress={() => console.log("deleted")} />
                        }
                    />
                </View>
            </Modal>

            {/* FavScreen */}
            <Text style={styles.text}> Favourites</Text>
            <TouchableOpacity onPress={() => setModalOpen(true)} style={{ flexDirection: 'row-reverse', top: 20, paddingLeft: 40 }}>
                <AntDesign name="shoppingcart" size={28} color={colours.black} />
            </TouchableOpacity>
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
        padding: 10,
        marginLeft: 10
    },
    card: {
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        marginLeft: 10,
        width: windowWidth / 1.1,
    },
    flatList: {
        width: '100%',
        top: 54,
        backgroundColor: colours.beige,
        marginLeft: 8
    },
    addToCartBtn: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: colours.green,
        position: 'absolute',
        top: 20,
        paddingLeft: 7,
        paddingTop: 5,
        marginLeft: 250,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: colours.beige,
    }
})