import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwichScreen } from '../screens/SwichScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextImputScreen } from '../screens/TextImputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
      <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
      <Stack.Screen name="SwichScreen" component={ SwichScreen } />
      <Stack.Screen name="AlertScreen" component={ AlertScreen } />
      <Stack.Screen name="TextImputScreen" component={ TextImputScreen } />
      <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
    </Stack.Navigator>
  );
};
