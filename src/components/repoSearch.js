import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})

export default Item
