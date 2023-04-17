import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import colours from './colours';
import { Ionicons } from '@expo/vector-icons';
import FavIcon from './FavIcon';
import Animated from 'react-native-reanimated';
import { EvilIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function MyCart({ image, prePrice, title, subTitle, onPress, unCode, quantity }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.img} source={image} />
            <View style={styles.count}>
                <Text style={styles.textCount}>Quantity : {quantity}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle} >{subTitle}</Text>
                <Text style={styles.preprice}>{prePrice}</Text>
                <View  style={styles.code}>
                    <Text style={{ fontWeight: '600', color: colours.black }}>{unCode}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
    code: {
        marginLeft: 180,
        position: 'absolute',
        top: 20,
        backgroundColor: colours.lightyellow,
        padding: 4
    },
    preprice: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colours.red,
        marginLeft: 30
    }
})