import {View, Text, Pressable, Dimensions} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSheetContext} from './GlobalSheetContext';
import {useNavigation} from '@react-navigation/native';
const {height} = Dimensions.get('window');
const MenuLeft = () => {
  const {closeSheet} = useSheetContext();
  const navigation = useNavigation();
  const handleHomeRoute = () => {
    navigation.navigate('BottomNavigator', {screen: 'Home'});
    closeSheet('left-menu-sheet');
  };

  return (
    <View style={{height: height}} className="flex-1 justify-between ">
      <View className="gap-5">
        <Pressable onPress={() => closeSheet('left-menu-sheet')}>
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </Pressable>

        <View>
          <View className="gap-4">
            <Pressable className="gap-2" onPress={() => handleHomeRoute()}>
              <Text>Home</Text>
              <View className="h-[1px] bg-gray-600" />
            </Pressable>
            <Pressable className="gap-2">
              <Text>Browse All Categories</Text>
              <View className="h-[1px] bg-gray-600" />
            </Pressable>
            <Pressable className="gap-2">
              <Text>Contact</Text>
              <View className="h-[1px] bg-gray-600" />
            </Pressable>
            <Pressable className="gap-2">
              <Text>Order Tracking</Text>
              <View className="h-[1px] bg-gray-600" />
            </Pressable>
          </View>
        </View>
        <View className="flex-row items-center gap-5">
          <View className="flex-row bg-gray-300 rounded-lg py-2 px-4 gap-2 items-center">
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color="black"
            />
            <Text>Wishlist</Text>
          </View>
          <View className="flex-row bg-gray-300 rounded-lg py-2 px-4 gap-2 items-center">
            <Feather name="search" size={24} color="black" />

            <Text>Search</Text>
          </View>
        </View>
        <View>
          <Text className="border-b-zinc-700">Need help?</Text>
          <Text>Address:</Text>
          <Text>Email:</Text>
          <Text>Phone:</Text>
        </View>
      </View>
      <View className="gap-4">
        <View className="flex-row gap-3">
          <Octicons name="person" size={24} color="black" />
          <Pressable
            onPress={() =>
              navigation.navigate('BottomNavigator', {screen: 'Login'})
            }>
            <Text>Login</Text>
          </Pressable>
        </View>
        <View className="flex-row gap-5 items-center">
          <View className="flex-row gap-3">
            <Text>🇧🇩</Text>
            <Text>BDT</Text>
          </View>
          <View>
            <Text>English</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuLeft;
