import React from 'react';
import {Pressable} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedViewPressable = ({children, onPress, styles, ...props}) => {
  const theme = useColorScheme();

  const themedStyles = `${
    theme === 'dark' ? 'bg-black' : 'bg-white'
  } ${styles}`;

  return (
    <Pressable {...props} onPress={onPress} className={themedStyles}>
      {children}
    </Pressable>
  );
};

export default ThemedViewPressable;
