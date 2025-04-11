/* eslint-disable react-native/no-inline-styles */
import {ImageBackground} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedPressable from '../utils/ThemedPressable';
import {Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const ITEM_WIDTH = responsiveWidth(100);
export const SLIDER_WIDTH = responsiveWidth(100);

const CarouselCardItem = ({item}) => {
  return (
    <ThemedView>
      <ImageBackground
        source={{uri: item?.imgUrl}}
        className=""
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(70),
          objectFit: 'cover',
          justifyContent: 'center',
          paddingHorizontal: responsiveWidth(10),
          gap: responsiveHeight(3),
        }}>
        <Text className="font-SemiBold text-2xl text-white">{item?.title}</Text>
        <ThemedPressable
          styles="py-3 rounded-lg flex-row items-center justify-center "
          style={{
            width: responsiveWidth(30),
          }}>
          <Text className="text-red-500 font-SemiBold text-lg">
            {item?.button}
          </Text>
          <Entypo name="chevron-small-right" size={24} color="#dc2626" />
        </ThemedPressable>
      </ImageBackground>
    </ThemedView>
  );
};

export default CarouselCardItem;
