import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function SmpTest() {
    const navigation = useNavigation();
  return (
    <View style={{position:"absolute", top:'300'}}>
      <Text>SmpTest</Text>
      <Button title='Hello' />
    </View>
  )
}

const styles = StyleSheet.create({})