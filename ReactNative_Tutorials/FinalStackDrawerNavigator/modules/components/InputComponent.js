import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {AppColor} from '../Helpers/AppColor';
import {AppFonts} from '../Helpers/AppFonts';

export default function InputComponent({label, placeholder, secureTextEntry}) {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={AppColor.labelColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.textInputColor,
    paddingLeft: 20,
    paddingVertical: 17,
    height: 80,
    borderRadius: 10,
  },
  label: {
    color: AppColor.labelColor,
    fontSize: AppFonts.Font16,
    marginBottom: -3,
  },
  textInput: {
    color: AppColor.labelColor,
    fontSize: AppFonts.Font16,
  },
});
