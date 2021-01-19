import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Item from '../components/repoSearch'
import call_user from '../api/users'
import SearchBar from '../components/searchBar'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    // namesReq().then(setSearchResult)
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
          <SearchBar
            initialTextValue={''}
            onChangeText={setSearchText}
            onSubmitEditing={() => {
              namesReq().then(setSearchResult)
            }}
          />
        }
      />
    </SafeAreaView>
  )
}

export default App
