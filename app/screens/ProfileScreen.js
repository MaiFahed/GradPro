import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppButtons from '../Componants/AppButtons'
import RegButtons from '../Componants/RegButtons'

export default function ProfileScreen() {
  return (
    <View style={styles.outer}>
      <View style={styles.name}>
        <Text style={styles.textConst}>Name                                                         Mai Fahed</Text>
      </View>

      <View 
      style={{
      position:'absolute',width:'100%',
       top:170, backgroundColor: "white",
       borderRadius:15, height:50,
       }}>
        <Text style={styles.textConst}>Email                                   maifahed16@gmail.com</Text>

      </View>

      <View 
      style={{
      position:'absolute',width:'100%',
       top:240, backgroundColor: "white",
       borderRadius:15, height:50,
       }}>
        <Text style={styles.textConst}>Phone number                                     0597094458</Text>
      </View>

      <View 
      style={{
      position:'absolute',width:'100%',
       top:310, backgroundColor: "white",
       borderRadius:15, height:50,
       }}>
        <Text style={styles.textConst}>Country                                                           nablus</Text>
      </View>

      <View style={{alignSelf:'center',position:'absolute',width:'100%', top:380}}>
      <RegButtons title="Log out" onPress={()=> console.log("log out")}></RegButtons>
      </View>

    </View>
  )
}

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
    name: {
        flex: 1,
        backgroundColor: "white",
        borderRadius:15,
        width: 100,
        height:50,
    },
    textConst: {
        color: "black",
        paddingLeft:20,
        paddingTop:16,
        fontSize:15, 
    },
    textVar: {
        color: "black",
        paddingLeft:280,
        fontSize:15, 
    },

})