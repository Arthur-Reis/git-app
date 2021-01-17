import * as React from 'react'
import { useEffect } from 'react'
import request from './api/interceptors'
import call_user from './api/users'
import call_repo from './api/repository'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DetailsScreen from './pages/repoDetails'
import homeScreen from './pages/homeScreen'

const Stack = createStackNavigator()

function App() {
  //
  useEffect(() => {
    const  a = request.get('search/users?q=' + 'rocketSeat' + '+in:user').then(({ data : {items} }) => (items))
    console.log(a)
    console.log('ok')
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
