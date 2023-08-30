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
  const [next, setNext] = useState(null);
  const [back, setBack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const data = [
    {
      number: 1,
      text: 'She doesn’t study German on Monday.',
    },
    {
      number: 2,
      text: 'Does she live in Paris?',
    },
    {
      number: 3,
      text: 'He doesn’t teach math.',
    },
    {
      number: 4,
      text: 'Cats hate water.',
    },
    {
      number: 5,
      text: 'Every child likes an ice cream.',
    },
    {
      number: 6,
      text: 'My brother takes out the trash.',
    },
  ];
  const handleNext = () => {
    console.log(currentIndex, data.length);
    if (currentIndex !== data.length - 1) {
      setCurrentIndex(currentIndex => currentIndex + 1);
    }
  };

  const handleBack = () => {
    console.log(currentIndex);
    if (currentIndex >= 1) {
      setCurrentIndex(currentIndex => currentIndex - 1);
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
            marginHorizontal: 37,
            marginTop: 30,
          }}>
          {/* <Text style={{textAlign: 'center'}}>{data[currentIndex]?.text}</Text> */}
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item}) => (
              <View style={{backgroundColor: 'red', height: 100 / 2}}>
                <TouchableOpacity>
                  <Text style={{width: '20%'}}>{item.text}</Text>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
