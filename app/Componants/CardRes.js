import { StyleSheet, Image, Text, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import colours from './colours';
import { Ionicons } from '@expo/vector-icons';

export default function CardRes({ title, subTitle, image, showCount, count, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.img} source={image} />
                {showCount && <View style={styles.count}>
                    <Text style={styles.textCount}>{count}</Text>
                </View>}
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subTitle}</Text>
                    <View style={styles.addToCartBtn}>
                        <Ionicons name="ios-add-sharp" size={28} color={colours.white} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        marginLeft: 10,
        width: 200
    },
    img: {
        width: '100%',
        height: 100,
        // resizeMode:'center'
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
    count: {
        height: 20,
        width: 40,
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
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 7,
    },
    subtitle: {
        fontSize: 10,
        color: colours.grey,
    }
})