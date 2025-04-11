import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSheetContext} from './GlobalSheetContext';
import Feather from 'react-native-vector-icons/Feather';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import ThemedTextInput2 from '../utils/ThemedTextInput2';
import {useThemeColor} from '../utils/useThemeColor';

const SearchRight = () => {
  const {closeSheet} = useSheetContext();
  const [search, setSearch] = useState();
  const {icon} = useThemeColor();
  return (
    <ThemedView styles="gap-5">
      <ThemedView styles="flex-row justify-between items-center">
        <ThemedText styles="font-SemiBold font-[14px]">
          Search our site
        </ThemedText>
        <Pressable onPress={() => closeSheet('right-search-sheet')}>
          <MaterialCommunityIcons name="close" size={24} color={icon} />
        </Pressable>
      </ThemedView>
      <ThemedView styles="relative">
        <ThemedTextInput2
          value={search}
          onChangeText={setSearch}
          placeholder="Search.."
          styles="p-3 border border-zinc-300 rounded-md font-Regular px-10"
        />
        <Feather
          name="search"
          size={20}
          className="absolute left-3 top-3"
          color={icon}
        />
      </ThemedView>

      <View className="h-0.5 bg-zinc-300" />
      <ThemedView>
        <ThemedText styles="font-SemiBold font-[14px]">
          No products found..
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default SearchRight;
