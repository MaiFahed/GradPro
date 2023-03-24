import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetStart from '../Componants/GetStart';
import RegButtons from '../Componants/RegButtons';
import colours from '../Componants/colours';
import { Formik } from 'formik';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().max(10).label("First name"),
    lastName: Yup.string().required().max(10).label("Last name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    country: Yup.string().required().label("Location"),
    phoneNumber: Yup.string().required().label("Phone number"),
});

export default function SignIn() {
    const [location, setLocation]= useState();

    const getLocation=  ()=> {
        const { granted } =  Location.requestBackgroundPermissionsAsync();
        if(!granted) return;
        const {coords : { latitude, longitude}} = Location.getLastKnownPositionAsync(); // or current position
        setLocation({ latitude, longitude})
    }

    useEffect( ()=>{
       getLocation();
    }, [])

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView>

                <Formik initialValues={{ firstName:'', lastName:'', email:'', password:'', country:'', phoneNumber:'' }}
                    onSubmit={values => console.log(location)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <Text style={[styles.text_footer, { marginTop: 13 }]}>First name</Text>
                            <View style={styles.action}>
                                {/* <FontAwesome name='user-o' color='#05375a' size={20} ></FontAwesome> */}
                                <TextInput onBlur={()=> setFieldTouched("firstName")} onChangeText={handleChange("firstName")} clearButtonMode='always' placeholder='your first name' style={styles.textInput} autoCapitalize='none' />
                            </View>

                            { touched.firstName && <Text style={{ color: colours.darkred }}>{errors.firstName}</Text>}

                            <Text style={[styles.text_footer, { marginTop: 15 }]}>Last name</Text>
                            <View style={styles.action}>
                                {/* <FontAwesome name='user-o' color='#05375a' size={20} ></FontAwesome> */}
                                <TextInput onBlur={()=> setFieldTouched("lastName")} onChangeText={handleChange("lastName")} clearButtonMode='always' placeholder='your last name' style={styles.textInput} autoCapitalize='none' />
                            </View>

                            { touched.lastName && <Text style={{ color: colours.darkred }}>{errors.lastName}</Text>}


                            <Text style={[styles.text_footer, { marginTop: 15 }]}>Email</Text>
                            <View style={styles.action}>
                                <FontAwesome name='user-o' color='#05375a' size={20} ></FontAwesome>
                                <TextInput onBlur={()=> setFieldTouched("email")} onChangeText={handleChange("email")} clearButtonMode='always' placeholder='your email' style={styles.textInput} autoCapitalize='none' />
                            </View>

                            { touched.email && <Text style={{ color: colours.darkred }}>{errors.email}</Text>}


                            <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
                            <View style={styles.action}>
                                <FontAwesome name='lock' color='#05375a' size={20} ></FontAwesome>
                                <TextInput onBlur={()=> setFieldTouched("password")} onChangeText={handleChange("password")} clearButtonMode='always' secureTextEntry={true} placeholder='your password' style={styles.textInput} autoCapitalize='none' />
                            </View>

                            { touched.password && <Text style={{ color: colours.darkred }}>{errors.password}</Text>}


                            <Text style={[styles.text_footer, { marginTop: 15 }]}>Phone number</Text>
                            <View style={styles.action}>
                                <Feather name="phone" size={20} color='#05375a' />
                                <TextInput onBlur={()=> setFieldTouched("phoneNumber")} onChangeText={handleChange("phoneNumber")} clearButtonMode='always' keyboardType='numeric' placeholder='your phone number' style={styles.textInput} autoCapitalize='none' />
                            </View>

                            { touched.phoneNumber && <Text style={{ color: colours.darkred }}>{errors.phoneNumber}</Text>}


                            <Text style={[styles.text_footer, { marginTop: 15 }]}>Country</Text>
                            <View style={styles.action}>
                                <FontAwesome name="location-arrow" size={20} color={colours.deepBlue} />
                                <TextInput onBlur={()=> setFieldTouched("country")} onChangeText={handleChange("country")} clearButtonMode='always' placeholder='your country' style={styles.textInput} autoCapitalize='none' />
                            </View>

                            { touched.country && <Text style={{ color: colours.darkred }}>{errors.country}</Text>}


                            <View style={styles.button} >
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Text style={styles.text0}>Sign Up</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate("SignIn")} >
                                    <Text style={{ color: colours.grey }}>Already have an account? Sign in here.</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.green
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
        marginTop: 5,
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
        position: 'absolute',
        paddingLeft: 50,
        top: 70
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text0: {
        color: colours.darkred,
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 15,
        fontWeight: "600"
    },

})