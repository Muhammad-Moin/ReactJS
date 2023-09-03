import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerHeaderComponent from './DrawerHeaderComponent';
import {AppImage} from '../Helpers/Images';
import {DrawerActions} from '@react-navigation/native';
import {AppColor} from '../Helpers/AppColor';
import {AppFonts} from '../Helpers/AppFonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppRoutes} from '../Helpers/AppRoutes';

function SubHeader({title, style}) {
  return (
    <View style={[subHeaderStyles.container, style]}>
      <Text style={subHeaderStyles.title}>{title}</Text>
    </View>
  );
}
const subHeaderStyles = StyleSheet.create({
  container: {
    height: 25,
    backgroundColor: AppColor.drawerBackgroundColor,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    color: AppColor.white,
    fontWeight: 'bold',
    fontSize: AppFonts.Font11,
    textTransform: 'uppercase',
  },
});

function NotificationComponent({title, subtitle, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.MainPage)}>
      <View style={notificationComponentStyle.container}>
        <Image
          style={notificationComponentStyle.image}
          source={AppImage.notificationProfileIcon}
        />
        <View style={{marginLeft: 20}}>
          <Text style={notificationComponentStyle.title}>{title}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={notificationComponentStyle.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const notificationComponentStyle = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: AppFonts.Font10,
    fontWeight: 'bold',
    color: AppColor.white,
  },
  subtitle: {
    maxWidth: '85%',
    fontSize: AppFonts.Font14,
    fontWeight: 'bold',
    color: AppColor.white,
  },
});
export default function RightDrawerComponent(props) {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeaderComponent
        title={'NOTIFICATION'}
        leftIcon={AppImage.closeIcon}
        rightIcon={AppImage.settingIcon}
        onPressLeft={() => navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <SubHeader style={{marginTop: 20}} title={'morning moment'} />
      <Image style={styles.imgContainer} source={AppImage.notificationImage} />
      <SubHeader style={{marginTop: 2}} title={'Talk to a coach'} />
      <NotificationComponent
        navigation={navigation}
        title={'Alex Miles'}
        subtitle={'Lorem ipsum dolor sit ...'}
      />
      <SubHeader style={{marginTop: 2}} title={'Group messages'} />
      <NotificationComponent
        navigation={navigation}
        title={'Alex Miles'}
        subtitle={'Lorem ipsum dolor sit ...'}
      />
      <NotificationComponent
        navigation={navigation}
        title={'Alex Miles'}
        subtitle={'Lorem ipsum dolor sit ...'}
      />
      <NotificationComponent
        navigation={navigation}
        title={'Alex Miles'}
        subtitle={'Lorem ipsum dolor sit ...'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    marginTop: 2,
    height: 120,
    width: '100%',
    resizeMode: 'stretch',
  },
});
