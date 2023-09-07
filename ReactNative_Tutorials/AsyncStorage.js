// npm install @react-native-async-storage/async-storage
// https://react-native-async-storage.github.io/async-storage/docs/install/
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create a component
const AsyncStorageScreen = () => {
  const [text, setText] = useState("");
  const [saveArray, setSaveArray] = useState([]);
  function handleChange(e) {
    setText(e);
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("text");
      if (value !== null) {
        setSaveArray([...saveArray, value]);
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("text", JSON.stringify(saveArray.push(text)));
      setText("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "pink", alignItems: "center" }}>
        <TextInput
          style={{
            width: "90%",
            height: 50,
            borderWidth: 0.5,
            borderRadius: 20,
            paddingLeft: 30,
            paddingRight: 20,
          }}
          name={text}
          onChangeText={(e) => handleChange(e)}
        />
        <TouchableOpacity
          onPress={storeData}
          style={{
            backgroundColor: "#000",
            marginTop: 20,
            width: 200,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>Save Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getData}
          style={{
            backgroundColor: "#000",
            marginTop: 10,
            width: 200,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>Display Data</Text>
        </TouchableOpacity>

        <FlatList
          data={saveArray} // Use saveArray instead of array
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    // alignItems: 'center',
  },
});

//make this component available to the app
export default AsyncStorageScreen;
