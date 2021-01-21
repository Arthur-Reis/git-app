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
      <Text style={styles.description}>lorem ipsum dolor sit asdaksdkasdfkas dfjksd</Text>
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
    alignItems: 'flex-start'
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  description: {
    flex: 1,
    maxHeight: 50,
    width: 270,
    fontSize: 15,
    color: '#1a1a1a'
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
