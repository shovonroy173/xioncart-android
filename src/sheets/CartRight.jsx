import {Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSheetContext} from './GlobalSheetContext';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import ThemedPressable from '../utils/ThemedPressable';
import ThemedText2 from '../utils/ThemeText2';
import ThemedViewBorder from '../utils/ThemedViewBorder';
import {useThemeColor} from '../utils/useThemeColor';

const CartRight = () => {
  const {closeSheet} = useSheetContext();
  const {icon} = useThemeColor();
  return (
    <ThemedView styles="flex-1 justify-between">
      <ThemedView styles="gap-5">
        <ThemedView styles="flex-row justify-between items-center">
          <ThemedText styles="font-SemiBold font-[14px]">
            Shopping cart
          </ThemedText>
          <Pressable onPress={() => closeSheet('right-cart-sheet')}>
            <MaterialCommunityIcons name="close" size={24} color={icon} />
          </Pressable>
        </ThemedView>
        <ThemedView styles="gap-2">
          <ThemedText styles="font-SemiBold font-[14px]">
            Your shop cart is empty:
          </ThemedText>
          <ThemedPressable styles="rounded-sm p-2">
            <ThemedText2 styles="text-center font-SemiBold">
              Explore Products
            </ThemedText2>
          </ThemedPressable>
        </ThemedView>
      </ThemedView>
      <ThemedView styles="gap-5">
        <ThemedView styles="flex-row justify-between">
          <ThemedText styles="font-SemiBold font-[14px]">Subtotal</ThemedText>
          <ThemedText styles="font-SemiBold font-[14px]">৳ 0.00</ThemedText>
        </ThemedView>
        <Pressable>
          <ThemedViewBorder styles="border-2  rounded-sm p-2">
            <ThemedText styles="font-SemiBold text-center">
              ThemedView Cart
            </ThemedText>
          </ThemedViewBorder>
        </Pressable>
        <ThemedPressable styles=" rounded-sm p-2">
          <ThemedText2 styles="text-center font-SemiBold">
            Check out
          </ThemedText2>
        </ThemedPressable>
      </ThemedView>
    </ThemedView>
  );
};

export default CartRight;
