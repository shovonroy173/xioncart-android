// src/components/Menu.js
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSheetContext} from '../sheets/GlobalSheetContext.js';
import {SafeAreaView} from 'react-native-safe-area-context';

const Menu = () => {
  const navigation = useNavigation();
  const {openSheet, openModal} = useSheetContext();

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row justify-between items-center flex-wrap p-4">
        <Text>Menu</Text>
        <Pressable
          onPress={() =>
            navigation.navigate('BottomNavigator', {screen: 'Home'})
          }>
          <Text className="text-blue-400">Home</Text>
        </Pressable>

        <Button title="Bottom" onPress={() => openSheet('sheet1', 'bottom')} />
        {/* <Button title="Top" onPress={() => openSheet('sheet2', 'top')} /> */}
        <Button title="Left" onPress={() => openSheet('sheet3', 'left')} />
        <Button title="Right" onPress={() => openSheet('sheet4', 'right')} />
        <Button title="Open Center Modal" onPress={() => openModal('modal1')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Menu;
