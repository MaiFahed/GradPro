import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import colours from './colours';
import Animated from 'react-native-reanimated';


import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Touchable } from 'react-native';

export default function FavIcon({onPress, name, color}) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ position: 'absolute', top: 5, marginLeft:10, marginTop:5 }}>
            <FontAwesome name={name} size={35} color={color} />
            </View>
            <Animated.View style={{
                borderRadius: 100,
                backgroundColor: colours.green, width: 55, height: 55,
                opacity: Animated.add(0.1, Animated.multiply(new Animated.Value(0), 1.0))
            }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})