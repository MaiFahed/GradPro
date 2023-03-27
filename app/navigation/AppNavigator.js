import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet,TouchableOpacity , Text, View } from 'react-native';
import * as React from 'react';
// navs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens from app
import AppButtons from '../Componants/AppButtons';
import ProfileScreen from '../screens/ProfileScreen';
import MeUser from '../screens/MeUser'
import DiscoverScreen from '../screens/DiscoverScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FeedNavigator from './FeedNavigator';
//icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// const Discover = ({navigation}) =>(
//   <View style={styles.outer}/>
//   );
  
  const Browse = ({navigation}) =>(
    <View style={styles.outer}/>
  );
  
  const Favourites = ({navigation}) =>(
    <View style={styles.outer}/>
  );

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
})

const Stack = createNativeStackNavigator();
const MyStack = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='MeUser' component={MeUser} />
    <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
  </Stack.Navigator> 
);

const Tab = createBottomTabNavigator();

const AppNavigator= () => {
  return(                                                      
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#009387', headerShown:false}} > 

      <Tab.Screen name="DiscoverFeed" component={FeedNavigator} 
      options={{ tabBarIcon: ({color}) =>
        <AntDesign name="chrome" size={24} color={color} /> }}/>

      <Tab.Screen name="Browse" component={Browse} 
      options={{ tabBarIcon: ({color}) =>
        <SimpleLineIcons name="bag" size={24} color={color} /> }}/>

      <Tab.Screen name="Favourites" component={Favourites} 
      options={{ tabBarIcon: ({color}) =>
        <MaterialIcons name="favorite-outline" size={24} color={color} /> }}/>

      <Tab.Screen name="Me" component={MyStack}
      options={{ tabBarIcon: ({color}) =>
        <FontAwesome5 name="user-circle" size={24} color={color} />}} />

    </Tab.Navigator>
    );
};


export default AppNavigator;

