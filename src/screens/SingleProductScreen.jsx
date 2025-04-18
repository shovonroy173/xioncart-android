/* eslint-disable react-native/no-inline-styles */
import {View, Text, ActivityIndicator, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useGetSingleProductQuery} from '../redux/slices/categorySlice';
import ThemedView from '../utils/ThemedView';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useThemeColor} from '../utils/useThemeColor';
import {ScrollView} from 'react-native';
import ThemedText2 from '../utils/ThemeText2';
import ThemedViewBorder from '../utils/ThemedViewBorder';
import ThemedPressable from '../utils/ThemedPressable';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';
import {payment} from '../../assets/data';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';

const SingleProductScreen = ({route}) => {
  const {icon} = useThemeColor();
  const currentIndexRef = useRef(null);
  const navigation = useNavigation();
  console.log('LINE AT 5', route);
  const {
    data: singleProduct,
    isLoading: singleProductLoading,
    isError: singleProductError,
    isFetching: singleProductFetching,
  } = useGetSingleProductQuery(route?.params?.id);
  console.log(
    'SINGLE PRODUCT SCREEN LINE AT 14',
    singleProduct,
    singleProductLoading,
    singleProductError,
    singleProductFetching,
  );
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (singleProduct) {
      setProduct(singleProduct?.product);
      const combined = singleProduct.relatedProducts
        ? [singleProduct?.product, ...singleProduct.relatedProducts]
        : [singleProduct];
      setProductList(combined);
    }
  }, [singleProduct]);

  const handleNextProduct = dir => {
    if (!productList || productList.length === 0) {
      return;
    }

    if (currentIndexRef.current === null) {
      const currentId = route?.params?.id;
      const currentIndex = productList.findIndex(p => p._id === currentId);
      if (currentIndex === -1) {
        return;
      }
      currentIndexRef.current = currentIndex;
    }

    const nextIndex =
      dir === 'next'
        ? (currentIndexRef.current + 1) % productList.length
        : (currentIndexRef.current - 1 + productList.length) %
          productList.length;

    currentIndexRef.current = nextIndex;
    setProduct(productList[nextIndex]);
  };

  console.log('LINE AT 36', productList, 'LINE AT 54 ', product);

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <ThemedView
        style={{
          padding: responsiveWidth(5),
          gap: responsiveHeight(5),
        }}>
        {(singleProductLoading || singleProductFetching) && (
          <ActivityIndicator size={'small'} color={'#ef4444'} />
        )}

        <ThemedView styles="flex-row gap-4">
          <ThemedView styles="flex-row">
            <ThemedText
              styles="font-Medium text-sm"
              onPress={() =>
                navigation.navigate('BottomNavigator', {
                  screen: 'Home',
                })
              }>
              Home
            </ThemedText>
            <EvilIcons name="chevron-right" size={24} color={icon} />
            <ThemedText styles="font-Medium text-sm">
              {singleProduct?.breadcrumb[0]?.name}
            </ThemedText>
            <EvilIcons name="chevron-right" size={24} color={icon} />
            <Text className="text-zinc-400 font-Medium text-sm">
              {product?.name}
            </Text>
          </ThemedView>
          <ThemedView styles="flex-row items-center">
            <EvilIcons
              name="chevron-left"
              size={30}
              color={icon}
              onPress={() => handleNextProduct('left')}
            />
            <Ionicons name="grid-outline" size={14} color={icon} />
            <EvilIcons
              name="chevron-right"
              size={30}
              color={icon}
              onPress={() => handleNextProduct('next')}
            />
          </ThemedView>
        </ThemedView>
        <Image
          source={{
            uri: product?.images[0]?.large,
          }}
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(60),
            resizeMode: 'contain',
            borderRadius: 15,
            overflow: 'hidden',
          }}
        />
        <ThemedViewBorder
          styles="border rounded-md p-1 w-fit"
          style={{
            width: responsiveWidth(20),
            height: responsiveHeight(15),
          }}>
          <Image
            source={{
              uri: product?.images[0]?.small,
            }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              borderRadius: 5,
              overflow: 'hidden',
            }}
          />
        </ThemedViewBorder>
        <ThemedText styles="font-Medium text-3xl">{product?.name}</ThemedText>
        <ThemedViewBorder styles="p-2 border rounded-md self-start">
          <ThemedText styles="font-Medium">{product?.vendor?.name}</ThemedText>
        </ThemedViewBorder>
        <ThemedView styles="flex-row gap-2 items-center">
          <Image
            source={require('../../assets/images/lighting.gif')}
            style={{
              width: responsiveWidth(5),
              height: responsiveWidth(5),
            }}
          />
          <ThemedText styles="font-Medium">
            Selling fast! 46 people have this in their carts.
          </ThemedText>
        </ThemedView>
        <ThemedView styles="flex-row gap-3 items-center">
          <Text className="text-red-500 text-xl font-Medium">
            ৳ {product?.purchase_price}
          </Text>
          <Text className="text-zinc-400 text-sm line-through font-Medium">
            ৳ {product?.sale_price}
          </Text>
          <ThemedText2 styles="bg-red-500 px-3 py-1 rounded-lg font-Medium">
            ৳ {product?.sale_price - product?.purchase_price} OFF
          </ThemedText2>
        </ThemedView>
        <ThemedView styles="flex-row items-center gap-2">
          <ThemedPressable styles="px-3 py-1 rounded-lg self-start">
            <ThemedText2 styles="font-Medium">11</ThemedText2>
          </ThemedPressable>
          <ThemedText styles="font-Regular">
            People are viewing this right now
          </ThemedText>
        </ThemedView>
        <ThemedView styles="gap-2">
          <ThemedText styles="font-Regular">Quantity</ThemedText>
          <ThemedViewLightGray styles="flex-row gap-4 px-4 py-2 rounded-lg self-start items-center">
            <Feather name="plus" size={20} color={icon} />
            <ThemedText styles="font-Regular text-xl">1</ThemedText>
            <Feather name="minus" size={20} color={icon} />
          </ThemedViewLightGray>
        </ThemedView>
        <ThemedView styles="flex-row gap-3 flex-wrap">
          <ThemedPressable styles="w-[85%] rounded-md">
            <ThemedText2 styles="font-Medium text-center py-2">
              Add to cart - ৳ {product?.purchase_price}
            </ThemedText2>
          </ThemedPressable>
          <View className="border border-zinc-200 p-1 rounded-lg">
            <Feather name="heart" size={24} color={icon} />
          </View>
          <View className="border border-zinc-200 p-1 rounded-lg">
            <Feather name="share-2" size={24} color={icon} />
          </View>
        </ThemedView>

        <View className="bg-yellow-500 p-2 rounded-md">
          <Text className="text-blue-600 font-SemiBold text-center py-1">
            Buy Now
          </Text>
        </View>
        <ThemedView styles="flex-row gap-2 flex-wrap">
          <ThemedViewLightGray styles="flex-row gap-2 p-2 rounded-lg items-center">
            <Feather name="truck" size={24} color={icon} />

            <ThemedText styles="font-SemiBold">Delivery & Return</ThemedText>
          </ThemedViewLightGray>
          <ThemedViewLightGray styles="flex-row gap-2 p-2 rounded-lg items-center">
            <Feather name="share-2" size={24} color={icon} />

            <ThemedText styles="font-SemiBold">Share</ThemedText>
          </ThemedViewLightGray>
          <ThemedViewLightGray styles="flex-row gap-2 p-2 rounded-lg items-center">
            <AntDesign name="Safety" size={24} color={icon} />
            <ThemedText styles="font-SemiBold">
              Guarantee Safe Checkout
            </ThemedText>
          </ThemedViewLightGray>
        </ThemedView>
        <ThemedView styles="flex-row gap-3 justify-start">
          {payment.map(item => (
            <Image
              key={item.id}
              source={{uri: item?.url}}
              className="w-14 h-10 object-cover"
            />
          ))}
          <Image />
        </ThemedView>
        <Footer />
      </ThemedView>
    </ScrollView>
  );
};

export default SingleProductScreen;
