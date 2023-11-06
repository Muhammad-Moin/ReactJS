import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppImage} from '../Helpers/Images';
import {AppFonts} from '../Helpers/AppFonts';
import {AppColor} from '../Helpers/AppColor';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import DrawerHeaderComponent from './DrawerHeaderComponent';

function Sererator() {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: AppColor.drawerBackgroundColor,
      }}>
      <Text>asdasdsdasdas</Text>
    </View>
  );
}

const LeftDrawerComponent = React.memo(props => {
  // const [selectedLink, setSelectedLink] = useState(1);
  // const handleLinkClick = (id, component) => {
  //   navigation.navigate(component);
  //   // setSelectedLink(id);
  // };

  // const links = [
  //   {
  //     id: 1,
  //     name: 'My dashboard',
  //     component: 'MyDashboard',
  //   },
  //   {
  //     id: 2,
  //     name: 'My BLAQUE Movement',
  //     component: 'MyBlaqueMovement',
  //   },
  //   {
  //     id: 3,
  //     name: 'Talk to a coach',
  //     component: 'TalkToACoach',
  //   },
  //   {
  //     id: 4,
  //     name: 'My Progress',
  //     component: 'MyProgress',
  //   },
  //   {
  //     id: 5,
  //     name: 'Calendar',
  //     component: 'Calendar',
  //   },
  //   {
  //     id: 6,
  //     name: 'Group Chat',
  //     component: 'GroupChat',
  //   },
  //   {
  //     id: 7,
  //     name: 'My profile',
  //     component: 'MyProfile',
  //   },
  //   {
  //     id: 8,
  //     name: 'Blaque newsletter',
  //     component: 'BlaqueNewsletter',
  //   },
  //   {
  //     id: 9,
  //     name: 'Settings',
  //     component: 'Settings',
  //   },
  // ];
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeaderComponent
        title={'MENU'}
        leftIcon={AppImage.logoutIcon}
        rightIcon={AppImage.closeIcon}
        onPressRight={() =>
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }
      />
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={AppImage.profileIcon} />
        <Text style={styles.profileText}>Anita Hendrix</Text>
      </View>
      {/* <ScrollView style={styles.navigationContainer}>
        {links.map((link, index) => {
          const {id, name, component} = link;
          return (
            <View key={id}>
              <TouchableOpacity
                onPress={() => handleLinkClick(id, component)}
                style={
                  selectedLink === id
                    ? styles.selectedStyles
                    : styles.navigationItems
                }>
                <Text
                  style={[
                    styles.navigationText,
                    {
                      color:
                        selectedLink === id
                          ? AppColor.primaryColor
                          : AppColor.white,
                    },
                  ]}>
                  {name}
                </Text>
              </TouchableOpacity>
              <Sererator />
            </View>
          );
        })}
      </ScrollView> */}

      <DrawerContentScrollView {...props}>
        <View style={{alignItems: 'center'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <LinearGradient
        colors={['#EABE50', '#E07847']} // Array of colors for the gradient
        start={{x: 0, y: 0}} // Starting point (0,0 is top left)
        end={{x: 1, y: 1}} // Ending point (1,0 is top right)
      >
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            Complete your intake screen to personalize your plan!
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
});
export default LeftDrawerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navigationContainer: {
    marginTop: 50,
  },

  navigationItems: {
    justifyContent: 'center',
    backgroundColor: '#4C443F',
    height: 54,
    paddingLeft: 20,
  },
  navigationText: {
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 64,
  },
  profileImage: {
    width: 100,
    height: 100,
  },

  profileText: {
    fontSize: AppFonts.Font18,
    fontWeight: '600',
    color: AppColor.white,
  },
  selectedStyles: {
    justifyContent: 'center',
    height: 54,
    paddingLeft: 20,
    backgroundColor: AppColor.checkColor,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    height: 60,
  },
  bottomText: {
    fontSize: AppFonts.Font14,
    fontWeight: 'bold',
    color: AppColor.white,
    textAlign: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10,
  },
});
