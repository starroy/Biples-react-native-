import React, { useState } from "react";
import { Text, Button } from "react-native-elements";
import { View, Image, ImageBackground, StyleSheet, TextInput } from "react-native";
import { NativeRouter, Link, Route, Routes } from "react-router-native";
import { vh, vw } from 'react-native-css-vh-vw';
import CustomButton from "../../components/customButton";
import CustomImageButton from "../../components/customImageButton";

const Register = ({navigation, route}) => { 
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imgStyle}>
                    <Link to="/" 
                        style={{ width: 11, height: 19 }}
                        pointerEvents="none">
                        <Image               
                            source={require('../../assets/images/back.png')}
                            style={{ width: 11, height: 19, resizeMode: 'contain' }}
                        />
                    </Link>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={styles.titleStyle}>Choose register type</Text>
                    <CustomButton
                        title="E-mail"
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#53ACFF"
                        color="white"
                        linkaddress="/register/email"
                    />
                    <Text style={styles.wallettextStyle}>
                        or register with your wallet
                    </Text>
                    <View style={styles.imgbuttonStyle}>
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../../assets/images/wallet1.png')}
                            link="/register/wallet"
                        />
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../../assets/images/wallet2.png')}
                            link="/register/wallet"
                        />
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../../assets/images/wallet3.png')}
                            link="/register/wallet"
                        />
                        <CustomImageButton
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../../assets/images/metamask.png')}
                            link="/register/wallet"
                        />
                    </View>
                    <View style={styles.signinStyle}>
                        <Text style={{color: "white"}}>Already have an account? &nbsp;</Text>
                        <Link to="/signin">
                            <Text style={styles.SigninLink}>
                                Sign in
                            </Text>
                        </Link>

                    </View>
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
    wallettextStyle: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    imgbuttonStyle: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: vw(90),
        height: 54
        
    },
    SigninLink: {
        color: '#50FFFF',
        textDecorationLine: 'underline',
        textAlign: "right"
    },
    signinStyle: {
        marginTop: 20,
        color: "white",
        width: vw(90),
        flexDirection: "row",
        justifyContent: "center"
    }
  });

export default Register;