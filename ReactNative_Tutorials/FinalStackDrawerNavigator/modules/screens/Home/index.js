import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppImage} from '../../Helpers/Images';
import {useNavigation} from '@react-navigation/native';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <HeaderComponent />
      <View>
        <Image
          style={{height: 107, width: '100%'}}
          source={AppImage.morningMoments}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
