import { Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import colours from '../Componants/colours';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ApplePayButton from '../Componants/PayButton';
import FavIcon from '../Componants/FavIcon';

//icons
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailsScreen({ route }) {
    const listing = route.params;
    const modalRef = React.useRef(null);
    const fall = new Animated.Value(1);

    const [isOpen, setIsOpen] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const updatePrice = (newQuantity) => {
        setPrice(newQuantity * listing.subTitle);
    }

    const increaseQuantity = () => {
        if (quantity < listing.count) {
            setQuantity(quantity + 1);
            updatePrice(quantity + 1);
        }
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

    const handleFav = () => {
        setIsFavorite(!isFavorite);
    };

    const renderInner = () => (
        <View style={styles.modalInner}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16.5 }}>
                    {listing.title} is offering a new box
                </Text>
            </View>

            <View style={styles.hurryUpTxt}>
                <EvilIcons name="clock" size={24} color={colours.grey} />
                <Text style={{ color: colours.grey }}> Grab it before it's too late!</Text>
            </View>

            <View style={styles.seperator} />

            <Text style={{ fontWeight: 'bold', fontSize: 16.5, margin: 10 }}>Select quantity</Text>

            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decreaseQuantity}>
                    <AntDesign style={quantity === 0 ? styles.disabledQuantityButton : styles.quantityButton}
                        name="minuscircle" size={35} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                    <AntDesign style={quantity === listing.count ? styles.disabledQuantityButton : styles.quantityButton}
                        name="pluscircle" size={35} color={colours.green} />
                </TouchableOpacity>
            </View>

            <Text style={{ color: colours.grey, margin: 27 }}>By reserving this meal you agree to Go4Food's terms</Text>

            <View style={styles.seperator} />
            <Text style={{ fontWeight: '600' }}>Total                                                                         ${price}</Text>
            <View style={styles.seperator} />

            <View style={{ margin: 20 }}>
                <ApplePayButton onPress={() => console.log(quantity)} />
            </View>

            <TouchableOpacity onPress={() => console.log("Other payment methods")}>
                <Text style={{ color: colours.green, fontWeight: 'bold' }}>Other payment methods</Text>
            </TouchableOpacity>

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
                snapPoints={[450, 0]}
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
                <View style={styles.detailsContainer}>
                    <Image source={listing.image} style={styles.img} />

                    <View style={styles.footer}>

                        <Text style={styles.title}>{listing.title}</Text>

                        <View style={styles.favIcon}>
                            <FavIcon name={isFavorite ? "heart" : "heart-o"}
                                color={isFavorite ? colours.red : colours.black}
                                onPress={handleFav} />
                        </View>

                        <Button title='hi' onPress={()=> console.log(isFavorite)}/>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <EvilIcons name="clock" size={24} color={colours.grey} />
                            <Text style={{ color: colours.grey }}> Collect now!</Text>
                        </View>

                        <Text style={styles.subTitle}>{listing.subTitle}</Text>

                        <Button title='click me' onPress={toggleBottomSheet} />
                    </View>
                </View>


            </Animated.View>
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
        margin: 10,
        padding: 10
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
    detailsContainer: {
        flexDirection: 'column',
    },
    modalInner: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.beige
        // top: 50,
    },
    hurryUpTxt: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 9
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 10,
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
    seperator: {
        height: 1,
        width: '85%',
        backgroundColor: colours.halfgray,
        margin: 7
    },
    favIcon: {
        // marginLeft: windowWidth / 3.3,
        // position: 'absolute',
        // top: -25
        marginLeft: windowWidth / 1.25,
        position: 'absolute',
        top: 3
    }
})