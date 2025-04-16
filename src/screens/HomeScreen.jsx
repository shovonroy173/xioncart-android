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
import {
  useGetBrandsQuery,
  useGetCategoryQuery,
  useGetProductsQuery,
} from '../redux/slices/categorySlice';
import {banner, benefits, categories, sales} from '../../assets/data';
import CategoryCarouselItem from '../components/CategoryCarouselItem';
import Footer from '../components/Footer';
import SaleCarouselItem from '../components/SaleCarouselItem';
import ProductCarouselItem from '../components/ProductCarouselItem';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';
import ThemedPressable from '../utils/ThemedPressable';
import ThemedText2 from '../utils/ThemeText2';
import BenefitsCarouselItem from '../components/BenefitsCarouselItem';
import BrandsCarouselItem from '../components/BrandsCarouselItem';

const HomeScreen = () => {
  const isCarousel = useRef(null);
  const isCarousel2 = useRef(null);
  const isCarousel3 = useRef(null);
  const isCarousel4 = useRef(null);
  const isCarousel5 = useRef(null);
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
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
    isFetching: productsFetching,
  } = useGetProductsQuery();
  console.log(
    'HOME SCREEN LINE AT 48',
    products,
    productsLoading,
    productsError,
    productsFetching,
  );
  const {
    data: brands,
    isLoading: brandsLoading,
    isError: brandsError,
    isFetching: brandsFetching,
  } = useGetBrandsQuery();
  console.log(
    'HOME SCREEN LINE AT 48',
    brands,
    brandsLoading,
    brandsError,
    brandsFetching,
  );

  // if (
  //   productsFetching ||
  //   productsLoading ||
  //   featuredLoading ||
  //   featuredLoading
  // ) {
  //   return <ActivityIndicator size={'large'} color={'#ef4444'} />;
  // }

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <ThemedView
        style={{
          gap: responsiveHeight(0),
        }}>
        {featuredLoading || featuredFetching ? (
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
          loop={false}
        />
        <ThemedView
          style={{
            paddingTop: responsiveHeight(8),
            paddingHorizontal: responsiveWidth(5),
            gap: responsiveHeight(5),
          }}>
          {/* Categories */}
          <ThemedView
            style={{
              gap: responsiveHeight(3),
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
              loop={false}
            />
          </ThemedView>
          {/* sales */}
          <CarouselContanier
            ref={isCarousel3}
            data={sales}
            renderItem={SaleCarouselItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            paginationAbove={false}
            autoPlay={false}
          />
          {/* trending products */}
          <ThemedView
            style={{
              gap: responsiveHeight(3),
            }}>
            <ThemedView
              style={{
                gap: responsiveHeight(1),
              }}>
              <ThemedText styles="font-Medium text-center text-xl">
                Trending Now
              </ThemedText>
              <ThemedText styles="font-Medium text-center text-md">
                Hot picks of the season
              </ThemedText>
            </ThemedView>
            {productsFetching || productsLoading ? (
              <ActivityIndicator size={'small'} color={'#ef4444'} />
            ) : (
              <CarouselContanier
                ref={isCarousel3}
                data={products?.products}
                renderItem={ProductCarouselItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH / 2}
                paginationAbove={false}
                autoPlay={false}
                loop={true}
                useScrollView={true}
                enableSnap={true}
              />
            )}
          </ThemedView>
          <ThemedViewLightGray
            styles="items-center rounded-sm"
            style={{
              gap: responsiveHeight(3),
            }}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dxacttggi/image/upload/c_fill,h_732,w_2000/v1/xion-cart/banners/plavpemygbfxvz7fqmyt?_a=BAMCkGWO0',
              }}
              style={{
                width: responsiveWidth(70),
                height: responsiveHeight(15),
                objectFit: 'cover',
              }}
            />
            <ThemedText styles="font-SemiBold text-2xl">
              Winter Collection
            </ThemedText>
            <ThemedText styles="font-SemiBold text-md">
              Stay warm with our new winter collection.
            </ThemedText>
            <ThemedPressable
              styles="rounded-xl"
              style={{
                paddingHorizontal: responsiveWidth(10),
                paddingVertical: responsiveHeight(2),
                marginVertical: responsiveHeight(3),
              }}>
              <ThemedText2 styles="font-SemiBold text-md">Discover</ThemedText2>
            </ThemedPressable>
          </ThemedViewLightGray>
          {/* Benefits */}
          <CarouselContanier
            ref={isCarousel4}
            data={benefits}
            renderItem={BenefitsCarouselItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            paginationAbove={false}
            autoPlay={false}
            // loop={true}
            // useScrollView={true}
          />
          <CarouselContanier
            ref={isCarousel5}
            data={brands?.brands}
            renderItem={BrandsCarouselItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH / 2}
            paginationAbove={false}
            autoPlay={true}
            loop={true}
          />
          <Footer />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

export default HomeScreen;
