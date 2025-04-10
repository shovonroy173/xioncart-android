/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {ImageBackground} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';

export const ITEM_WIDTH = responsiveWidth(100);
export const SLIDER_WIDTH = responsiveWidth(100);

const CategoryCarouselItem = ({item}) => {
  return (
    <ThemedView>
      <ImageBackground
        source={{uri: item?.imgUrl}}
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(40),
          objectFit: 'cover',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(10),
          gap: responsiveHeight(3),
          borderRadius: 15,
          overflow: 'hidden',
        }}>
        <ThemedView
          style={{
            paddingHorizontal: responsiveWidth(6),
            paddingVertical: responsiveHeight(1),
            borderRadius: 10,
            marginBottom: responsiveHeight(1),
          }}>
          <ThemedText styles="font-Medium text-xl">{item?.name}</ThemedText>
        </ThemedView>
      </ImageBackground>
    </ThemedView>
  );
};

export default CategoryCarouselItem;
