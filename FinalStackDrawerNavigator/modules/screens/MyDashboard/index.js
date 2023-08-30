import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppImage} from '../../Helpers/Images';
import CircularProgress from 'react-native-circular-progress-indicator';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColor} from '../../Helpers/AppColor';

function TodoComponentHeader({todoTitle, date, style}) {
  return (
    <View style={[styles.todoContainer, style]}>
      <Text style={styles.textTodoDate}>{todoTitle}</Text>
      <Text style={styles.textTodoDate}>{date}</Text>
    </View>
  );
}

function TodoComponent({title, styles, spinnervalue}) {
  const props = {
    activeStrokeWidth: 5,
    inActiveStrokeWidth: 5,
    // inActiveStrokeOpacity: ,
  };
  return (
    <TouchableOpacity>
      <View style={[todoComponentStyles.container, styles]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CircularProgressBase
            {...props}
            value={spinnervalue}
            radius={10}
            activeStrokeColor={'#C7922C'}
            inActiveStrokeColor={'#EBE8DD'}
          />

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={todoComponentStyles.title}>
            {title}
          </Text>
        </View>
        <Image style={todoComponentStyles.image} source={AppImage.arrowIcon} />
      </View>
    </TouchableOpacity>
  );
}
const todoComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: AppColor.progressBarBackColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 45,
  },
  title: {
    fontSize: 14,
    color: AppColor.primaryColor,
    marginLeft: 17,
  },
  image: {
    width: 20,
    height: 20,
  },
});

function ProgressBar({progressValue, styles, title}) {
  const props = {
    activeStrokeWidth: 6,
    inActiveStrokeWidth: 6,
    // inActiveStrokeOpacity: ,
  };
  return (
    <View style={[progressBarStyle.container, styles]}>
      <CircularProgress
        {...props}
        value={progressValue}
        activeStrokeColor={AppColor.orangeColor}
        inActiveStrokeColor={AppColor.inactiveStrokeColor}
        progressValueColor={AppColor.primaryColor}
        valueSuffix={'%'}
        radius={50}
        titleFontSize={12}
        title={title}
        titleColor={AppColor.primaryColor}
        progressValueFontSize={16}
      />
    </View>
  );
}
const progressBarStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: AppColor.progressBarBackColor,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});

const Slider = ({source, key}) => {
  return (
    <TouchableOpacity key={key} activeOpacity={0.7}>
      <View>
        <Image
          style={{width: 300, height: 150, resizeMode: 'stretch'}}
          source={source}
        />
      </View>
    </TouchableOpacity>
  );
};
export default function Home({navigation}) {
  const DATA = [
    {
      img: AppImage.sliderImage01,
    },
    {
      img: AppImage.sliderImage02,
    },
    {
      img: AppImage.sliderImage03,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <HeaderComponent />
      <View>
        <Image
          style={{height: 107, marginTop: 10, width: '100%'}}
          source={AppImage.morningMoments}
          resizeMode="stretch"
        />
      </View>
      <ScrollView>
        <TodoComponentHeader
          style={{marginTop: 3}}
          todoTitle={'today’s to do list'}
          date={'may 19 2021'}
        />
        <TodoComponent
          spinnervalue={50}
          styles={{marginTop: 2}}
          title={
            'Workout today Eat at least 2 vegetables today + 1 more Eat at least 2 vegetables today + 1 moreEat at least 2 vegetables today + 1 more Eat at least 2 vegetables today + 1 m  ore Eat at least 2 vegetables today + 1 moreEat at least 2 vegetables today + 1 more'
          }
        />
        <TodoComponent
          spinnervalue={50}
          styles={{marginTop: 2}}
          title={
            'Eat at least 2 vegetables today + 1 more Eat at least 2 vegetables today + 1 moreEat at least 2 vegetables today + 1 more'
          }
        />
        <TodoComponent
          spinnervalue={100}
          styles={{marginTop: 2}}
          title={
            'Sleep 8 hours + 1 more Eat at least 2 vegetables today + 1 more Eat at least 2 vegetables today + 1 moreEat at least 2 vegetables today + 1 more'
          }
        />
        <TodoComponentHeader
          style={{marginTop: 3}}
          todoTitle={'My BLAQUE Movement Consistency'}
          date={'may 19 2021'}
        />
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            marginTop: 4,
          }}>
          <ProgressBar title={'Movement'} progressValue={37} />
          <ProgressBar
            title={'nutrition'}
            styles={{marginLeft: 2}}
            progressValue={71}
          />
          <ProgressBar
            title={'self care'}
            styles={{marginLeft: 2}}
            progressValue={12}
          />
        </View>
        <TodoComponentHeader
          style={{marginTop: 3}}
          todoTitle={'Recommendation for today'}
          // date={'may 19 2021'}
        />

        <Image
          style={{
            height: 209,
            width: '100%',
            resizeMode: 'stretch',
            marginTop: 4,
          }}
          source={AppImage.dashboardRecommendation}
        />
        <TodoComponentHeader
          style={{marginTop: 3}}
          todoTitle={'alternatives'}
          // date={'may 19 2021'}
        />

        <View style={{backgroundColor: AppColor.white, marginTop: 3}}>
          <FlatList
            horizontal
            data={DATA}
            renderItem={({item, index}) => {
              return <Slider keys={index} source={item.img} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE9DD',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#EDEDE9',
    height: 25,
  },
  textTodoDate: {
    textTransform: 'uppercase',
    color: '#CBBBA8',
    fontWeight: 'bold',
  },
});
