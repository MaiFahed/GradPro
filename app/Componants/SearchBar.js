import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.logoStyle}>
             <EvilIcons name="search" size={28} color="grey" style={{position:'absolute',top:12,paddingLeft:10}}/>    
            </TouchableOpacity>
            <TextInput clearButtonMode='always' placeholder='Search'style={styles.searchInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:10,
        paddingTop:15,
        paddingLeft:10,
        width: '80%',
        height: 45,
        backgroundColor: 'white',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderWidth:"1",
        borderColor:'lightgray',
        borderRightColor:"white",
        
    },
    searchInput: {
        fontSize: 16,
    },
    logoStyle: {
        backgroundColor:"white",
        marginLeft:313,
        position:'absolute', 
        top:-1, 
        width:50,
        height:45,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderWidth:"1",
        borderColor:'lightgray',
    },
})