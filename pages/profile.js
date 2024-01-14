import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import { TouchableOpacity, ScrollView, View, Image, StyleSheet, Animated, Easing, ImageBackground } from "react-native";
import { vh, vw } from 'react-native-css-vh-vw';
import CustomImageButton from "../components/customImageButton";
import { Link } from "react-router-native";
// import LinearGradient from 'react-native-linear-gradient';

const Profile = () => { 
    const myprofile = {
        avatar: require('../assets/images/profile_avatar.png'),
        name: 'Andrew Jackson',
        level: 5,
        xp: 1150,
        currentxp: 1000,
        friends: [{avatar: require('../assets/images/profile_avatar.png')},
                  {avatar: require('../assets/images/profile_avatar.png')},
                  {avatar: require('../assets/images/profile_avatar.png')},
                  {avatar: require('../assets/images/profile_avatar.png')}],
        NFTs:  [{avatar: require('../assets/images/nft1.png')},
                {avatar: require('../assets/images/nft2.png')},
                {avatar: require('../assets/images/nft3.png')},
                {avatar: require('../assets/images/nft4.png')}],
        wallet: {name: 'solana',
                 walletAvatar: require('../assets/images/wallet1.png'),
                 walletNumber: '0x63Z23eadSdwfd2dcd1'}
    }
    const progress = vw(80)*myprofile.currentxp/myprofile.xp;
    const rightValue = (index) => {
        return index*10
    }
    const [walletSerialNumber, setWalletNumber] = useState('')
    return (
        <>
        <View style={styles.container}>
            <View style={styles.scroll}>
                <View style={styles.imgStyle}>
                    <Link to="/home" 
                        style={{ width: 11, height: 19 }}
                        pointerEvents="none">
                        <Image               
                            source={require('../assets/images/back.png')}
                            style={{ width: 11, height: 19, resizeMode: 'contain' }}
                        />
                    </Link>
                </View>
                <View style={styles.customItem}>              
                    <CustomImageButton
                        onPress={() => console.log('My Button pressed')}
                        width={41}
                        height={41}
                        backgroundColor="#10101065"
                        image={require('../assets/images/setting.png')}
                    />                        
                </View>   
            </View>

            <View style={styles.body}>        

                <View style={[styles.profileContainer, {height: vh(16.1)}]}>
                    <Image source={ myprofile.avatar } style={{width: vw(24), height: vh(12)}} />
                    <Text style = {{fontSize: 20, color: 'white', marginLeft: 30}}>{myprofile.name}</Text>
                </View>        

                <View style={[styles.profileContainer, {height: vh(12), flexDirection: 'column', justifyContent: 'center'}]}>
                    <Text style = {{fontSize: 14, color: 'white', marginBottom:5}}>Level:
                        <Text style={{color: '#53ACFF'}}>{myprofile.level}</Text> 
                    </Text>             
                    <View style={[styles.progressBar, { width: vw(80), height: 6.5, backgroundColor: '#ffffff05' }]}>                    
                        <ImageBackground source={require('../assets/images/prograssbar.png')} style={{ width: progress, height: '100%', backgroundColor: '#53ACFF', borderRadius: 4 }} />
                    </View>
                    <Text style={{color: '#384E63', fontSize: 12, marginTop: 5}}>XP:{myprofile.currentxp}/{myprofile.xp} XP</Text> 
                </View>     
                   
                <View style={[styles.profileContainer, {height: vh(8.4), justifyContent: 'space-between'}]}>
                    <Text style = {{fontSize: 17, color: 'white', width: vw(46)}}>Friends</Text>
                    <View style = {styles.friends}>
                        {
                            myprofile.friends.map((item, index) => (
                                <Image key={index} source={ item.avatar } style={{width: 31, height: 31, position: 'relative', right: rightValue(index), borderWidth: 1, borderColor: 'black', borderRadius: 15}} />
                            ))
                        }
                    </View>
                    <Image source={ require('../assets/images/next.png') } style={{width: 6.5, height: 10}} />
                </View>        
                <View style={[styles.profileContainer, {height: vh(8.4), justifyContent: 'space-between'}]}>
                    <Text style = {{fontSize: 17, color: 'white', width: vw(35)}}>My NFTs</Text>
                    <View style = {styles.friends}>
                        {
                            myprofile.NFTs.map((item, index) => (
                                <Image key={index} source={ item.avatar } style={{width: 27.5, height: 27.5, marginRight: 3}} />
                            ))
                        }
                    </View>
                    <Image source={ require('../assets/images/next.png') } style={{width: 6.5, height: 10}} />
                </View>       
                <View style={[styles.profileContainer, {height: vh(8.4)}]}>
                    <Image source={ myprofile.wallet.walletAvatar } style={{width: 34, height: 34}} />
                    <View> 
                        <Text style = {{fontSize: 10, color: '#6D6D6D', marginLeft: 20}}>{myprofile.wallet.name}</Text>
                        <Text numberOfLines={1} ellipsizeMode="middle" style = {{fontSize: 14, color: 'white', marginLeft: 20, width: vw(23.5)}}>{myprofile.wallet.walletNumber}</Text>
                    </View> 
                    <View style= {{ width: vw(17)}}>
                    </View>                       
                    <View >
                        <TouchableOpacity style={[styles.button, { width:41, height:41, backgroundColor: '#ffffff05' }]}>
                            <Image source={require('../assets/images/power.png')} 
                                style={{
                                    width: 15,
                                    height: 15,
                                    resizeMode: 'contain',
                                    borderRadius: 5}} 
                            />
                        </TouchableOpacity>                      
                    </View>                      
                    <View >
                        <TouchableOpacity 
                            style={[styles.button, { width:41, height:41, backgroundColor: '#ffffff05' }]}
                            onPress={() => setWalletNumber(myprofile.wallet.walletNumber)}
                        >
                            <Image source={require('../assets/images/clipboard.png')} 
                                style={{
                                    width: 15,
                                    height: 15,
                                    resizeMode: 'contain',
                                    borderRadius: 5}} 
                            />
                        </TouchableOpacity>                      
                    </View>                      
                </View>    
            </View>

            <View style={styles.footer}>
                <Link to='/home' style={[styles.footerIcon, {width: 35, borderTopWidth: 0}]}>
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={ require('../assets/images/home.png') } 
                            style={{ width: 21.6, height: 25, resizeMode: 'contain'}}
                        />                    
                        <Text style = {{fontSize: 11, color: 'white'}}>
                            Home
                        </Text>
                    </View>
                </Link>
                <View style={[styles.footerIcon, {width: 30, borderTopWidth: 0}]}>
                    <Image 
                        source={ require('../assets/images/messagebox.png') } 
                        style={{ width: 19, height: 22, resizeMode: 'contain'}}
                    />                    
                    <Text style = {{fontSize: 11, color: 'white'}}>
                        Chats
                    </Text>
                </View>
                <View style={[styles.footerIcon, {width: 60, borderTopWidth: 0}]}>
                    <Image 
                        source={ require('../assets/images/people.png') } 
                        style={{ width: 22, height: 22, resizeMode: 'contain'}}
                    />                    
                    <Text style = {{fontSize: 11, color: 'white'}}>
                        Community
                    </Text>
                </View>
                <View style={[ styles.footerIcon, { width: 35 }]}>
                    {/* <View style={{ borderWidth: 1, borderColor: '#50FFFF', borderRadius: '9'}}> */}
                        <Image 
                            source={ require('../assets/images/profile_avatar.png') } 
                            style={{ width: 22, height: 22, resizeMode: 'contain', borderWidth: 1, borderColor: '#50FFFF', borderRadius: 11 }}
                        />                               
                    {/* </View>              */}
                    <Text style = {{fontSize: 11, color: '#50FFFF'}}>
                        Profile
                    </Text>
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
        width: vw(100),
        paddingLeft: 15,
        bottom: -20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        marginLeft: 10
    },
    progressBar: {
      overflow: 'hidden',
      borderRadius: 3
    },
    scroll: {
        backgroundColor: '#ffffff08',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: vh(86),
        left: 0,
        borderBottomWidth: 2,
        borderBottomColor: '#68686844',
        width: vw(100)
    },
    customItem: {
        marginRight: vw(3.5),
        bottom: 20,
        left: 170,
        marginRight: 15,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: vw(90),
        backgroundColor: '#10101065',
        padding: 20,
        borderRadius: 20,
        marginBottom: 15
    },
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        position: 'absolute',
        top: vh(16)
    },
    friends: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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

export default Profile;