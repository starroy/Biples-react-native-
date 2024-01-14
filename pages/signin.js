import React, { useState } from "react";
import { Text } from "react-native-elements";
import { View, Image, StyleSheet } from "react-native";
import { vh, vw } from 'react-native-css-vh-vw';
import CustomButton from "../components/customButton";
import CustomInputBox from "../components/customInputBox";
import CustomImageButton from "../components/customImageButton";
import { Link } from "react-router-native";

const Signin = () => { 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    handleEmail = (text) => {
        setEmail(text)
    }
    handlePassword = (text) => {
        setPassword(text)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imgStyle}>
                    <Link to="/" 
                        style={{ width: 11, height: 19 }}
                        pointerEvents="none">
                        <Image               
                            source={require('../assets/images/back.png')}
                            style={{ width: 11, height: 19, resizeMode: 'contain' }}
                        />
                    </Link>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={styles.titleStyle}>Welcome back!</Text>
                    <CustomInputBox
                        placeholder="E-mail"
                        image={require('../assets/images/message.png')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#10101065"
                        onchangeText={this.handleEmail}
                    />
                    <CustomInputBox
                        placeholder="Password"
                        image={require('../assets/images/lock.png')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#10101065"
                        onchangeText={this.handlePassword}
                    />
                    <Text style={styles.forgotPasswordLink}>
                        Forgot Password?
                    </Text>
                    <CustomButton
                        title="Sign In"
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(90)}
                        height={54}
                        backgroundColor="#53ACFF"
                        color="white"
                        linkaddress='/home'
                    />
                    <Text style={styles.wallettextStyle}>
                        or choose your wallet
                    </Text>
                    <View style={styles.imgbuttonStyle}>
                        <CustomImageButton
                            onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../assets/images/wallet1.png')}
                        />
                        <CustomImageButton
                            onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../assets/images/wallet2.png')}
                        />
                        <CustomImageButton
                            onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../assets/images/wallet3.png')}
                        />
                        <CustomImageButton
                            onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#68686822"
                            image={require('../assets/images/metamask.png')}
                        />
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
        marginBottom: 10,
        textAlign: "center"
    },
    mainStyle: {
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: vh(26.6),
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
    forgotPasswordLink: {
        color: '#53ACFF',
        textDecorationLine: 'underline',
        width: vw(90),
        textAlign: "right",
        marginBottom: 10
    }
  });

export default Signin;