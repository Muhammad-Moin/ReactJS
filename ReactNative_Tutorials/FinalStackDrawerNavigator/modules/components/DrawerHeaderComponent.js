import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppFonts} from '../Helpers/AppFonts';
import {AppColor} from '../Helpers/AppColor';

export default function DrawerHeaderComponent({
  title,
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
}) {
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPressLeft}>
          <Image style={styles.Image} source={leftIcon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.menuText}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onPressRight}>
          <Image style={styles.Image} source={rightIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: AppFonts.Font16,
    fontWeight: 'bold',
    color: AppColor.white,
  },
});
