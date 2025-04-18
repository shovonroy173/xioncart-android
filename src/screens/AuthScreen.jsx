import {View} from 'react-native';
import React from 'react';
import LoginScreen from './LoginScreen';
import AccountScreen from './AccountScreen';
import {useSelector} from 'react-redux';

const AuthScreen = () => {
  const token = useSelector(state => state.auth.token);
  console.log('Token', token);
  return (
    <View className="flex-1">
      {token ? <AccountScreen /> : <LoginScreen />}
    </View>
  );
};

export default AuthScreen;
