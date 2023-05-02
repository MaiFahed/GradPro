import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import colours from '../Componants/colours'
import CardRes from '../Componants/CardRes';
import MyCart from '../Componants/MyCart';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import GetStart from '../Componants/GetStart';
// navs
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';


const BuyListing = [
    {
        id: 1,
        title: 'Popeyes',
        subTitle: 20,
        oldPrice: 10,
        image: require('../assets/popeyes.webp'),
        count: 8,
        quantity: 5,
        rate: 5,
        totalPrice: 40,
        collect: '7:00-8:00'
    },
    {
        id: 2,
        title: 'Fresh Froyo',
        subTitle: 15,
        oldPrice: 35,
        image: require('../assets/freshFroyojpg.jpg'),
        count: 6,
        quantity: 1,
        totalPrice: 40,
        rate: 5,
        collect: '7:00-8:00'
    },
    {
        id: 3,
        title: 'Mandalina',
        subTitle: 25,
        oldPrice: 40,
        image: require('../assets/juice.jpg'),
        count: 4,
        quantity: 4,
        totalPrice: 40,
        rate: 5,
        collect: '7:00-8:00'
    },
    {
        id: 4,
        title: 'Lebanon Gateau',
        subTitle: 10,
        oldPrice: 30,
        image: require('../assets/cake.jpg'),
        count: 1,
        quantity: 2,
        totalPrice: 40,
        rate: 5,
        collect: '7:00-8:00'
    },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cart() {
    return (
        <View style={styles.modalContainer}>
            <FlatList vertical showsVerticalScrollIndicator={false} style={styles.flatList}
                data={BuyListing}
                keyExtractor={BuyListing => BuyListing.id.toString()}
                renderItem={({ item }) =>
                    <MyCart quantity={item.quantity} title={item.title} subTitle={"$" + item.subTitle}
                        image={item.image} prePrice={"$" + item.oldPrice} totalPrice={"$" +item.totalPrice}
                        onPress={() => console.log("hi")} />
                }
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
        top: 80,
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
    },
    modalInner: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.beige
        // top: 50,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandel: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: colours.green,
        marginBottom: 10,
    },
    headModal: {
        backgroundColor: colours.beige,
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerRate: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleRate: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    buttonRate: {
        backgroundColor: colours.green,
        borderRadius: 40,
        height: 30,
        width: 100,
        top: 20,
    },
    buttonText: {
        color: "white",
        textAlign: 'center',
        top: 5.5,
        fontSize: 15,
        fontWeight: 'bold'
    },
})
