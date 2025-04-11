import {ScrollView, Pressable} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import ThemedViewLightRed from '../utils/ThemedViewLightRed';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import ThemedText from '../utils/ThemedText';
import Feather from 'react-native-vector-icons/Feather';
import {useSheetContext} from '../sheets/GlobalSheetContext';

import DropdownBox from '../components/DropdownBox';
import {sortOptions} from '../../assets/data';
const ShopScreen = ({route, params}) => {
  console.log(route, params);
  const {openSheet} = useSheetContext();
  return (
    <ThemedView styles="flex-1">
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <ThemedView styles="relative">
          <ThemedViewLightRed
            styles="justify-center items-center gap-1"
            style={{height: responsiveHeight(20)}}>
            <ThemedText styles="text-2xl font-Bold">
              {route?.params ? route?.params?.category : 'Shop'}
            </ThemedText>
            <ThemedText styles="font-Regular">
              Shop through our latest collection
            </ThemedText>
          </ThemedViewLightRed>

          <ThemedView
            style={{
              padding: responsiveHeight(3),
              gap: responsiveHeight(3),
            }}>
            <ThemedView styles="items-end">
              <ThemedView styles="w-52">
                <DropdownBox sortOptions={sortOptions} />
              </ThemedView>
            </ThemedView>

            {/* products */}
          </ThemedView>
        </ThemedView>
      </ScrollView>
      <Pressable
        onPress={() => openSheet('right-categories-sheet', 'right')}
        className="absolute top-40 left-0">
        <ThemedView styles=" p-2 border border-zinc-200 rounded-md">
          <Feather name="sidebar" size={20} />
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
};

export default ShopScreen;
