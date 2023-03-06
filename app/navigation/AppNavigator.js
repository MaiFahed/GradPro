import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet,TouchableOpacity , Text, View } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import welcomeScreen from './app/screens/welcomeScreen';

const Discover = ({navigation}) =>(
    <Text>Discover</Text> 
  );
  const Browse = ({navigation}) =>(
    <Text>Browse</Text>
  );
  const Favourites = ({navigation}) =>(
    <Text>Favourites</Text>
  );
  const Bag = ({navigation}) =>(
    <Text>Bag</Text>
  );
  const Me = ({navigation}) =>(
    <Text>Me</Text>
  );

const Tab = createBottomTabNavigator();

const AppNavigator= () => {
  return(                                                      //, headerShown:false
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:"green"}}> 

      <Tab.Screen name="Discover" component={Discover} 
      options={{ tabBarIcon: ({color}) =>
        <AntDesign name="chrome" size={24} color={color} /> }}/>

      <Tab.Screen name="Browse" component={Browse} 
      options={{ tabBarIcon: ({color}) =>
        <SimpleLineIcons name="bag" size={24} color={color} /> }}/>

      <Tab.Screen name="Favourites" component={Favourites} 
      options={{ tabBarIcon: ({color}) =>
        <MaterialIcons name="favorite-outline" size={24} color={color} /> }}/>

      <Tab.Screen name="Me" component={Me}
      options={{ tabBarIcon: ({color}) =>
        <FontAwesome5 name="user-circle" size={24} color={color} />}} />

    </Tab.Navigator>
    );
};

export default AppNavigator;