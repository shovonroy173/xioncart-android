import {View, Text, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSheetContext} from './GlobalSheetContext';
import Feather from 'react-native-vector-icons/Feather';

const SearchRight = () => {
  const {closeSheet} = useSheetContext();
  const [text, onChangeText] = useState();

  return (
    <View className="gap-5">
      <View className="flex-row justify-between items-center">
        <Text>Search our site</Text>
        <Pressable onPress={() => closeSheet('right-search-sheet')}>
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View className="relative">
        <TextInput
          className="border border-black rounded-md px-10"
          onChangeText={onChangeText}
          value={text}
          placeholder="Search.."
        />
        <Feather name="search" size={20} color="black" className="absolute left-3 top-3" />
      </View>

      <View className="h-0.5 bg-zinc-300" />
      <View>
        <Text>No products found..</Text>
      </View>
    </View>
  );
};

export default SearchRight;
