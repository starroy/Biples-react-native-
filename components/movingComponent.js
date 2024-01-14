import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

const MovingComponent = ({ imageUrls }) => {

  useEffect(() => {
    moveRightToLeft();
  }, []);
  let imageLength = 0;

  imageUrls.forEach(url => {  // Changed map to forEach for iteration
    imageLength += url.width;
  });

  imageLength += vw(5) * imageUrls.length;
  const [position, setPosition] = useState(new Animated.Value((imageLength + vw(100))/2+5));
  // print(sum)
  const moveRightToLeft = () => {
    Animated.timing(position, {
      toValue: 0-((imageLength - vw(100))/2 + vw(5)), // Adjust the value to move the component to the desired position
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        moveLeftToRight();
      }, 3000); // Adjust the value to set the stopping time
    });
  };

  const moveLeftToRight = () => {
    Animated.timing(position, {
      toValue: (imageLength + vw(100))/2, // Adjust the value to move the component to the desired position
      duration: 0, // Set the duration to 0 for immediate movement
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      moveRightToLeft();
    });
  };

  return (
    <View style={styles.container}>
      {imageUrls.map((url, index) => (
        <Animated.Image
          key={index}
          source={url.url} 
          style={[
            styles.image,
            {
              transform: [{ translateX: position }], width: url.width
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: vw(54), height: vh(15.2), resizeMode: 'stretch',  marginLeft:vw(5)
  },
});

export default MovingComponent;