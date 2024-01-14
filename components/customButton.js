import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, TouchableHighlight } from 'react-native';
import { Link } from "react-router-native";

const CustomButton = ({ title, onPress, width, height, backgroundColor, color, linkaddress }) => {
    // const handlePress = () => {
    //     // Add your custom press behavior here
    //     backgroundColor: 'transparency'
    // };
    const [backcolor, setBackColor] = useState('transparency')
    return (
            <TouchableOpacity
                style={[styles.button, { width, height, backgroundColor }]}
                // onPress={onPress}
            >
                <Link component={TouchableOpacity} to={linkaddress} 
                    style={[styles.button, { width, height, backcolor, color }]}
                    onPress={() => setBackColor('white')}
                    activeOpacity={1}
                >
                    <View pointerEvents="none">
                        <Text style={[styles.text, { color }]}>{title}</Text>
                    </View>
                </Link>
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 7,
        marginBottom: 7
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        // fontFamily: 'TTFirsNeue-Regular.ttf'
    }, 
    yourClass: {
        color: 'blue', // Define the desired color for the link
    },
});

export default CustomButton;

