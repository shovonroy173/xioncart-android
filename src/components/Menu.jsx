import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSheetContext} from '../sheets/GlobalSheetContext.js';
import Feather from 'react-native-vector-icons/Feather';
import ThemedView from '../utils/ThemedView.js';
import ThemedViewLightGray from '../utils/ThemedViewLightGray.js';
import ThemedText from '../utils/ThemedText.js';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useThemeColor} from '../utils/useThemeColor.js';

const Menu = () => {
  const navigation = useNavigation();
  const {openSheet} = useSheetContext();
  const {icon} = useThemeColor();
  return (
    <ThemedView
      style={{
        gap: responsiveHeight(2),
      }}>
      <ThemedViewLightGray
        styles="flex-row justify-center items-center py-2 bg-zinc-200"
        style={{paddingVertical: responsiveHeight(2)}}>
        <ThemedText styles="font-Regular">
          Spring Sale: Sweet Crunchy Salad.{' '}
        </ThemedText>
        <Pressable className="flex-row border-b-red-600">
          <Text className="text-red-600 font-Regular">Shop now</Text>
          <Feather name="arrow-up-right" size={20} color="#dc2626" />
        </Pressable>
      </ThemedViewLightGray>
      <ThemedView
        styles="flex flex-row justify-between items-center"
        style={{
          paddingVertical: responsiveHeight(1),
          paddingHorizontal: responsiveWidth(3),
        }}>
        <Pressable onPress={() => openSheet('left-menu-sheet', 'left')}>
          <Feather
            name="bar-chart-2"
            size={28}
            color={icon}
            style={{
              transform: [{rotate: '270deg'}, {rotateX: '180deg'}],
            }}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('BottomNavigator', {screen: 'Home'})
          }>
          <Image
            source={require('../../assets/images/logo.webp')}
            className="w-28 h-10 object-cover"
          />
        </Pressable>

        <View
          className="flex-row"
          style={{
            gap: responsiveHeight(3),
            paddingRight: responsiveWidth(4),
          }}>
          <Pressable onPress={() => openSheet('right-search-sheet', 'right')}>
            <Feather name="search" size={24} color={icon} />
          </Pressable>

          <Pressable onPress={() => openSheet('right-cart-sheet', 'right')}>
            <View className="relative">
              <Feather name="shopping-bag" size={24} color={icon} />
              <Text className="rounded-full bg-red-500 text-white absolute -right-3 -top-3 px-2 py-0.5 font-Regular">
                0
              </Text>
            </View>
          </Pressable>
        </View>
      </ThemedView>
      {/*
      <Button title="Bottom" onPress={() => openSheet('sheet1', 'bottom')} />
      <Button title="Top" onPress={() => openSheet('sheet2', 'top')} />
      <Button title="Left" onPress={() => openSheet('sheet3', 'left')} />
      <Button title="Right" onPress={() => openSheet('sheet4', 'right')} />
      <Button title="Open Center Modal" onPress={() => openModal('modal1')} /> */}
    </ThemedView>
  );
};

export default Menu;
