import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const CustomInputBox = ({ placeholder, image, width, height, backgroundColor, onchangeText, text }) => {
  return (
    <View style={[styles.container, { width, height, backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: 'white', fontSize: 15 }]}
        placeholder={placeholder}
        placeholderTextColor='white'
        value={text}
        onChangeText={onchangeText}
        keyboardType={placeholder==='email' ? 'email-address' : 'default'}
        secureTextEntry={placeholder === 'Password' || placeholder === 'ConfirmPassword'}
      />
      {image && <Image source={image} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#101010',
        paddingHorizontal: 20,
        color: 'white',
        marginBottom: 7
    },
    input: {
        flex: 1
    },
    image: {
        width: 15.25,
        height: 19,
        resizeMode: 'contain',
        marginLeft: 10,
    },
});

export default CustomInputBox;