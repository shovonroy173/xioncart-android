import {Pressable, Dimensions, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSheetContext} from './GlobalSheetContext';
import {useNavigation} from '@react-navigation/native';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {currencyOptions, languageOptions} from '../../assets/data';
import {useThemeColor} from '../utils/useThemeColor';
import ThemedText2 from '../utils/ThemeText2';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';
import CustomDropdown from '../components/CustomDropdown';
const {height} = Dimensions.get('window');
const MenuLeft = () => {
  const {closeSheet} = useSheetContext();
  const navigation = useNavigation();
  const handleHomeRoute = () => {
    navigation.navigate('BottomNavigator', {screen: 'Home'});
    closeSheet('left-menu-sheet');
  };
  const {icon} = useThemeColor();
  return (
    <ThemedView style={{height: height}} styles="flex-1 justify-between ">
      <ThemedView styles="gap-5">
        <Pressable onPress={() => closeSheet('left-menu-sheet')}>
          <MaterialCommunityIcons name="close" size={24} color={icon} />
        </Pressable>

        <ThemedView>
          <ThemedView styles="gap-4">
            <Pressable className="gap-2" onPress={() => handleHomeRoute()}>
              <ThemedText styles="font-SemiBold text-[14px]">Home</ThemedText>
              <View className="h-[1px] bg-zinc-300" />
            </Pressable>
            <Pressable className="gap-2">
              <ThemedText styles="font-SemiBold text-[14px]">
                Browse All Categories
              </ThemedText>

              <View className="h-[1px] bg-zinc-300" />
            </Pressable>
            <Pressable className="gap-2">
              <ThemedText styles="font-SemiBold text-[14px]">
                Contact
              </ThemedText>

              <ThemedView className="h-[1px] bg-zinc-300" />
            </Pressable>
            <Pressable className="gap-2">
              <ThemedText styles="font-SemiBold text-[14px]">
                Order Tracking
              </ThemedText>

              <View className="h-[1px] bg-zinc-300" />
            </Pressable>
          </ThemedView>
        </ThemedView>
        <ThemedView styles="flex-row items-center gap-5">
          <ThemedViewLightGray styles="flex-row rounded-lg py-2 px-4 gap-2 items-center">
            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color={icon}
            />
            <ThemedText2 styles="font-SemiBold text-[14px]">
              Wishlist
            </ThemedText2>
          </ThemedViewLightGray>
          <ThemedViewLightGray styles="flex-row rounded-lg py-2 px-4 gap-2 items-center">
            <Feather name="search" size={20} color={icon} />
            <ThemedText2 styles="font-SemiBold text-[14px] ">
              Search
            </ThemedText2>
          </ThemedViewLightGray>
        </ThemedView>
        <ThemedView
          style={{
            gap: responsiveScreenHeight(1),
          }}>
          <ThemedText styles="underline font-Regular text-[14px]">
            Need help?
          </ThemedText>
          <ThemedText styles=" font-Regular">
            Address: 69/M (3rd Floor), Panthapath, Dhaka-1205, Bangladesh
          </ThemedText>
          <ThemedText styles=" font-Regular">
            Email: support@xioncart.com
          </ThemedText>
          <ThemedText styles=" font-Regular">Phone: +8801671437932</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView styles="gap-4">
        <ThemedView styles="flex-row gap-3 items-center">
          <Octicons name="person" size={24} color={icon} />
          <Pressable
            onPress={() =>
              navigation.navigate('BottomNavigator', {screen: 'Login'})
            }>
            <ThemedText styles="font-SemiBold text-[14px]">Login</ThemedText>
          </Pressable>
        </ThemedView>
        <ThemedView styles="flex-row  justify-between">
          <ThemedView styles="w-32">
            <CustomDropdown
              data={currencyOptions}
              placeholder={currencyOptions[0]?.label}
            />
          </ThemedView>

          <ThemedView styles="w-32">
            <CustomDropdown
              data={languageOptions}
              placeholder={languageOptions[0]?.label}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default MenuLeft;
