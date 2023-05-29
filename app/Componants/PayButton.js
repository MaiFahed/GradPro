import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import colours from './colours';

export default function ApplePayButton({onPress, title}) {
    return (
      <View>
        <Button
          title={title}
          type="solid"
          onPress={onPress}
          buttonStyle={{
            backgroundColor: colours.black,
            borderRadius: 20,
            height: 44,
            width: 340
          }}
          icon={{
            type: 'font-awesome',
            name: 'shopping-bag',
            color: colours.white,
            size: 24,
          }}
        />
      </View>
    );
  };