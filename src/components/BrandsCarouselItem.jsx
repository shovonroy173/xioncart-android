/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedView from '../utils/ThemedView';

const BrandsCarouselItem = ({item}) => {
  return (
    <ThemedView
      styles="p-2 rounded-xl"
      style={{
        width: responsiveWidth(40),
        height: responsiveHeight(10),
        gap: responsiveHeight(1),
      }}>
      <Image
        source={{uri: item?.images?.small}}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(10),
          gap: responsiveHeight(3),
          borderRadius: 10,
          overflow: 'hidden',
        }}
      />
    </ThemedView>
  );
};

export default BrandsCarouselItem;
