import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native-elements";
import { ScrollView, View, Image, StyleSheet, Animated, Easing } from "react-native";
import { vh, vw } from 'react-native-css-vh-vw';
import CustomImageButton from "../components/customImageButton";
import ServerComponent from "../components/serverComponent";
import CustomIconButton from "../components/customIconButton";
import { Link } from "react-router-native";
import {SliderBox} from 'react-native-image-slider-box';

const Home = () => { 
    const indices = Array.from({ length: 5 }, (_, i) => i);
    const serverInfo = [
        {
            id : 1,
            serverAvatar : require('../assets/images/serveravatar1.png'),
            serverName : 'Claynosaurz',
            totalUsers : '23 700',
            onlineUsers : '9 300'
        },
        {
            id : 2,
            serverAvatar : require('../assets/images/serveravatar2.png'),
            serverName : 'Claynosaurz',
            totalUsers : '23 700',
            onlineUsers : '9 300'
        },
        {
            id : 2,
            serverAvatar : require('../assets/images/serveravatar3.png'),
            serverName : 'Claynosaurz',
            totalUsers : '23 700',
            onlineUsers : '9 300'
        }
    ]    
    Images = [
        require('../assets/images/flowscreen1.png'),
        require('../assets/images/flowscreen2.png'),
        require('../assets/images/flowscreen3.png')
    ]
    const scrollRef = useRef();
    const scrollY = useRef(new Animated.Value(0)).current;
  
    const handleScroll = (event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      // Do something with the scroll position
    };
    return (
        <>
        <View style={styles.container}>
            <ScrollView 
                ref={scrollRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={true} // Set to true to show the horizontal scrollbar
                horizontal={true} 
                style={styles.scroll}>
                <View 
                    style={[styles.header, alignItems='center']}
                >
                    <View style={styles.customItem}>              
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#10101065"
                            image={require('../assets/images/plus.png')}
                        />                        
                    </View>     
                    <View style={styles.customItem}>           
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={54}
                            height={54}
                            backgroundColor="#10101065"
                            image={require('../assets/images/search.png')}
                        />
                    </View>
                    <View style={styles.avatar}>
                        {indices.map((i, index) => (     
                            <View style={styles.customItem}>           
                                <CustomIconButton
                                    // onPress={() => console.log('My Button pressed')}
                                    width={54}
                                    height={54}
                                    backgroundColor="#101010"
                                    image={require('../assets/images/serveravatar1.png')}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.body}>
                <SliderBox
                    images={Images}
                    paginationBoxStyle={{
                    position: 'absolute',
                    bottom: 0,
                    padding: 0,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    paddingVertical: 0,
                    }}
                    ImageComponentStyle={{
                    borderRadius: 15,
                    width: '90%',
                    marginTop: 0,
                    resizeMode: 'stretch',
                    }}
                    imageLoadingColor="#2196F3"
                    // resizeMode={'contain'}
                    autoplay
                    circleLoop
                    dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    }}
                    autoplayInterval={3000}
                    sliderBoxHeight={vh(16.2)}
                />
                
                <View style={styles.compStyle}>
                    <Text style = {{fontSize: 15, color: 'white', marginLeft: 20, marginBottom: 13, marginTop: 7}}>
                        Related Communities
                    </Text>
                    <View style={styles.serverInfomation}>
                        {
                            serverInfo.map((item, index) => (
                                <ServerComponent
                                    serverAvatar = {item.serverAvatar}
                                    serverName = {item.serverName}
                                    totalUsers = {item.totalUsers}
                                    onlineUsers = {item.onlineUsers}
                                />
                            ))
                        }
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerIcon}>
                    <Image 
                        source={ require('../assets/images/home_activate.png') } 
                        style={{ width: 18, height: 25, resizeMode: 'contain'}}
                    />                    
                    <Text style = {{fontSize: 11, color: '#50FFFF'}}>
                        Home
                    </Text>
                </View>
                <View style={[styles.footerIcon, {width: 30, borderTopWidth: 0}]}>
                    <Image 
                        source={ require('../assets/images/messagebox.png') } 
                        style={{ width: 19, height: 25, resizeMode: 'contain'}}
                    />                    
                    <Text style = {{fontSize: 11, color: 'white'}}>
                        Chats
                    </Text>
                </View>
                <View style={[styles.footerIcon, {width: 60, borderTopWidth: 0}]}>
                    <Image 
                        source={ require('../assets/images/people.png') } 
                        style={{ width: 22, height: 25, resizeMode: 'contain'}}
                    />                    
                    <Text style = {{fontSize: 11, color: 'white'}}>
                        Community
                    </Text>
                </View>
                <Link to='/profile' style={[styles.footerIcon, {width: 35, borderTopWidth: 0}]}>
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={ require('../assets/images/profile_avatar.png') } 
                            style={{ width: 21.6, height: 25, resizeMode: 'contain'}}
                        />                    
                        <Text style = {{fontSize: 11, color: 'white'}}>
                            Profile
                        </Text>
                    </View>
                </Link>
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
    scroll: {
        backgroundColor: '#ffffff08',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        bottom: vh(86),
        borderBottomWidth: 2,
        borderBottomColor: '#68686844',
        width: vw(100)
    },
    header: {        
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        // justifyContent: 'center',
        // overflow: 'scroll',
        width: vw(100),
        paddingLeft: vw(5),
        height: 80
    },
    avatar: {
        flexDirection: 'row',
    },
    customItem: {
        marginRight: vw(3.5)
    },
    compStyle: {
        position: 'absolute',
        top: vh(17),
        right: vw(5)
    },
    body: {
        top: vh(16)
    },
    serverInfomation: {
        width: vw(90),
        marginLeft: 20
    },
    footer: {
        backgroundColor: '#ffffff08',
        position: 'absolute',
        bottom: 0,
        height: vh(10),
        width: vw(100),
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#68686844'
    },
    footerIcon: {
        width: 30,
        height: 40,
        borderTopWidth: 2,
        borderTopColor: '#50FFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15
    }
  });

export default Home;