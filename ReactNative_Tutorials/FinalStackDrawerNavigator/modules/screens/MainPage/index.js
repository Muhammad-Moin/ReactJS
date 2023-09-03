import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import {AppColor} from '../../Helpers/AppColor';
import {AppFonts} from '../../Helpers/AppFonts';
import {AppRoutes} from '../../Helpers/AppRoutes';
import {AppImage} from '../../Helpers/Images';
import LogoComponent from '../../components/LogoComponent';

export default function MainPage({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={AppImage.HomeBackground}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.logoContainer}>
          <LogoComponent />
        </View>
        <View style={styles.btnContainer}>
          <ButtonComponent
            onPress={() => navigation.navigate(AppRoutes.Signin)}
            titleStyles={styles.title}
            title="SIGN IN "
            extraStyles={styles.signin}
            ti
          />
          <ButtonComponent
            onPress={() => navigation.navigate(AppRoutes.Signup)}
            titleStyles={styles.title}
            title="SIGN UP "
            extraStyles={styles.signup}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: AppColor.backGroundColor,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    bottom: 30,
    paddingHorizontal: 15,
    position: 'absolute',
  },
  title: {
    fontWeight: '700',
    color: AppColor.primaryColor,
    fontSize: AppFonts.Font14,
  },
  signin: {
    height: 70,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  signup: {
    height: 70,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
