import React, { useState } from "react";
import { Text, Button } from "react-native-elements";
import { View, Image, ImageBackground, StyleSheet, TextInput } from "react-native";
import { vh, vw } from 'react-native-css-vh-vw';
import CustomButton from "../../components/customButton";
import CustomInputBox from "../../components/customInputBox";
import CustomImageButton from "../../components/customImageButton";
import { Link } from "react-router-native";

const RegisterPassword = ({navigation, route}) => { 
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    handlePassword = (text) => {
        setPassword(text)
    }
    handleConfirmPassword = (text) => {
        setConfirmPassword(text)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imgStyle}>
                    <Link to="/register/username" 
                        style={{ width: 11, height: 19 }}
                        pointerEvents="none">
                        <Image               
                            source={require('../../assets/images/back.png')}
                            style={{ width: 11, height: 19, resizeMode: 'contain' }}
                        />
                    </Link>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={styles.titleStyle}>Enter your username</Text>
                    <CustomInputBox
                        placeholder="Password"
                        image={require('../../assets/images/lock.png')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#10101065"
                        onchangeText={this.handlePassword}
                    />
                    <CustomInputBox
                        placeholder="ConfirmPassword"
                        image={require('../../assets/images/lock.png')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#10101065"
                        onchangeText={this.handleConfirmPassword}
                    />
                    <CustomButton
                        title="Register"
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#53ACFF"
                        color="white"
                        linkaddress='/signin'
                    />
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#202020",
        width: vw(100),
        height: vh(100)
    },
    imgStyle: {
        width: vw(90),
        height: 20,
        marginLeft: 10,
        position: 'absolute',
        top: 50,
        left: 18
    },
    titleStyle: {
        color: 'white',
        fontSize: 20,
        width: vw(90),
        marginBottom: 20,
        textAlign: "center"
    },
    mainStyle: {
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: vh(28.8),
        left: vw(5)
    },
  });

export default RegisterPassword;


