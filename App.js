import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as React from 'react';
// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens from app
import AppNavigator from './app/navigation/AppNavigator'
import SignUp from './app/screens/SignUp';
import SplashScreen from './app/screens/SplashScreen';
import SignIn from './app/screens/SignIn';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SignIn/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='AppNavigator' component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>


    // <SignUp/>
    // <NavigationContainer>
    //   <AppNavigator/>
    // </NavigationContainer>
  );
}
