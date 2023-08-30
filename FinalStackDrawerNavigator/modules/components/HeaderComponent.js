import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {AppImage} from '../Helpers/Images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function HeaderComponent({onPressNotification}) {
  const navigation = useNavigation();
  const onPressDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressDrawer} style={styles.btn}>
        <Image
          style={{width: 32, height: 32}}
          source={AppImage.drawerNavigationIcon}
        />
      </TouchableOpacity>
      <Image style={{width: 130, height: 45}} source={AppImage.headerLogo} />
      <TouchableOpacity
        onPress={() => navigation.getParent().openDrawer()}
        style={styles.btn}>
        <Image
          style={{width: 32, height: 32}}
          source={AppImage.notificationIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    elevation: 0,
  },
  btn: {
    borderRadius: 32,
    width: 32,
    height: 32,
  },
});
