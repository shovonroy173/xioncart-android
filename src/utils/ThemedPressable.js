import React from 'react';
import {Pressable} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedPressable = ({children, onPress, styles, ...props}) => {
  const theme = useColorScheme();

  const themedStyles = `${
    theme === 'dark' ? 'bg-zinc-600' : 'bg-black'
  } ${styles}`;

  return (
    <Pressable {...props} onPress={onPress} className={themedStyles}>
      {children}
    </Pressable>
  );
};

export default ThemedPressable;
