import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomProgressBars = ({ width, height, progressedColor, remainingColor }) => {
    const [progress, setProgress] = useState(0);
    const relu = (number1, number2) => {
        if ((number1 - number2) < 0)
            return 0;
        else return (number1-number2);
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === 330) {
            clearInterval(interval);
            return 330;
          }
          return prevProgress + 5;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, { width, height, backgroundColor: remainingColor }]}>
                <View style={{ width: progress, height: '100%', backgroundColor: progressedColor }} />
            </View>
            <Text> </Text>
            <View style={[styles.progressBar, { width, height, backgroundColor: remainingColor }]}>
                <View style={{ width: relu(progress, 55), height: '100%', backgroundColor: progressedColor }} />
            </View>
            <Text> </Text>
            <View style={[styles.progressBar, { width, height, backgroundColor: remainingColor }]}>
                <View style={{ width: relu(progress, 110), height: '100%', backgroundColor: progressedColor }} />
            </View>
            <Text> </Text>
            <View style={[styles.progressBar, { width, height, backgroundColor: remainingColor }]}>
                <View style={{ width: relu(progress, 165), height: '100%', backgroundColor: progressedColor }} />
            </View>
            <Text> </Text>
            <View style={[styles.progressBar, { width, height, backgroundColor: remainingColor }]}>
                <View style={{ width: relu(progress, 220), height: '100%', backgroundColor: progressedColor }} />
            </View>
            <Text> </Text>
            <View style={[styles.progressBar, { width, height, backgroundColor: remainingColor }]}>
                <View style={{ width: relu(progress, 275), height: '100%', backgroundColor: progressedColor }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  progressBar: {
    overflow: 'hidden',
    borderRadius: 3
  }
});

export default CustomProgressBars;