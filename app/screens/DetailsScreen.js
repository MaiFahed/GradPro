import { Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import colours from '../Componants/colours';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ApplePayButton from '../Componants/PayButton';
import FavIcon from '../Componants/FavIcon';
import RegButtons from '../Componants/RegButtons';
//icons
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailsScreen({ route }) {
    const listing = route.params;
    const modalRef = React.useRef(null);
    const fall = new Animated.Value(1);

    const ingRef = React.useRef(null);
    const ingFall = new Animated.Value(1);

    const [isOpen, setIsOpen] = useState(true);
    const [ingisOpen, ingsetIsOpen] = useState(true);
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

    const ingtoggleBottomSheet = () => {
        ingsetIsOpen(!ingisOpen);
        ingRef.current?.snapTo(!ingisOpen ? 1 : 0);
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

    const ingrenderInner = () => (
        <View style={styles.ingmodalInner}>
            <FontAwesome5 name="surprise" size={70} color={colours.grey} />
            <Text style={{ fontWeight: 'bold', fontSize: 16.5, top: 25 }}>
                Your bag is a surprise
            </Text>
            <View style={{ backgroundColor: colours.beige, top: 40, width: 500, height: 200 }}>
                <Text style={{ fontSize: 14, textAlign: 'center', paddingRight: 100, paddingLeft: 100 }}>
                    We wish we could tell you what exactly will be in your surprise bag, but it's
                    always a surprise! The store will fill it with a selection of their unsold items.
                    If you have questions about ingredients, please ask the store.
                </Text>
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
            <BottomSheet
                ref={ingRef}
                snapPoints={[300, 0]}
                renderContent={ingrenderInner}
                renderHeader={renderHead}
                initialSnap={1}
                callbackNode={ingFall}
                animateOnMount={false}
                enabledGestureInteraction={true}
                onCloseEnd={() => ingsetIsOpen(true)}
            />
            <Animated.View style={{
                opacity:
                    Animated.add(0.13, Animated.multiply(new Animated.Value(ingisOpen ? 1 : 0), 1.0))
            }}>
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

                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', top: 10 }}>
                                <AntDesign name="inbox" size={24} color={colours.darkgreen} />
                                <Text style={{ color: colours.black }}> Magic Box Mini</Text>
                            </View>*/}

                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', top: 5 }}>
                                <MaterialCommunityIcons name="hand-coin-outline" size={24} color={colours.darkgreen} />
                                <Text style={{ textDecorationLine: 'line-through', color: colours.black, fontSize: 15, textAlign: 'right' }}>
                                    {listing.oldPrice}$ 
                                </Text>
                                <Text style={styles.subTitle}>   {listing.subTitle}$</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', top: 13 }}>
                                <Feather name="clock" size={20} color={colours.darkgreen} />
                                <Text style={{ color: colours.black }}> Collect: {listing.collect}</Text>
                            </View>

                            <View style={styles.fullSeperator} />

                            <Text style={{ top: 45, fontWeight: 'bold', fontSize: 12 }}>WHAT COULD YOU GET?</Text>

                            <Text numberOfLines={2} style={{ top: 53, }}>In your Magic box you can find fried chicken,
                                fries and many other surprise products. </Text>

                            <TouchableOpacity style={styles.ingredients} onPress={ingtoggleBottomSheet} >
                                <Text style={styles.innerIng}>Ingredients & allergens</Text>
                            </TouchableOpacity>

                            <Text style={{ top: 90, paddingLeft: windowWidth / 4.5, fontWeight: 'bold', fontSize: 12 }}>
                                WHAT OTHER PEOPLE ARE SAYING
                            </Text>

                            <Text style={{ top: 100, paddingLeft: windowWidth / 2.8, fontWeight: 'bold', }}>
                                <AntDesign name="staro" size={30} color={colours.darkgreen} />
                                <Text style={{ color: colours.black, fontSize: 28 }}> {listing.rate} / 5</Text>
                            </Text>

                            <View style={[styles.seperator, { backgroundColor: 'lightgray', top: windowHeight / 8.8, width: '60%', marginLeft: 80 }]} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth / 3, top: 105 }}>
                                <FontAwesome5 name="smile-wink" size={24} color={colours.darkgreen} />
                                <Text style={{ color: colours.black }}>    Friendly Staff</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth / 3, top: 109 }}>
                                <FontAwesome5 name="coins" size={24} color={colours.darkgreen} />
                                <Text style={{ color: colours.black }}>    Great Value</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth / 3.1, top: 110 }}>
                                <MaterialCommunityIcons name="clock-fast" size={30} color={colours.darkgreen} />
                                <Text style={{ color: colours.black }}>    Quick collection</Text>
                            </View>

                            <View style={{ top: 130 }}>
                                <RegButtons title={"Reserve"} onPress={toggleBottomSheet} />
                            </View>

                            <View style={{ top: 140 }}>
                                <RegButtons title={"Donate"} onPress={()=>console.log("donate")} />
                            </View>

                        </View>
                    </View>

                </Animated.View>
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
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 15,
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
    ingmodalInner: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.beige,
        padding: 20,
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
    fullSeperator: {
        position: 'absolute',
        height: 1,
        width: windowWidth,
        top: 114,
        backgroundColor: colours.lightgray,
    },
    favIcon: {
        marginLeft: windowWidth / 1.25,
        position: 'absolute',
        top: 20
    },
    ingredients: {
        backgroundColor: colours.beige,
        borderWidth: 2,
        borderColor: colours.lightgray,
        borderStyle: 'dashed',
        width: '100%',
        height: 50,
        top: 70,
    },
    innerIng: {
        color: "darkred",
        paddingLeft: windowWidth / 4,
        paddingTop: 15,
        fontSize: 15,
        fontWeight: "600"
    },
})