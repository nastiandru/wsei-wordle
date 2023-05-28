import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import MenuScreen from '../screens/MenuScreen';
import GameScreen from '../screens/GameScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Splash">
        <Screen name="Splash" component={SplashScreen} />
        <Screen name="Menu" component={MenuScreen} />
        <Screen name="Game" component={GameScreen} />
        <Screen name="About" component={AboutScreen} />
        <Screen name="Settings" component={SettingsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}


