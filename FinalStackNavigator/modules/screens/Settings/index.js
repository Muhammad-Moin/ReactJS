import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppImage} from '../../Helpers/Images';

export default function Settings() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <HeaderComponent />
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <View style={{}}>
          <Image style={{width: 14, height: 14}} source={AppImage.backIcon} />
          <Image style={{width: 14, height: 14}} source={AppImage.nextIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
