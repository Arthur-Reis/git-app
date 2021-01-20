import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Item = ({ title, avatar_url }) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: `${avatar_url}`
      }}
      style={styles.image}
    />
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    width: '96%',
    height: 100,
    marginBottom: 10,
    marginHorizontal: '2%',
    alignItems: 'center'
  },
  title: {
    fontSize: 32
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 360,
    marginRight: 10,
    marginLeft: 5
  },
  text: {}
})

export default Item
