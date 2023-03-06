import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet,TouchableOpacity , Text, View } from 'react-native';
import * as React from 'react';
import AppNavigator from './app/navigation/AppNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
