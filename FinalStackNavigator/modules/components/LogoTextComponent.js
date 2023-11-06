import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppFonts} from '../Helpers/AppFonts';
import {AppColor} from '../Helpers/AppColor';

export default function LogoTextComponent({title = ''}) {
  return (
    <View>
      <Text style={styles.titles}> {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titles: {
    color: AppColor.secondaryColor,
    fontSize: AppFonts.Font16,
    fontWeight: 'bold',
  },
});
