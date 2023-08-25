import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {AppColor} from '../Helpers/AppColor';
import {AppFonts} from '../Helpers/AppFonts';

export default function ButtonComponent({
  title = '',
  onPress,
  extraStyles,
  titleStyles,
  navigation,
}) {
  return (
    <Ripple onPress={onPress} style={[styles.btn, extraStyles]}>
      <Text style={[styles.text, titleStyles]}>{title}</Text>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCCAB6',
    borderRadius: 10,
    height: 70,
  },
  text: {
    color: AppColor.primaryColor,
    fontWeight: 'bold',
    fontSize: AppFonts.Font14,
  },
});
