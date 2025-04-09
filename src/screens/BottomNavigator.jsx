/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import {useSheetContext} from '../sheets/GlobalSheetContext';
import {Pressable} from 'react-native';
import WishlistScreen from './WishlistScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import AuthScreen from './AuthScreen';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {openSheet} = useSheetContext();

  const handleSearchTabPress = () => {
    openSheet('right-search-sheet', 'right');
  };

  const handleCartTabPress = () => {
    openSheet('right-cart-sheet', 'right');
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {display: 'none', width: 0},
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="grid-outline"
              size={24}
              color={focused ? '#dc2626' : '#000'}
            />
          ),
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontFamily: 'AlbertSans-Regular',
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => null}
        options={{
          tabBarButton: props => (
            <Pressable
              {...props}
              onPress={e => handleSearchTabPress(e)} // Handle the tab press manually
            />
          ),
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="search-outline"
              size={24}
              color={focused ? '#dc2626' : '#000'}
            />
          ),
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontFamily: 'AlbertSans-Regular',
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AuthScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons
              name="person"
              size={24}
              color={focused ? '#dc2626' : '#000'}
            />
          ),
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontFamily: 'AlbertSans-Regular',
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color={focused ? '#dc2626' : '#000'}
            />
          ),
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: '#000',
          tabBarBadge: 0,
          tabBarLabelStyle: {
            fontFamily: 'AlbertSans-Regular',
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={() => null}
        options={{
          tabBarButton: props => (
            <Pressable {...props} onPress={e => handleCartTabPress(e)} />
          ),
          tabBarIcon: ({focused}) => (
            <Feather
              name="shopping-bag"
              size={24}
              color={focused ? '#dc2626' : '#000'}
            />
          ),
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: '#000',
          tabBarBadge: 0,
          tabBarLabelStyle: {
            fontFamily: 'AlbertSans-Regular',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
