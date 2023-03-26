import { Button, ImageBackground, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import colours from '../Componants/colours';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

const renderInner = () => (
    <View>
        <Text>Hello</Text>
    </View>
);

const renderHead = () => (
    <View style={styles.headModal}>
        <View style={styles.panelHeader}>
            <View style={styles.panelHandel}>
            </View>
        </View>
    </View>
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailsScreen({ route }) {
    const listing = route.params;
    const modalRef = React.useRef(null);
    const fall = new Animated.Value(1);
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={modalRef}
                snapPoints={[400, 0]}
                renderContent={renderInner}
                renderHeader={renderHead}
                initialSnap={1} callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{ opacity: Animated.add(0.13, Animated.multiply(fall, 1.0)) }}>
                <Image source={listing.image} style={styles.img} />
                <View style={styles.footer}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.subTitle}>{listing.subTitle}</Text>
                    <Button title='click me' onPress={() => modalRef.current?.snapTo(0)} />
                </View>
            </Animated.View>

            {/* <Animated.View style={{ opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) }}>
                <Image source={require('../assets/dounts.jpg')} style={styles.img} />
                <View style={styles.footer}>
                    <Text style={styles.title}>Wakeup Coffee</Text>
                    <Text style={styles.subTitle}>100</Text>
                    <Button title='click me' onPress={() => modalRef.current?.snapTo(0)} />
                </View>
            </Animated.View> */}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.beige
    },
    header: {
        flex: 1,
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
    img: {
        width: windowWidth,
        height: windowHeight / 4,
    },
    footer: {
        padding: 20,
        // opacity: Animated.add(0.6, Animated.multiply(this.fall,1.0))
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        marginVertical: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: colours.darkred,
    },
    blurView: {
        // overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})