import React, { useRef } from 'react';
import { ScrollView, View, Text, Animated } from 'react-native';

const CustomScrollBarExample = () => {
  const scrollRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    // Do something with the scroll position
  };

  return (
    <View style={{ flex: 1 }}>
        <ScrollView
            ref={scrollRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={true} // Set to true to show the horizontal scrollbar
            horizontal={true} // Set to true to enable horizontal scrolling
            >
            <View style={{ width: 1000, flexDirection: 'row' }}>
          <Text>sffafdffshgfgsdfgshfsfdhsgfsdfgsdgfsdfgsdfgsfgsfsdfadfasdfdsafasdfasdfg</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
          <Text>sffafdf</Text>
            </View>
            </ScrollView>
              
    </View>
  );
};

export default CustomScrollBarExample;
