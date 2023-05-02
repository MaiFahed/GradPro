import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react';
import colours from './colours';
import { Ionicons } from '@expo/vector-icons';
import FavIcon from './FavIcon';
import Animated from 'react-native-reanimated';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
// const myUniqueCode = generateUniqueCode();


export default function MyCart({ image, prePrice, title, subTitle, onPress, quantity, unCode, totalPrice }) {
    const [rating, setRating] = useState(0);
    const [isRated, setIsRated] = useState(false);

    const handlePress = (value) => {
        setRating(value);
        setIsRated(true);
    };

    const renderStar = (value) => {
        return (
            <TouchableOpacity onPress={() => handlePress(value)} disabled={isRated}>
                <FontAwesome
                    name={value <= rating ? 'star' : 'star-o'}
                    size={20}
                    color={value <= rating ? 'green' : 'gray'}
                />
            </TouchableOpacity>
        );
    };
    return (
        <View onPress={() => console.log(rating)} style={styles.container}>
            <Image style={styles.img} source={image} />
            <View style={styles.count}>
                <Text style={styles.textCount}>Quantity : {quantity}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subtitle} >{subTitle}</Text>
                    <Text style={styles.preprice}>{prePrice}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    {renderStar(1)}
                    {renderStar(2)}
                    {renderStar(3)}
                    {renderStar(4)}
                    {renderStar(5)}
                </View>
                <View style={styles.code}>
                    <Text style={{ fontWeight: '600', color: colours.black }}>{generateUniqueCode()}</Text>
                </View>
                <View style={styles.totalPrice}>
                    <Text style={{ fontWeight: '600', color: colours.black }}>Total: {totalPrice} </Text>
                </View>
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
    code: {
        marginLeft: 180,
        position: 'absolute',
        top: 20,
        backgroundColor: colours.lightyellow,
        padding: 4
    },
    totalPrice: {
        marginLeft: 148,
        position: 'absolute',
        top: 60,
        backgroundColor: colours.lightyellow,
        padding: 4
    },
    preprice: {
        fontWeight: 'bold',
        fontSize: 17,
        color: colours.red,
        marginLeft: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        paddingTop: 11,
    },
})