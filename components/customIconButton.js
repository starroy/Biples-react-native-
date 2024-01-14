import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Link } from "react-router-native";

const CustomIconButton = ({ onPress, width, height, backgroundColor, image, link }) => {
    return (
        <TouchableOpacity>
            <Link to={link}
                style={[styles.button, { width, height, backgroundColor }]}
            >
                {image && <Image source={image} style={styles.image} />}
            </Link>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        borderRadius: 50
    }
});

export default CustomIconButton;