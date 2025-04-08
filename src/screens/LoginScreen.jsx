import {View, Text, useColorScheme} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  const theme = useColorScheme();
  console.log(theme);
  
  return (
    <View className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <View className={`${theme === 'dark' ? 'bg-zinc-700' : 'bg-red-100'}  h-52 justify-center items-center`}>
        <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}  text-2xl font-Bold`}>Log in</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
