import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Item from '../components/repoSearch'
import call_user from '../api/users'
import SearchBar from '../components/searchBar'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    // getUser().then(setSearchResult)
  }, [])

  const RenderItem = ({ item }) => <Item title={item.login} avatar_url={item.avatar_url} />

  async function getMoreUsers() {
    try {
      setPage(page + 1)
      const { items } = await call_user(`${searchText}`, page + 1)
      const login = items.map((item) => {
        const info = { login: item.login, id: item.id, avatar_url: item.avatarUrl }
        return info
      })
      return login
    } catch (err) {
      console.log('error:' + err)
    }
  }

  async function getUser() {
    try {
      setPage(1)
      const { items } = await call_user(`${searchText}`, 1)
      const login = items.map((item) => {
        const info = { login: item.login, id: item.id, avatar_url: item.avatarUrl }
        return info
      })
      return login
    } catch (err) {
      console.log('error:' + err)
    }
  }

  return (
    <SafeAreaView>
      <FlatList
        data={searchResult}
        renderItem={RenderItem}
        keyExtractor={useCallback((item) => item.id.toString(), [])}
        onEndReachedThreshold={0.01}
        onEndReached={() => getMoreUsers().then((v) => setSearchResult([...searchResult, ...v]))}
        ListHeaderComponent={
          <SearchBar
            initialTextValue={''}
            onChangeText={setSearchText}
            onSubmitEditing={() => {
              getUser().then(setSearchResult)
            }}
          />
        }
      />
    </SafeAreaView>
  )
}

export default App
