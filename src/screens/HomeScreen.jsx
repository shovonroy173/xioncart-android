/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {ScrollView} from 'react-native';

import ThemedView from '../utils/ThemedView';
import {ActivityIndicator} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
import Feather from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';

import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../components/CarouselCardItem';
import CarouselContanier from '../components/CarouselContainer';
import {useGetCategoryQuery} from '../redux/slices/categorySlice';
import {banner, categories} from '../../assets/data';
import CategoryCarouselItem from '../components/CategoryCarouselItem';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const isCarousel = useRef(null);
  const isCarousel2 = useRef(null);
  const {
    data: featuredCategories,
    isLoading: featuredLoading,
    isError: featuredError,
    isFetching: featuredFetching,
  } = useGetCategoryQuery();
  console.log(
    'HOME SCREEN LINE AT 8',
    featuredCategories,
    featuredLoading,
    featuredError,
    featuredFetching,
  );

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <ThemedView
        style={{
          gap: responsiveHeight(5),
        }}>
        {featuredLoading ? (
          <ActivityIndicator size={'small'} color={'#ef4444'} />
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              paddingHorizontal: responsiveWidth(10),
              paddingVertical: responsiveHeight(2),
              gap: responsiveWidth(15),
            }}>
            {featuredCategories?.categories.map(item => (
              <ThemedView
                key={item?._id}
                styles="items-center"
                style={{
                  gap: responsiveHeight(1.5),
                }}>
                <Image
                  source={{uri: item?.images[0]?.medium}}
                  className="object-cover rounded-full"
                  style={{
                    width: responsiveWidth(30),
                    height: responsiveWidth(30),
                  }}
                />
                <ThemedText styles="font-Medium">{item?.name}</ThemedText>
              </ThemedView>
            ))}

            <ThemedView
              styles="border rounded-full relative"
              style={{
                width: responsiveWidth(30),
                height: responsiveWidth(30),
              }}>
              <Feather
                name="arrow-up-right"
                size={20}
                className="absolute top-1/2 "
                style={{
                  left: responsiveWidth(12),
                  top: responsiveWidth(12),
                }}
              />
            </ThemedView>
          </ScrollView>
        )}

        <CarouselContanier
          ref={isCarousel}
          data={banner}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          paginationAbove={true}
          autoPlay={true}
        />
        <ThemedView
          style={{
            paddingHorizontal: responsiveWidth(5),
            gap: responsiveHeight(5),
          }}>
          <ThemedView
            style={{
              gap: responsiveHeight(2),
            }}>
            <ThemedText styles="font-Medium text-center text-xl">
              Categories you might like
            </ThemedText>
            <CarouselContanier
              ref={isCarousel2}
              data={categories}
              renderItem={CategoryCarouselItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              paginationAbove={false}
              autoPlay={false}
            />
          </ThemedView>
          <Footer />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

export default HomeScreen;
