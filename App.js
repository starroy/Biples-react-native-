import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import Welcome from './pages/welcome';
import Signin from './pages/signin';
import Register from './pages/register/register';
import RegisterWallet from './pages/register/registerWallet';
import RegisterEmail from './pages/register/registerEmail';
import RegisterPassword from './pages/register/registerPassword';
import RegisterUsername from './pages/register/registerUsername';
import Home from './pages/home';
import Profile from './pages/profile';
import CustomScrollBarExample from './pages/scroll';

export default function App({ data }) {
  
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/wallet" element={<RegisterWallet />} />
        <Route path="/register/email" element={<RegisterEmail />} />
        <Route path="/register/username" element={<RegisterUsername />} />
        <Route path="/register/password" element={<RegisterPassword />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </NativeRouter>
    // <View style={styles.container}>
    //   <CustomScrollBarExample/>
    // </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // fontFamily: 'TTFirsNeue',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent("MyApp", () => App);
