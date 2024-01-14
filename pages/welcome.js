import React from "react";
import { Text } from "react-native-elements";
import { View, ImageBackground, StyleSheet } from "react-native";
import { vh, vw } from 'react-native-css-vh-vw';
import CustomButton from "../components/customButton";
import CustomProgressBars from "../components/customProgressbars";

const Welcome = ({navigation, route}) => {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/welcome.png')}
                    style={{ width: vw(100), height: vh(100), resizeMode: 'contain' }}
                >   

                    <View style={styles.progressBar}>
                        <CustomProgressBars width={55} height={5} progressedColor={'white'} remainingColor={'#6D6D6D'} />
                    </View>

                    <View style={styles.letterBar}>
                        <Text style={styles.text}>Lorem ipsum dolor sit </Text>
                        <Text style={styles.text}>amet, consectetur adipiscing elit.</Text>
                    </View> 

                    <View style={styles.button}>
                            <CustomButton
                                title="Sign in"
                                width={vw(44)}
                                height={54}
                                backgroundColor="white"
                                color="black"
                                linkaddress="/signin"
                            />
                            <CustomButton
                                title="Register"
                                width={vw(44)}
                                height={54}
                                backgroundColor="#161116"
                                color="white"
                                linkaddress="/register"
                            />
                    </View>

                </ImageBackground>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: vh(10),
        width: vw(100),
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 0
    },
    letterBar: {
        height: vh(74)
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 5,
        height: vh(16)
    },
    text:{
        // fontFamily: 'TTFirsNeue-Regular.ttf',
        fontSize: 25,
        width: vw(85),
        color: "#ffffff",
        paddingLeft: 20
    }
  });

export default Welcome;