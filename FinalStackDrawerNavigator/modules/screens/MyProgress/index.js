import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MyProgress() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <HeaderComponent />
      <Text>Progress</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
