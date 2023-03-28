import { StyleSheet, Image, Text, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import colours from './colours';
import { Ionicons } from '@expo/vector-icons';
import FavIcon from './FavIcon';
import Animated from 'react-native-reanimated';

// opacity: Animated.add(0.1, Animated.multiply(new Animated.Value(0), 1.0))
export default function CardRes({ title, subTitle, image, showCount, count, onPress, style, addStyle, showFavIcon, Animate, noAnimate }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                { Animate && <Animated.View style={{opacity: Animated.add(0.5, Animated.multiply(new Animated.Value(0), 1.0))}}>
                <Image style={styles.img} source={image} />
                </Animated.View>}
                {noAnimate && <Image style={styles.img} source={image} /> }
                {showCount && <View style={styles.count}>
                    <Text style={styles.textCount}>{count}</Text>
                </View>}
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subTitle}</Text>
                    <View style={addStyle}>
                        <Ionicons name="ios-add-sharp" size={28} color={colours.white} />
                    </View>
                    {showFavIcon && <View style={styles.favIcon}>
                        <FavIcon name="heart" color={colours.red}/>
                    </View>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 100,
        // resizeMode:'center'
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
    },
    favIcon: {
        position: 'absolute',
        top: 10,
        paddingLeft: 2,
        marginLeft: 300,
    },
})