import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppRoutes from '../Helpers/AppRoutes';
import {Home, Profile} from '../screens';

export default function AppContainer() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRoutes.Profile}
        screenOptions={{headerTitle: false}}>
        <Stack.Screen name={AppRoutes.Profile} component={Profile} />
        <Stack.Screen name={AppRoutes.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
