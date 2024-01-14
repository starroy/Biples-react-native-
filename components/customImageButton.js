import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Link } from "react-router-native";

const CustomImageButton = ({ onPress, width, height, backgroundColor, image, link }) => {
    wid = width*3/5.4
    hei = height*3/5.4
    return (
        <TouchableOpacity>
            <Link to={link}
                style={[styles.button, { width, height, backgroundColor }]}
            >
                {image && <Image source={image} 
                    style={{
                        width: wid,
                        height: hei,
                        resizeMode: 'contain',
                        borderRadius: 5}} 
                    />
                }
            </Link>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    image: {
    }
});

export default CustomImageButton;