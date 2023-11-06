import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import AppRoutes from '../Helpers/AppRoutes';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  var initialRoute = AppRoutes.Home;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerTitle: false,
        }}>
        <Stack.Screen name={AppRoutes.Home} component={Home} />
        <Stack.Screen name={AppRoutes.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
