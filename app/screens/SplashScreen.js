import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
//navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './SignIn';
import { Ionicons } from '@expo/vector-icons';
import GetStart from '../Componants/GetStart';
import colours from '../Componants/colours';

// const Stack = createNativeStackNavigator();
// const MyStack = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="SignIn" component={SignIn} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// const Handlings = () => {
//     const navigation = useNavigation();
//     return (
//         <GetStart title={"Get Started"} onPress={() => navigation.navigate('SignIn', {name: 'SignIn'})} ></GetStart>
//     )
// }


export default function SplashScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="restaurant" size={200} color={colours.white} />
            </View>
            <View style={styles.footer} >
                <Text style={styles.title}>Go4Food</Text>
                <Text style={styles.text}>Sign in with account and join us!</Text>
                <View style={styles.button}>
                    {/* <Handlings/> */}
                    <GetStart title={"Get Started"} onPress={()=> navigation.navigate("SignIn")}></GetStart>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.green
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: colours.beige,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    title: {
        color: colours.deepBlue,
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: colours.grey,
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
})