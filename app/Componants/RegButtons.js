import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
//icons
import { FontAwesome } from '@expo/vector-icons';

export default function RegButtons({ title, onPress}) {
  return (
    <TouchableOpacity style={styles.buttun} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttun: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 50,
  },
  text: {
    color: "darkred",
    paddingLeft:20,
    paddingTop:16,
    fontSize:15, 
    fontWeight:"600"
  },

})