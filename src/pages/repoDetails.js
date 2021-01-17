import { Button, View, Text, StyleSheet } from 'react-native'
import React from 'react'

const viewStyle = StyleSheet.create({
  repoDetails: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params
  return (
    <View style={viewStyle.repoDetails}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100)
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailsScreen
