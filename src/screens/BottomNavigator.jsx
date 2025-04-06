import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import SearchScreen from './SearchScreen';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none', width: 0 },
        }}
      />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
