import {StyleSheet, Text, useColorScheme} from 'react-native';

export const ThemedText2 = ({children, style, ...props}) => {
  const theme = useColorScheme();

  // Apply theme-based text colors and other styles
  const themedStyles = [
    theme === 'dark' ? styles.darkText : styles.lightText,
    style, // merge with custom styles
  ];

  return (
    <Text
    //  {...props}
    
    style={themedStyles}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    gap: 5,
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
});
