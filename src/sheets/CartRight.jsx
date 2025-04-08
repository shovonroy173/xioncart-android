import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSheetContext} from './GlobalSheetContext';

const CartRight = () => {
  const {closeSheet} = useSheetContext();

  return (
    <View className="flex-1 justify-between">
      <View className="gap-5">
        <View className="flex-row justify-between items-center">
          <Text>Shopping cart</Text>
          <Pressable onPress={() => closeSheet('right-cart-sheet')}>
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
        <View className="gap-2">
          <Text>Your shop cart is empty:</Text>
          <Pressable className="bg-black rounded-sm p-2">
            <Text className="text-white text-center">Explore Products</Text>
          </Pressable>
        </View>
      </View>
      <View className="gap-5">
        <View className="flex-row justify-between">
          <Text>Subtotal</Text>
          <Text>৳ 0.00</Text>
        </View>
        <Pressable className="border-2  rounded-sm p-2">
          <Text className="text-black text-center">View Cart</Text>
        </Pressable>
        <Pressable className="bg-black rounded-sm p-2">
          <Text className="text-white text-center">Check out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartRight;
