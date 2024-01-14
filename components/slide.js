import React from 'react';
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const MyImageSlider = () => {

    images = [
        require('../assets/images/flowscreen1.png'),
        require('../assets/images/flowscreen2.png'),
        require('../assets/images/flowscreen3.png')
    ]

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SliderBox images={images} />
    </View>
  );
};

export default MyImageSlider;