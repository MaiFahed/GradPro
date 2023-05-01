import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import DiscoverScreen from '../screens/DiscoverScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SmpTest from '../screens/SmpTest';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';

// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false, animation: 'fade_from_bottom'}} >
      <Stack.Screen name='Discover' component={DiscoverScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
    </Stack.Navigator> 
);

export default FeedNavigator;
