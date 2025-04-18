/* eslint-disable react-native/no-inline-styles */
import {Pressable} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
import {navigate} from '../utils/NavigationService';
// import ThemedText2 from '../utils/ThemeText2';
import {Image} from 'react-native';
import {Text} from 'react-native';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';
// import {useNavigation} from '@react-navigation/native';

export const ITEM_WIDTH = responsiveWidth(100);
export const SLIDER_WIDTH = responsiveWidth(100);

const percentage = (purchase_price, sale_price) => {
  const purchase = parseFloat(purchase_price);
  const sale = parseFloat(sale_price);
  // console.log(typeof purchase_price, typeof sale_price);

  if (!purchase || isNaN(purchase) || isNaN(sale)) {
    return 0;
  }

  return ((sale - purchase) / sale) * 100;
};
const ProductCarouselItem = ({item}) => {
  // const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigate('BottomNavigator', {
          screen: 'SingleProduct',
          params: {id: item?._id},
        })
        // console.log('sales')
      }
      style={{
        width: responsiveWidth(40),
        height: responsiveHeight(30),
        gap: responsiveHeight(1),
      }}>
      <ThemedViewLightGray styles="w-full h-[70%] p-2 rounded-xl">
        <Image
          source={{uri: item?.images[0]?.small}}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: responsiveWidth(10),
            gap: responsiveHeight(3),
            borderRadius: 10,
            overflow: 'hidden',
          }}
        />
      </ThemedViewLightGray>

      <ThemedText styles="font-Medium text-lg">{item?.name}</ThemedText>
      <ThemedView styles="flex-row justify-between items-center">
        <ThemedView styles="flex-row gap-2 items-center">
          <ThemedText styles="font-Regular text-sm">
            ৳{item?.purchase_price}
          </ThemedText>
          <ThemedText styles="font-Regular text-xs line-through">
            ৳{item?.sale_price}
          </ThemedText>
        </ThemedView>

        <Text className="font-SemiBold text-md text-red-500">
          {percentage(item?.purchase_price, item?.sale_price)}%
        </Text>
      </ThemedView>
      {/* <View
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
        </View> */}
      {/* </ImageBackground> */}
    </Pressable>
  );
};

export default ProductCarouselItem;
