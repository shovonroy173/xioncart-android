/* eslint-disable react-native/no-inline-styles */
import {ImageBackground, Pressable, View} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
// import {navigate} from '../utils/NavigationService';
import ThemedText2 from '../utils/ThemeText2';
// import {useNavigation} from '@react-navigation/native';

export const ITEM_WIDTH = responsiveWidth(100);
export const SLIDER_WIDTH = responsiveWidth(100);

const SaleCarouselItem = ({item}) => {
  // const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        // navigate('BottomNavigator', {
        //   screen: 'Shop',
        //   params: {category: item?.name},
        // })
        console.log('sales')
      }>
      <ImageBackground
        source={{uri: item?.imgUrl}}
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(20),
          objectFit: 'cover',
          // justifyContent: 'flex-between',
          // alignItems: 'center',
          // paddingHorizontal: responsiveWidth(10),
          // gap: responsiveHeight(3),
          borderRadius: 15,
          overflow: 'hidden',
          // background: 'red',
        }}>
        <View
          className="w-full flex justify-center items-center"
          style={{
            marginVertical: responsiveHeight(2),
            gap: responsiveHeight(3),
          }}>
          <View className="gap-2">
            <ThemedText2 styles="font-Medium text-xl text-center">
              {item?.title}
            </ThemedText2>
            <ThemedText2 styles="font-Medium text-lg text-center">
              {item?.subTitle}
            </ThemedText2>
          </View>
          <ThemedView
            style={{
              paddingHorizontal: responsiveWidth(6),
              paddingVertical: responsiveHeight(1),
              borderRadius: 10,
              marginBottom: responsiveHeight(1),
            }}>
            <ThemedText styles="font-Medium text-xl">{item?.button}</ThemedText>
          </ThemedView>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default SaleCarouselItem;
