import {View} from 'react-native';
import React from 'react';
import LoginScreen from './LoginScreen';
import AccountScreen from './AccountScreen';

const AuthScreen = () => {
  const auth = false;
  return (
    <View className="flex-1">{auth ? <AccountScreen /> : <LoginScreen />}</View>
  );
};

export default AuthScreen;
