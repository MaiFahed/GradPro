import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

export default function CardRes({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={image} />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        overflow:"hidden",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
        marginLeft:10,
        width:150
    },
    img: {
        width: '100%',
        height: 100,
        // resizeMode:'center'
    },
    detailContainer: {
        padding:20,
    },
    title: {
        marginBottom:7,
    }
})