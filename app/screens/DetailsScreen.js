import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colours from '../Componants/colours'
// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function DetailsScreen({route}) {
     const listing= route.params;
    return (
        // <View style={styles.container}>
        //     <ImageBackground style={styles.header} source={require('../assets/dounts.jpg')} />
        //     <View style={styles.footer}>
        //         <Text style={styles.title}>Wakeup Coffee</Text>
        //         {/* <Text>Sells dounts! </Text> */}
        //         <Text style={styles.subTitle}>100</Text>
        //     </View>
            
        // </View>
        <View style={styles.container}>
            <ImageBackground style={styles.header} source={listing.image} />
            <View style={styles.footer}>
                <Text style={styles.title}>{listing.title}</Text>
                {/* <Text>Sells dounts! </Text> */}
                <Text style={styles.subTitle}>{listing.subTitle}</Text>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 4,
        backgroundColor: colours.beige,
        padding: 20,
        // paddingBottom: 50,
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
    },
    subTitle: {
        marginVertical:10,
        fontSize:17,
        fontWeight:'bold',
        color: colours.darkred,
    }
})