import React from 'react';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
export const ITEM_WIDTH = responsiveWidth(100);
export const SLIDER_WIDTH = responsiveWidth(100);

const BenefitsCarouselItem = ({item}) => {
  // const navigation = useNavigation();
  return (
    <ThemedView
      styles="justify-center items-center border border-zinc-300 rounded-lg"
      style={{
        width: responsiveWidth(90),
        paddingVertical: responsiveHeight(2),
      }}>
      {item?.icon}
      <ThemedView
        styles="w-full flex justify-center items-center"
        style={{
          marginVertical: responsiveHeight(2),
          gap: responsiveHeight(3),
        }}>
        <ThemedView styles="gap-2">
          <ThemedText styles="font-Medium text-xl text-center">
            {item?.title}
          </ThemedText>
          <ThemedText styles="font-Medium text-lg text-center">
            {item?.subTitle}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default BenefitsCarouselItem;
