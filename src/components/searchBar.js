import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

function SearchBar({ initialTextValue, onChangeText, onSubmitEditing }) {
  return (
    <View style={styles.bar}>
      <TextInput onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}>
        {initialTextValue}{' '}
      </TextInput>
      <Button
        title="Search"
        color="#841584"
        accessibilityLabel="Search button"
        onPress={onSubmitEditing}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#bdbdbd',
    marginTop: 2,
    marginBottom: 10,
    marginHorizontal: '2%'
  }
})

export default SearchBar
