import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet,TouchableOpacity , Text, View } from 'react-native';
import * as React from 'react';
// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens from app
import AppNavigator from './app/navigation/AppNavigator'
import MeUser from './app/screens/MeUser'
import AppButtons from './app/Componants/AppButtons';


export default function App() {
  return (
    // <MeUser/>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
