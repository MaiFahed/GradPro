import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import colours from './colours';
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
    backgroundColor: colours.green,
    borderRadius: 25,
    height: 50,
  },
  text: {
    color: colours.white,
    textAlign:'center',
    paddingTop:10,
    fontSize:20, 
    fontWeight:"600"
  },

})