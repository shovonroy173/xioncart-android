import {View, Text} from 'react-native';
import React from 'react';
import AutoScrollFlatList from '../components/AutoScrollFlatList';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-red-200">
      <Text>HomeScreen</Text>
      <AutoScrollFlatList/>
    </View>
  );
};

export default HomeScreen;
