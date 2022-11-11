import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { HomeScreen } from './src/screens/HomeScreen'
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App
