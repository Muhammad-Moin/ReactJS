import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {AppColor} from '../../../Helpers/AppColor';
import {AppImage} from '../../../Helpers/Images';
import LogoComponent from '../../../components/LogoComponent';
import LogoTextComponent from '../../../components/LogoTextComponent';
import InputComponent from '../../../components/InputComponent';
import {AppFonts} from '../../../Helpers/AppFonts';
import ButtonComponent from '../../../components/ButtonComponent';
import {AppRoutes} from '../../../Helpers/AppRoutes';

export default function Signin({navigation}) {
  const {navigate} = navigation;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(toggleCheckBox);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={styles.backgroundImage}
        source={AppImage.SigninBackground}
        resizeMode="cover">
        <ScrollView>
          <View style={styles.logoContainer}>
            <LogoComponent />
            <View style={styles.logoText}>
              <LogoTextComponent title="SIGN IN" />
            </View>
          </View>
          <View style={styles.inputComponent}>
            <InputComponent placeholder="user@email.com" label="Email" />
            <InputComponent
              secureTextEntry={true}
              placeholder="******************************"
              label="Password"
            />
            <View style={styles.rememberForgot}>
              <View style={styles.checkRemContainer}>
                <View>
                  <Ripple
                    onPress={() => setToggleCheckBox(previous => !previous)}>
                    <Image
                      source={
                        toggleCheckBox
                          ? AppImage.checkTrue
                          : AppImage.checkFalse
                      }
                      style={{width: 20, height: 20}}
                    />
                  </Ripple>
                </View>
                <View style={{marginLeft: 15}}>
                  <Text style={styles.rememberText}>Remember me</Text>
                </View>
              </View>
              <View>
                <Text style={styles.forgotPassText}>Forgot password?</Text>
              </View>
            </View>
            <View>
              <ButtonComponent
                onPress={() => navigate(AppRoutes.Dashboard)}
                title="SIGN IN"
              />
            </View>
            <View style={styles.signInUsingContainer}>
              <Text style={styles.signInUsing}> Sign in using</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={AppImage.GoogleIcon}
              />
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={AppImage.FacebookIcon}
              />
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={AppImage.AppleIcon}
              />
            </View>
            <View style={styles.registerContainer}>
              <Text style={styles.register}>
                Don’t have an account? Register now!
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoText: {
    marginTop: 27,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: AppColor.backGroundColor,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 225,
    height: 78,
  },
  inputComponent: {
    marginTop: 130,
    paddingHorizontal: 15,
    gap: 30,
  },

  rememberForgot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberText: {
    color: AppColor.labelColor,
    fontSize: AppFonts.Font16,
  },
  forgotPassText: {
    color: AppColor.orangeColor,
    fontSize: AppFonts.Font16,
    textDecorationLine: 'underline',
  },
  signInUsingContainer: {
    flex: 1,
    alignItems: 'center',
  },
  signInUsing: {
    fontSize: AppFonts.Font16,
    color: AppColor.labelColor,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  icon: {
    width: 40,
    height: 40,
  },
  registerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  register: {
    color: AppColor.orangeColor,
    textDecorationLine: 'underline',
    fontSize: AppFonts.Font16,
    marginBottom: 30,
  },
  checkRemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
