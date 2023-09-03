//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

// create a component
const App = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedIndex, setSelectedIndex] = useState([]);

  function selectedItemHandle(index) {
    let isSelected = false;
    for (let i = 0; i < selectedIndex.length; i++) {
      if (selectedIndex[i] === index) {
        isSelected = true;
        break;
      }
    }
    if (isSelected) {
      setSelectedIndex(selectedIndex.filter(item => item !== index));
    } else {
      setSelectedIndex([...selectedIndex, index]);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={data}
        renderItem={data => (
          <TouchableOpacity
            onPress={() => selectedItemHandle(data.index)}
            style={{
              opacity: data.index / 5 == 0 ? 0.1 : data.index / 10,

              height: 50,
              backgroundColor: selectedIndex.includes(data.index)
                ? 'green'
                : 'lightgray',
              marginTop: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
                item {data.item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

//make this component available to the app
export default App;
