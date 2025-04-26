import React from 'react';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import {Pressable, Text} from 'react-native';
import ThemedText2 from '../utils/ThemeText2';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedPressable from '../utils/ThemedPressable';
import {useThemeColor} from '../utils/useThemeColor';
import {View} from 'react-native';
import {useSheetContext} from './GlobalSheetContext';

const CartModal = ({item}) => {
  console.log(item);
  const {icon} = useThemeColor();
  const {closeModal} = useSheetContext();

  return (
    <ThemedView styles="gap-5 p-5 rounded-xl ">
      <Pressable className="items-end" onPress={() => closeModal('cart_modal')}>
        <MaterialCommunityIcons name="close" size={24} color={icon} />
      </Pressable>

      <ThemedText styles="font-Medium text-3xl">
        {item?.cart_modal?.name}
      </ThemedText>
      <ThemedView styles="flex-row gap-3 items-center">
        <Text className="text-red-500 text-xl font-Medium">
          ৳ {item?.cart_modal?.purchase_price}
        </Text>
        <Text className="text-zinc-400 text-sm line-through font-Medium">
          ৳ {item?.cart_modal?.sale_price}
        </Text>
        <ThemedText2 styles="bg-red-500 px-3 py-1 rounded-lg font-Medium">
          ৳ {item?.cart_modal?.sale_price - item?.cart_modal?.purchase_price}{' '}
          OFF
        </ThemedText2>
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
        <ThemedPressable styles="w-[84%] rounded-md">
          <ThemedText2 styles="font-Medium text-center py-2">
            Add to cart - ৳ {item?.cart_modal?.purchase_price}
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
    </ThemedView>
  );
};

export default CartModal;
