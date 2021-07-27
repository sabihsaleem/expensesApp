import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Menu} from '../screens';
const Stack = createStackNavigator();

// Create the navigator
export default function Navigation() {
  return (
    <Stack.Navigator mode="modal" headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}
