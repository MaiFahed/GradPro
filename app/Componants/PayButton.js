import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import colours from './colours';

export default function ApplePayButton({onPress}) {
    return (
      <View>
        <Button
          title="Pay"
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
            name: 'apple',
            color: colours.white,
            size: 24,
          }}
        />
      </View>
    );
  };