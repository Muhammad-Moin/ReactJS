import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppRoutes} from '../../Helpers/AppRoutes';
import {
  BlaqueNewsletter,
  Calendar,
  GroupChat,
  Home,
  MyBlaqueMovement,
  MyProfile,
  MyProgress,
  Settings,
  TalkToACoach,
} from '../../screens';
import {AppColor} from '../../Helpers/AppColor';
import MyDashboard from '../MyDashboard';
import {AppFonts} from '../../Helpers/AppFonts';
import LeftDrawerComponent from '../../components/LeftDrawerComponent';
import RightDrawerComponent from '../../components/RightDrawerComponent';
import {AppImage} from '../../Helpers/Images';
import HeaderComponent from '../../components/HeaderComponent';
import {useNavigation} from '@react-navigation/native';

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

const LeftDrawerScreen = ({navigation}) => {
  const drawerScreens = {
    MyDashboard: {
      screen: MyDashboard,
      name: 'My dashboard',
      options: {
        headerShown: false,
      },
    },

    MyBlaqueMovement: {
      screen: MyBlaqueMovement,
      name: 'My BLAQUE Movement',
      options: {
        headerShown: false,
      },
    },
    TalkToACoach: {
      screen: TalkToACoach,
      name: 'Talk to a coach',
      options: {
        headerShown: false,
      },
    },
    MyProgress: {
      screen: MyProgress,
      name: 'My Progress',
      options: {
        headerShown: false,
      },
    },
    Calendar: {
      screen: Calendar,
      name: 'Calendar',
      options: {
        headerShown: false,
      },
    },
    GroupChat: {
      screen: GroupChat,
      name: 'Group Chat',
      options: {
        headerShown: false,
      },
    },
    MyProfile: {
      screen: MyProfile,
      name: 'My profile',
      options: {
        headerShown: false,
      },
    },
    BlaqueNewsletter: {
      screen: BlaqueNewsletter,
      name: 'Blaque newsletter',
      options: {
        headerShown: false,
      },
    },
    Settings: {
      screen: Settings,
      name: 'Settings',
      options: {
        headerShown: false,
      },
    },
  };

  return (
    <LeftDrawer.Navigator
      initialRouteName="Settings"
      screenOptions={{
        // drawerPosition: 'right',
        drawerActiveBackgroundColor: AppColor.checkColor,
        drawerStyle: {
          backgroundColor: AppColor.drawerBackgroundColor,
          // width: 290,
        },

        drawerItemStyle: {
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: AppColor.borderBottomColor,
          height: 60,
          justifyContent: 'center',
          marginVertical: 0,
          marginHorizontal: 0,
        },
        drawerLabelStyle: {
          fontWeight: 'bold',
          paddingLeft: 15,
          fontSize: AppFonts.Font14,
          textTransform: 'uppercase',
        },
        drawerActiveTintColor: AppColor.primaryColor,
        drawerInactiveTintColor: AppColor.white,
      }}
      drawerContent={props => (
        <LeftDrawerComponent navigation={navigation} {...props} />
      )}>
      {Object.keys(drawerScreens).map((screen, i) => {
        return (
          <LeftDrawer.Screen
            key={i}
            name={drawerScreens[screen].name}
            component={drawerScreens[screen].screen}
            options={drawerScreens[screen].options}
          />
        );
      })}
    </LeftDrawer.Navigator>
  );
};

export default function Dashboard({navigation}) {
  return (
    <RightDrawer.Navigator
      drawerContent={props => (
        <RightDrawerComponent navigation={navigation} {...props} />
      )}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          backgroundColor: AppColor.drawerBackgroundColor,
          // width: 290,
        },
      }}>
      <RightDrawer.Screen name="Home" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },

  headerRight: {
    marginRight: 20,
  },
});
