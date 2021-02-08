import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native'

const Item = ({ title, avatar_url }) => (
  <TouchableWithoutFeedback onPress={() => Linking.openURL(`https://github.com/${title}`)}>
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
  </TouchableWithoutFeedback>
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
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 360,
    marginRight: 10,
    marginLeft: 5,
    marginVertical: 12.5
  }
})

export default Item
