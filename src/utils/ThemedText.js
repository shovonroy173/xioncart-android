import React from 'react';
import {Text} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedText = ({children, styles, ...props}) => {
  const theme = useColorScheme();

  // Apply theme-based text colors and other styles
  const themedStyles = `${
    theme === 'dark' ? 'text-white' : 'text-black'
  } ${styles}`;

  return (
    <Text {...props} className={themedStyles}>
      {children}
    </Text>
  );
};

export default ThemedText;
