import React from 'react';
import {View} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedViewLightRed = ({children, styles, ...props}) => {
  const theme = useColorScheme();

  const themedStyles = `${
    theme === 'dark' ? 'bg-red-400' : 'bg-red-50'
  } ${styles}`;

  return (
    <View {...props} className={themedStyles}>
      {children}
    </View>
  );
};

export default ThemedViewLightRed;
