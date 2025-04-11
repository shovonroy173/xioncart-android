import React from 'react';
import {Text} from 'react-native';
import {useColorScheme} from 'react-native';

const ThemedText2 = ({children, styles, ...props}) => {
  const theme = useColorScheme();

  // Apply theme-based text colors and other styles
  const themedStyles = `${
    theme === 'dark' ? 'text-zinc-200' : 'text-zinc-500'
  } ${styles}`;

  return (
    <Text {...props} className={themedStyles}>
      {children}
    </Text>
  );
};

export default ThemedText2;
