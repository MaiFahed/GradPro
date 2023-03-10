import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
//icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function GetStart({ title, onPress}) {
    return (
        <TouchableOpacity style={styles.buttun} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttun: {
        backgroundColor: '#009387',
        borderRadius: 40,
        height: 70,
        width: 160,
    },
    text: {
        color: "white",
        paddingLeft: 37,
        paddingTop: 25,
        fontSize: 15,
        fontWeight: 'bold'
    },
})