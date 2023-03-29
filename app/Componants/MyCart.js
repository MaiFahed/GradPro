import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import colours from './colours';
import { Ionicons } from '@expo/vector-icons';
import FavIcon from './FavIcon';
import Animated from 'react-native-reanimated';
import { EvilIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function MyCart({ image, prePrice, title, subTitle, onPress }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={image} />
            <View style={styles.count}>
                <Text style={styles.textCount}>Quantity: 3</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle} >{subTitle}</Text>
                <Text style={styles.preprice}>{prePrice}</Text>
                <TouchableOpacity onPress={onPress} style={styles.trashIcon}>
                    <EvilIcons name="trash" size={50} color={colours.red} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        marginLeft: 10,
        width: windowWidth / 1.1,
    },
    img: {
        width: 130,
        height: '100%',
        // resizeMode:'center'
    },
    count: {
        height: 20,
        width: 75,
        borderRadius: 9,
        backgroundColor: colours.lightyellow,
        position: 'absolute',
        top: 12,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCount: {
        color: colours.darkgreen,
        fontSize: 11,
        fontWeight: '800',
    },
    detailContainer: {
        padding: 10,
        width: 300
    },
    title: {
        fontWeight: "bold",
        marginBottom: 7,
    },
    subtitle: {
        fontSize: 15,
        color: colours.grey,
        textDecorationLine: 'line-through'
    },
    trashIcon: {
        marginLeft: 190,
        position: 'absolute',
        top: 50
    },
    preprice: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colours.red,
        marginLeft: 30
    }
})