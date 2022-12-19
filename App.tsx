import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GameScreen from './src/screen/GameScreen'
import MenuScreen from './src/screen/MenuScreen'
import GameViewModel from './src/screen/ViewModel'

const Stack = createNativeStackNavigator()

export default function App() {
  const viewModel = new GameViewModel()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Menu'
          component={MenuScreen}
          initialParams={{ viewModel }}
        />
        <Stack.Screen
          name='Game'
          component={GameScreen}
          initialParams={{ viewModel }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
