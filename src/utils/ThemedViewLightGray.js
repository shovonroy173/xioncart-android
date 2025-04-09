import React from 'react';
import {View} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedViewLightGray = ({children, styles, ...props}) => {
  const theme = useColorScheme();

  const themedStyles = `${
    theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'
  } ${styles}`;

  return (
    <View {...props} className={themedStyles}>
      {children}
    </View>
  );
};

export default ThemedViewLightGray;
