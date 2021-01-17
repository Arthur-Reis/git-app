import { Button, View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const viewStyle = StyleSheet.create({
  repoContainer: {
    flex: 1,
    backgroundColor: 'gray'
  }
})

export function repoView({ navigation }) {
  return (
    <View style={viewStyle.repoContainer}>
      <Text>Random Repo</Text>

      <Button
        title="Go to "
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          })
        }}
      />
    </View>
  )
}
