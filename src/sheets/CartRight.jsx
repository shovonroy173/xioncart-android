import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSheetContext} from './GlobalSheetContext';

const CartRight = () => {
  const {closeSheet} = useSheetContext();

  return (
    <View>
      <View>
        <View>
          <Text>Shopping cart</Text>
          <Pressable onPress={() => closeSheet('right-cart-sheet')}>
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartRight;
