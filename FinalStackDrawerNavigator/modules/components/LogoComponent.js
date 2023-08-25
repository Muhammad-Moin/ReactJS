import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {AppImage} from '../Helpers/Images';

export default function LogoComponent() {
  return (
    <Image style={styles.logo} resizeMode="cover" source={AppImage.Logo} />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 225,
    height: 78,
  },
});
