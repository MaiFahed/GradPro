import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
//icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function AppButtons({ title, onPress, icon1, icon2, icon3}) {
  return (
    <TouchableOpacity style={styles.buttun} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      { icon1 && <FontAwesome5 name="user-circle" size={24} color='#009387' style={styles.logoStyle}/>}
      { icon2 && <Ionicons name="help-buoy-outline" size={24} color='#009387' style={styles.logoStyle} />}
      { icon3 && <AntDesign name="checkcircleo" size={24} color='#009387' style={styles.logoStyle}/>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttun: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 70,
  },
  text: {
    color: "black",
    paddingLeft:50,
    paddingTop:25,
    fontSize:15, 
    fontWeight:"600"
  },
  logoStyle: {
    top:-20, 
    paddingLeft:10
  },
})