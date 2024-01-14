import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
// import RoundedView from '@hashiprobr/react-native-rounded-view';

const ServerComponent = ({ serverAvatar, serverName, totalUsers, onlineUsers }) => {
  return (
    <View style={styles.container } >
        <Image source={ serverAvatar } style={styles.image } />
        <View style = {styles.info}>
            <Text style = {{fontSize: 17, color: 'white'}}>{serverName}</Text>
            <View style = {styles.userinfo}>
                <View style = {styles.user}>
                    <Image source={require('../assets/images/person.png')} style={styles.userimage } />
                    <Text style = {{fontSize: 12, color: 'white'}}>{totalUsers}</Text>
                </View>
                <View style = {styles.user}>
                    <View style = {styles.online}/>
                    <Text style = {{fontSize: 12, color: 'white'}}>{onlineUsers}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/images/next.png')} style={styles.imagebutton} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#10101065",
        width: vw(90),
        height: vh(9),
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        fontSize: 17,
        color: 'white',
        width: vw(60),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },
    userinfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    user: {
        width: vw(19),
        height: 20,
        flexDirection: 'row',
        backgroundColor: '#ffffff10',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 10,
        marginTop: 10,
        padding: 0
    },
    online: {
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: '#4DE265'
    },
    userimage: {
        width: 8,
        height: 8
    },
    button: {
        borderColor: 'white',
        borderWidth: 2,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 10
    },
    imagebutton: {
        width: 8,
        height: 15
    }
  });
export default ServerComponent;