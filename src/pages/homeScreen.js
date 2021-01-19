import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView, FlatList, TextInput } from 'react-native'
import Item from '../components/repoSearch'
import call_user from '../api/users'

const App = () => {
  const [searchText, setSearchText] = useState('Arthur')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    namesReq().then(setSearchResult)
  }, [])

  const RenderItem = ({ item }) => <Item title={item.login} />

  async function namesReq() {
    const { items } = await call_user(`${searchText}`)
    const login = items.map((item) => {
      const info = { login: item.login, id: item.id }
      return info
    })
    return login
  }

  return (
    <SafeAreaView>
      <FlatList
        data={searchResult}
        renderItem={RenderItem}
        keyExtractor={useCallback((item) => item.id.toString(), [])}
        ListHeaderComponent={
          <TextInput
            onChangeText={setSearchText}
            onSubmitEditing={() => {
              namesReq().then(setSearchResult)
            }}>
            Arthur
          </TextInput>
        }
      />
    </SafeAreaView>
  )
}

export default App
