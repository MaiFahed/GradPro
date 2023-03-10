import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function AppTextInput({ icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialIcons name="email" size={24} color="darkgreen" style={styles.icon} />}
            <TextInput  style={styles.text} {...otherProps} />
        </View>
    ) //securetextentry password
      // keyboard
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 15,
        height: 60,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:100
    },
    text: {
        color:'#4D4B48',
        fontSize:18,
    },
    icon:{
        marginTop:3,
        marginRight:10,
    }
})