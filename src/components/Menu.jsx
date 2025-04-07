import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSheetContext} from '../sheets/GlobalSheetContext.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

const Menu = () => {
  const navigation = useNavigation();
  const {openSheet, openModal} = useSheetContext();

  return (
    <SafeAreaView className=" gap-2">
      <View className="flex-row justify-center items-center py-2 bg-zinc-200">
        <Text>Spring Sale: Sweet Crunchy Salad. </Text>
        <Pressable className="flex-row border-b-red-600">
          <Text className="text-red-600">Shop now</Text>
          <Feather name="arrow-up-right" size={20} color="#dc2626" />
        </Pressable>
      </View>
      <View className="flex flex-row justify-between items-center px-3 py-2">
        <Pressable onPress={() => openSheet('left-menu-sheet', 'left')}>
          <Feather
            name="bar-chart-2"
            size={28}
            color="black"
            style={{
              transform: [{rotate: '270deg'}, {rotateX: '180deg'}],
            }}
          />
        </Pressable>

        <Image
          source={require('../../assets/images/logo.png')}
          className="w-28 h-10 object-cover"
        />
        <View className="flex-row gap-3 pr-4">
          <Feather name="search" size={24} color="black" />
          <Pressable onPress={() => openSheet('right-cart-sheet', 'right')}>
            <View className="relative">
              <Feather name="shopping-bag" size={24} color="black" />
              <Text className="rounded-full bg-red-600 text-white absolute -right-3 -top-3 px-2 py-0.5">
                0
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      {/* 
      <Button title="Bottom" onPress={() => openSheet('sheet1', 'bottom')} />
      <Button title="Top" onPress={() => openSheet('sheet2', 'top')} />
      <Button title="Left" onPress={() => openSheet('sheet3', 'left')} />
      <Button title="Right" onPress={() => openSheet('sheet4', 'right')} />
      <Button title="Open Center Modal" onPress={() => openModal('modal1')} /> */}
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     padding:
//   },
// });

export default Menu;
