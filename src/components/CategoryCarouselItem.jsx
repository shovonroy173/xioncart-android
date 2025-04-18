/* eslint-disable react-native/no-inline-styles */
import {ImageBackground, Pressable} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
import {navigate} from '../utils/NavigationService';
// import {useNavigation} from '@react-navigation/native';

export const ITEM_WIDTH = responsiveWidth(100);
export const SLIDER_WIDTH = responsiveWidth(100);

const CategoryCarouselItem = ({item}) => {
  // const navigation = useNavigation();
  // console.log(item);

  return (
    <Pressable
      onPress={() =>
        navigate('BottomNavigator', {
          screen: 'Shop',
          params: {category: item?.name},
        })
      }>
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
    </Pressable>
  );
};

export default CategoryCarouselItem;
