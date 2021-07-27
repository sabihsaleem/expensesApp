import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )
  }
}

export default App;