import React from 'react';
import {View} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedViewBorder = ({children, styles, ...props}) => {
  const theme = useColorScheme();

  const themedStyles = `${
    theme === 'dark' ? 'border-white' : 'border-black'
  } ${styles}`;

  return (
    <View {...props} className={themedStyles}>
      {children}
    </View>
  );
};

export default ThemedViewBorder;
