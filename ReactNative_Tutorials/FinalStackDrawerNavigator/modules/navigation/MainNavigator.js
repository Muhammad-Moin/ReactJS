import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Dashboard, Home, MainPage, Signin, Signup} from '../screens';
import {AppRoutes} from '../Helpers/AppRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function AppContainer() {
  const Stack = createNativeStackNavigator();
  var initialroutes = AppRoutes.Dashboard;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialroutes}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={AppRoutes.Dashboard}
          component={Dashboard}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={AppRoutes.MainPage}
          component={MainPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={AppRoutes.Signin}
          component={Signin}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={AppRoutes.Signup}
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
