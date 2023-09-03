import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppImage} from '../../Helpers/Images';

export default function Settings({navigation}) {
  const {height, width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [next, setNext] = useState(null);
  const [back, setBack] = useState(null);
  const [totalStep, setTotalStep] = useState([]);

  const data = [
    {
      number: 0,
      text: 'She doesn’t study German on Monday.',
    },
    {
      number: 1,
      text: 'Does she live in Paris?',
    },
    {
      number: 2,
      text: 'He doesn’t teach math.',
    },
    {
      number: 3,
      text: 'Cats hate water.',
    },
    {
      number: 4,
      text: 'Every child likes an ice cream.',
    },
    {
      number: 5,
      text: 'My brother takes out the trash.',
    },
    {
      number: 6,
      text: 'My Sister takes out the trash.',
    },
    {
      number: 7,
      text: 'Mother takes out the trash.',
    },
  ];

  const array = [];
  const handleNext = () => {
    for (let i = 0; i <= currentIndex + 1; i++) {
      array.push(i);
    }
    if (currentIndex !== data.length - 1) {
      setCurrentIndex(currentIndex => currentIndex + 1);
      setTotalStep(array);
    }
  };

  const handleBack = () => {
    if (currentIndex >= 1) {
      setCurrentIndex(currentIndex => currentIndex - 1);
      totalStep.pop();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <HeaderComponent />

      <View style={styles.pagination}>
        <View
          style={{
            marginTop: 30,
          }}>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onMomentumScrollEnd={event => {
              const index = Math.floor(
                Math.floor(event.nativeEvent.contentOffset.x) /
                  Math.floor(event.nativeEvent.layoutMeasurement.width),
              );
              setCurrentIndex(index);
            }}
            renderItem={({item}) => (
              <View
                style={{
                  height: height / 6,
                  width: width,
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: height / 6,
                  }}>
                  <Text style={{textAlign: 'center'}}>
                    {data[currentIndex]?.text}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{height: 20}} onPress={handleBack}>
            <Image style={{width: 14, height: 14}} source={AppImage.back} />
          </TouchableOpacity>

          <FlatList
            // scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  marginLeft: 50,
                  justifyContent: 'center',
                  // paddingHorizontal: 5,
                }}>
                <View>
                  {data[currentIndex]?.number === item.number ? (
                    <Text
                      style={{
                        color: '#2B2623',
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}>
                      {item.number}
                    </Text>
                  ) : (
                    <Text>{item.number}</Text>
                  )}
                </View>
              </View>
            )}
          />

          <TouchableOpacity style={{height: 20}} onPress={handleNext}>
            <Image style={{width: 14, height: 14}} source={AppImage.next} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: 10,
            marginTop: 30,
          }}>
          {data.map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  marginLeft: index !== 0 ? 10 : 0, // Adjust margin for the first item
                  width: 32,
                  opacity: index / 10,
                  backgroundColor:
                    index + 1 <= totalStep?.length ? '#C6B896' : '#fff',
                  height: 10,
                }}></View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flex: 1,
  },
});
