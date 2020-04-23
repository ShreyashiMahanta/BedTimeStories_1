import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
      <TouchableOpacity>WriteScreen</TouchableOpacity>
      <TouchableOpacity>ReadScreen</TouchableOpacity>
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  ReadScreen: ReadScreen,
  WriteScreen: WriteScreen,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createMaterialTopTabNavigator(
  {
    Read: {screens : ReadScreen},
    Write : {screens: WriteScreen},
  })