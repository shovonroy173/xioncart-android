// HomeWrapper.js
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const HomeWrapper = () => {
  const isFocused = useIsFocused();

  if (!isFocused) return null;
  return <HomeScreen />;
};

export default HomeWrapper;
