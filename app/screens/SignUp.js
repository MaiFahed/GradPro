import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetStart from '../Componants/GetStart';
import RegButtons from '../Componants/RegButtons';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <View style={styles.footer}>

                <Text style={[styles.text_footer, { marginTop: 13 }]}>First name</Text>
                <View style={styles.action}>
                    {/* <FontAwesome name='user-o' color='#05375a' size={20} ></FontAwesome> */}
                    <TextInput placeholder='your first name' style={styles.textInput} autoCapitalize='none' />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>Last name</Text>
                <View style={styles.action}>
                    {/* <FontAwesome name='user-o' color='#05375a' size={20} ></FontAwesome> */}
                    <TextInput placeholder='your last name' style={styles.textInput} autoCapitalize='none' />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name='user-o' color='#05375a' size={20} ></FontAwesome>
                    <TextInput placeholder='your email' style={styles.textInput} autoCapitalize='none' />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name='lock' color='#05375a' size={20} ></FontAwesome>
                    <TextInput secureTextEntry={true} placeholder='your password' style={styles.textInput} autoCapitalize='none' />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>Phone number</Text>
                <View style={styles.action}>
                    <Feather name="phone" size={20} color='#05375a' />
                    <TextInput keyboardType='numeric' placeholder='your phone number' style={styles.textInput} autoCapitalize='none' />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>Country</Text>
                <View style={styles.action}>
                    <FontAwesome name="location-arrow" size={20} color='#05375a' />
                    <TextInput placeholder='your country' style={styles.textInput} autoCapitalize='none' />
                </View>

                

                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text0}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signIn} >
                        <Text style={{ color: "grey", position: 'absolute', paddingLeft: 50, top: 30 }}>Already have an account? Sign in here.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: "#F9F1E8",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginRight: 50,
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text0: {
        color: "darkred",
        paddingLeft: 20,
        paddingTop: 0,
        fontSize: 15,
        fontWeight: "600"
    },

})