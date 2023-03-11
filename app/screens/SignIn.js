import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetStart from '../Componants/GetStart';
import RegButtons from '../Componants/RegButtons';
import SignUp from './SignUp';
import AppNavigator from '../navigation/AppNavigator';
import colours from '../Componants/colours';

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name='user-o' color={colours.deepBlue} size={20} ></FontAwesome>
                    <TextInput clearButtonMode='always' placeholder='Your email' style={styles.textInput} autoCapitalize='none' />
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name='lock' color={colours.deepBlue} size={20} ></FontAwesome>
                    <TextInput clearButtonMode='always' secureTextEntry={true} placeholder='Your password' style={styles.textInput} autoCapitalize='none' />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.text0} onPress={()=> navigation.navigate("AppNavigator")} >
                        <Text style={{color:colours.darkred,fontSize: 15,fontWeight: "600"}}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signIn} onPress={()=> navigation.navigate("SignUp")} >
                        <Text style={{color:colours.grey}}>You don't have an account? Sign up here.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.green,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: colours.beige,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: colours.white,
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: colours.deepBlue,
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: colours.beige,
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: colours.deepBlue,
    },
    button: {
        alignItems: 'center',
        marginRight: 50,
        marginTop: 50
    },
    signIn: {
        position: 'absolute', 
        paddingLeft: 50, 
        top: 300,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text0: {
        paddingLeft: 20,
        paddingTop: 16,
    },

})