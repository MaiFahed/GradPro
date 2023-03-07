import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens from app
import AppButtons from '../Componants/AppButtons'
import ProfileScreen from './ProfileScreen'
//icons
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.outer}>
      <View style={styles.moneySaved}>
        <Text style={{paddingLeft:'33%',paddingTop:20, fontSize:20, fontWeight:"600"}}>Money Saved</Text>
        <Text style={{paddingLeft:'45%',paddingTop:10, fontSize:20,color:"darkgreen", fontWeight:"600"}}>$40</Text>
      </View>

      <View style={{alignSelf:'center',position:'absolute',width:'100%', top:210}}>
      <AppButtons title="Account Details" icon1={true} icon2={false} icon3={false} onPress={()=> navigation.navigate("ProfileScreen")}
      ></AppButtons>
      </View>

      <View style={{alignSelf:'center',position:'absolute',width:'100%', top:290}}>
      <AppButtons title="Help Center" icon1={false} icon2={true} icon3={false} onPress={()=> console.log("help center")}></AppButtons>
      </View>

      <View style={{alignSelf:'center',position:'absolute',width:'100%', top:370}}>
      <AppButtons title="Terms and Conditions" icon1={false} icon2={false} icon3={true} onPress={()=> console.log("terms")}></AppButtons>
      </View>

      <View style={{alignSelf:'center',position:'absolute', top:500, alignItems:'center'}}> 
      <Ionicons name="restaurant" size={70} color="darkgreen" />
      <Text style={styles.text}>Are you a store owner?</Text>
      <Text style={styles.text}>Join Go4Food and reduce food waste.</Text>
      </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
  outer: {
    paddingTop:100,
    paddingLeft:20,
    paddingRight:20,
    flex: 1,
    backgroundColor: "#F9F1E8",
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    
  },
  moneySaved: {
    flex: 1,
    backgroundColor: "white",
    borderRadius:15,
    width: 100,
    height:100,
  },
  text: {
    color:'#58534E',
    fontWeight:"600",
  }
})