import { Button, ImageBackground, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import colours from '../Componants/colours';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

//icons
import { AntDesign } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailsScreen({ route }) {
    const listing = route.params;
    const modalRef = React.useRef(null);
    const fall = new Animated.Value(1);


    const [isOpen, setIsOpen] = useState(true);

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const updatePrice = (newQuantity) => {
        setPrice(newQuantity * listing.subTitle);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        updatePrice(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            updatePrice(quantity - 1);
        }
    };

    const toggleBottomSheet = () => {
        setIsOpen(!isOpen);
        modalRef.current?.snapTo(!isOpen ? 1 : 0);
    };

    const renderInner = () => (
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity}>
                <AntDesign style={quantity === 0 ? styles.disabledQuantityButton : styles.quantityButton}
                    name="minuscircle" size={35} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
                <AntDesign name="pluscircle" size={35} color={colours.green} />
            </TouchableOpacity>
            <View style={{ top: 100, position: 'absolute', paddingLeft: 10 }}>
                <Text>Total price is ${price}</Text>
            </View>
        </View>
    );

    const renderHead = () => (
        <View style={styles.headModal}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandel} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <BottomSheet
                ref={modalRef}
                snapPoints={[400, 0]}
                renderContent={renderInner}
                renderHeader={renderHead}
                initialSnap={1}
                callbackNode={fall}
                animateOnMount={false}
                enabledGestureInteraction={true}
                onCloseEnd={() => setIsOpen(true)}
            />
            <Animated.View style={{
                opacity:
                    Animated.add(0.13, Animated.multiply(new Animated.Value(isOpen ? 1 : 0), 1.0))
            }}>
                <Image source={listing.image} style={styles.img} />
                <View style={styles.footer}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.subTitle}>{listing.subTitle}</Text>
                    <Button title='click me' onPress={toggleBottomSheet} />
                </View>
            </Animated.View>

            {/* <Animated.View style={{
                opacity:
                    Animated.add(0.13, Animated.multiply(new Animated.Value(isOpen ? 1 : 0), 1.0))
            }}>
                <Image source={require('../assets/dounts.jpg')} style={styles.img} />
                <View style={styles.footer}>
                    <Text style={styles.title}>Wakeup Coffee</Text>
                    <Text style={styles.subTitle}>100</Text>
                    <Button title='click me' onPress={toggleBottomSheet} />
                </View>
            </Animated.View> */}


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.beige,
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
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
    },
    quantity: {
        marginHorizontal: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },
    quantityButton: {
        color: colours.green
    },
    disabledQuantityButton: {
        color: colours.lightgray
    },
})