import {View, Text, Button} from 'react-native';
import React from 'react';
import AppRoutes from '../../Helpers/AppRoutes';

export default function Profile({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate(AppRoutes.Home)}
      />
    </View>
  );
}
